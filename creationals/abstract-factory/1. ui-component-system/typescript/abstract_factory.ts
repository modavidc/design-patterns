// Windows || MacOS

interface Button {
  render(): void;
}
interface TextField {
  render(): void;
}

interface UIComponentsAbstractFactory {
  createButton(): Button;

  createTextField(): TextField;
}

class WindowsButton implements Button {
  render(): void {
    console.log("Windows button rendered");
  }
}

class MacOSButton implements Button {
  render(): void {
    console.log("MacOS button rendered");
  }
}

class WindowsTextField implements TextField {
  render(): void {
    console.log("Windows text field rendered");
  }
}

class MacOSTextField implements TextField {
  render(): void {
    console.log("MacOSText field rendered");
  }
}

class WindowsUIComponentsFactory implements UIComponentsAbstractFactory {
  createButton(): Button {
    return new WindowsButton();
  }
  createTextField(): TextField {
    return new WindowsTextField();
  }
}

class MacOSUIComponentsFactory implements UIComponentsAbstractFactory {
  createButton(): Button {
    return new MacOSButton();
  }
  createTextField(): TextField {
    return new MacOSTextField();
  }
}

enum OS {
  Windows,
  MacOS,
}

class Platform {
  public static getOS(): OS {
    return OS.MacOS;
  }
}

const factory =
  Platform.getOS() === OS.Windows
    ? new WindowsUIComponentsFactory()
    : new MacOSUIComponentsFactory();

const windowsButton = factory.createButton();
const windowsTextField = factory.createTextField();

windowsButton.render();
windowsTextField.render();
