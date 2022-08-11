"use strict";
// Windows || MacOS
class WindowsButton {
    render() {
        console.log("Windows button rendered");
    }
}
class MacOSButton {
    render() {
        console.log("MacOS button rendered");
    }
}
class WindowsTextField {
    render() {
        console.log("Windows text field rendered");
    }
}
class MacOSTextField {
    render() {
        console.log("MacOSText field rendered");
    }
}
class WindowsUIComponentsFactory {
    createButton() {
        return new WindowsButton();
    }
    createTextField() {
        return new WindowsTextField();
    }
}
class MacOSUIComponentsFactory {
    createButton() {
        return new MacOSButton();
    }
    createTextField() {
        return new MacOSTextField();
    }
}
var OS;
(function (OS) {
    OS[OS["Windows"] = 0] = "Windows";
    OS[OS["MacOS"] = 1] = "MacOS";
})(OS || (OS = {}));
class Platform {
    static getOS() {
        return OS.MacOS;
    }
}
const factory = Platform.getOS() === OS.Windows
    ? new WindowsUIComponentsFactory()
    : new MacOSUIComponentsFactory();
const windowsButton = factory.createButton();
const windowsTextField = factory.createTextField();
windowsButton.render();
windowsTextField.render();
