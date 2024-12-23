# Expo Tutorial

[🔗 Link](https://docs.expo.dev/tutorial/introduction/)

---

## [7. Take a Screenshot](https://docs.expo.dev/tutorial/screenshot/)

#### 1. 라이브러리 설치

- react-native-view-shot: 스크린샷 찍기
- expo-media-library: 장치의 미디어 라이브러리에 접근

```
  npx expo install react-native-view-shot expo-media-library
```

#### 2. 권한 요청

```js
// app.js
// ...
const [status, requestPermission] = MediaLibrary.usePermissions();
// ...
if (status === null) {
  requestPermission();
} else if (status === 'granted') {
  // 권한을 얻은 상태
}
```

#### 3. 현재 view를 저장하기 위한 ref 생성

- captureRef() -> \<View\>의 스크린 샷 이미지 URI 반환

#### 4. 스크린샷 캡쳐하고 저장

---

## [8.Handle platform differences](https://docs.expo.dev/tutorial/platform-differences/)

웹 브라우저에서 스크린샷 캡쳐하기

#### 1. 라이브러리 설치

- dom-to-image: 웹 스크린 샷 캡쳐
  DOM 노드의 스크린샷을 찍어 벡터 이미지나 래스터 이미지로 변환

#### 2. 플랫폼 별 코드 추가
