"use strict";
let moduleExports = {};

["../CoreGraphics/CoreGraphics", "../Foundation/Foundation"].forEach(moduleName => {
    let module = require(moduleName);
    Object.assign(global, module);
    Object.assign(moduleExports, module);
});

let mainScreen = null;
class UIScreen extends NSObject {
    constructor(){
        super();
        let self = this;

        self.bounds = CGRectZero;
    }

    static init(){
        // Returns the instance of this class
        //   this will returns its subclass's instance
        //   when called from the subclass
        return new this();
    }

    static _initWithTerminal(terminal){
        let screen = UIScreen.init();
        screen.bounds = CGRectMake(0, 0, terminal.width + 1, terminal.height + 1);
        mainScreen = screen;
        return screen;
    }

    static mainScreen(){
        return mainScreen;
    }

    description(){
        return "UIScreen";
    }
}

moduleExports.UIScreen = UIScreen;
module.exports = moduleExports;
