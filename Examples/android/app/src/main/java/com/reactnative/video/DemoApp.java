package com.reactnative.video;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.brentvatne.react.ReactVideoPackage;

import java.util.Arrays;
import java.util.List;

public class DemoApp extends Application implements ReactApplication {
    private final ReactNativeHost rnHost = new ReactNativeHost(this) {
        @Override
        protected boolean getUseDeveloperSupport() {
            return true;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new ReactVideoPackage()
            );
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return rnHost;
    }
}
