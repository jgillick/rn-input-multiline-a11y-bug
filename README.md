# React Native 0.71 multi-line TextInput Accessibility Bug

With React Native 0.71, multi-line TextInput fields are no longer accessible and do not announce "is editing" to assistive devices. This results in assistive device keyboards, like braille screen input, from working and renders the text input entirely unusable.

## Setup

```shell
yarn install
yarn expo start
```

## To Test

This is best tested on an actual iOS device with VoiceOver enabled.

1. Using Expo Go, open the app on your physical iOS device.
2. Then, go into iOS Settings > Accessibility > VoiceOver and enable VoiceOver
3. Swipe from the bottom of the screen to the top to enable the app switcher.
4. Long-tap on the ExpoGo screen to highlight, then double-tap to switch to it.
5. Long-tap on (or right-swipe to navigate) the first text field, then double-tap.
6. Verify it says "is editing" and "insertion point..." in the description after double-tapping.
7. Navigate to the second text field (long-tap or right-swipe), then double tap.
8. Verify it does not say "is editing" or "insertion point" after double-tapping.
