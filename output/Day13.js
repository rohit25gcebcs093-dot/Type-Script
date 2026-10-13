"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
var UserNameSpace;
(function (UserNameSpace) {
    class Auth {
        login() {
            console.log("user login function");
        }
    }
    UserNameSpace.Auth = Auth;
    function getList() {
        console.log("List of users", apiURL);
    }
    UserNameSpace.getList = getList;
    const apiURL = "www.google,com";
})(UserNameSpace || (UserNameSpace = {}));
var AdminNameSpace;
(function (AdminNameSpace) {
    class Auth {
        login() {
            console.log("user login function");
        }
    }
    function getList() {
        console.log("List of users");
    }
})(AdminNameSpace || (AdminNameSpace = {}));
var user8 = new UserNameSpace.Auth();
user8.login();
UserNameSpace.getList();
// Decorators are the specialkind if decalaration that can be attached
// to classes,methods , properties or parameters to modify their behavoiur.
function classLogger(constructor) {
    console.log(constructor.name);
}
function getKeyDetails(target, key) {
    console.log(key.name);
}
let CustomMaths = (() => {
    let _classDecorators = [classLogger];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _value1_decorators;
    let _value1_initializers = [];
    let _value1_extraInitializers = [];
    var CustomMaths = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _value1_decorators = [getKeyDetails];
            __esDecorate(null, null, _value1_decorators, { kind: "field", name: "value1", static: false, private: false, access: { has: obj => "value1" in obj, get: obj => obj.value1, set: (obj, value) => { obj.value1 = value; } }, metadata: _metadata }, _value1_initializers, _value1_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            CustomMaths = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        value1 = __runInitializers(this, _value1_initializers, void 0);
        value2 = __runInitializers(this, _value1_extraInitializers);
        constructor(x, y) {
            this.value1 = x;
            this.value2 = y;
        }
    };
    return CustomMaths = _classThis;
})();
var cm1 = new CustomMaths(10, 20);
//Promise 
function complexLogic() {
    return new Promise((resolved) => {
        setTimeout(() => {
            resolved("result is here");
        }, 2000);
    });
}
complexLogic().then((data) => {
    console.log(data);
    test2();
});
function test2() {
    console.log("test2");
}
//# sourceMappingURL=Day13.js.map