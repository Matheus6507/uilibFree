import { Camera, CameraType } from 'expo-camera';
import { CameraCapturedPicture } from 'expo-camera/build/Camera.types';
import { Camera as CameraIcon, CameraRotate } from 'phosphor-react-native';
import { useRef, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { NotificationsContainer } from "./styles";

export function Notifications() {
    const [type, setType] = useState(CameraType.front);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const cameraRef = useRef<Camera>(null);
    const [photoUri, setPhotoUri] = useState<string | null>(null);

    if (!permission?.granted) {
        askForPermission();
    }

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    async function askForPermission() {
        await requestPermission();
    }

    async function takePicture() {
        if (cameraRef.current) {
            await cameraRef.current._onCameraReady();
            let photo: CameraCapturedPicture = await cameraRef.current.takePictureAsync();
            setPhotoUri(photo.uri);
        }
    }

    return (
        <NotificationsContainer>
            {photoUri ?
                <Image source={{ uri: photoUri }} style={{ flex: 1, width: "100%" }} /> :
                <Camera type={type} style={{ flex: 1, width: "100%" }} ref={cameraRef} >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 32 }}>
                        <TouchableOpacity onPress={toggleCameraType}>
                            <CameraRotate />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={takePicture}>
                            <CameraIcon />
                        </TouchableOpacity>
                    </View>
                </Camera>}
        </NotificationsContainer>
    )
}