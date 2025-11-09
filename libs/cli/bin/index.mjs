#!/usr/bin/env node
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/regenerator-runtime/runtime.js
var require_runtime = __commonJS({
  "node_modules/regenerator-runtime/runtime.js"(exports, module) {
    "use strict";
    var runtime = (function(exports2) {
      "use strict";
      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
      };
      var undefined2;
      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
      function define(obj, key, value) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return obj[key];
      }
      __name(define, "define");
      try {
        define({}, "");
      } catch (err) {
        define = /* @__PURE__ */ __name(function(obj, key, value) {
          return obj[key] = value;
        }, "define");
      }
      function wrap(innerFn, outerFn, self2, tryLocsList) {
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        defineProperty(generator, "_invoke", {
          value: makeInvokeMethod(innerFn, self2, context)
        });
        return generator;
      }
      __name(wrap, "wrap");
      exports2.wrap = wrap;
      function tryCatch(fn, obj, arg) {
        try {
          return {
            type: "normal",
            arg: fn.call(obj, arg)
          };
        } catch (err) {
          return {
            type: "throw",
            arg: err
          };
        }
      }
      __name(tryCatch, "tryCatch");
      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed";
      var ContinueSentinel = {};
      function Generator() {
      }
      __name(Generator, "Generator");
      function GeneratorFunction() {
      }
      __name(GeneratorFunction, "GeneratorFunction");
      function GeneratorFunctionPrototype() {
      }
      __name(GeneratorFunctionPrototype, "GeneratorFunctionPrototype");
      var IteratorPrototype = {};
      define(IteratorPrototype, iteratorSymbol, function() {
        return this;
      });
      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        IteratorPrototype = NativeIteratorPrototype;
      }
      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = GeneratorFunctionPrototype;
      defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
      });
      defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
      });
      GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
      function defineIteratorMethods(prototype) {
        [
          "next",
          "throw",
          "return"
        ].forEach(function(method) {
          define(prototype, method, function(arg) {
            return this._invoke(method, arg);
          });
        });
      }
      __name(defineIteratorMethods, "defineIteratorMethods");
      exports2.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };
      exports2.mark = function(genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
      };
      exports2.awrap = function(arg) {
        return {
          __await: arg
        };
      };
      function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);
          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;
            if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
              return PromiseImpl.resolve(value.__await).then(function(value2) {
                invoke("next", value2, resolve, reject);
              }, function(err) {
                invoke("throw", err, resolve, reject);
              });
            }
            return PromiseImpl.resolve(value).then(function(unwrapped) {
              result.value = unwrapped;
              resolve(result);
            }, function(error) {
              return invoke("throw", error, resolve, reject);
            });
          }
        }
        __name(invoke, "invoke");
        var previousPromise;
        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function(resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          __name(callInvokeWithMethodAndArg, "callInvokeWithMethodAndArg");
          return previousPromise = // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(
            callInvokeWithMethodAndArg,
            // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg
          ) : callInvokeWithMethodAndArg();
        }
        __name(enqueue, "enqueue");
        defineProperty(this, "_invoke", {
          value: enqueue
        });
      }
      __name(AsyncIterator, "AsyncIterator");
      defineIteratorMethods(AsyncIterator.prototype);
      define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
      });
      exports2.AsyncIterator = AsyncIterator;
      exports2.async = function(innerFn, outerFn, self2, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self2, tryLocsList), PromiseImpl);
        return exports2.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
      };
      function makeInvokeMethod(innerFn, self2, context) {
        var state = GenStateSuspendedStart;
        return /* @__PURE__ */ __name(function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }
          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            }
            return doneResult();
          }
          context.method = method;
          context.arg = arg;
          while (true) {
            var delegate = context.delegate;
            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);
              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }
            if (context.method === "next") {
              context.sent = context._sent = context.arg;
            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }
              context.dispatchException(context.arg);
            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }
            state = GenStateExecuting;
            var record = tryCatch(innerFn, self2, context);
            if (record.type === "normal") {
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;
              if (record.arg === ContinueSentinel) {
                continue;
              }
              return {
                value: record.arg,
                done: context.done
              };
            } else if (record.type === "throw") {
              state = GenStateCompleted;
              context.method = "throw";
              context.arg = record.arg;
            }
          }
        }, "invoke");
      }
      __name(makeInvokeMethod, "makeInvokeMethod");
      function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method;
        var method = delegate.iterator[methodName];
        if (method === undefined2) {
          context.delegate = null;
          if (methodName === "throw" && delegate.iterator["return"]) {
            context.method = "return";
            context.arg = undefined2;
            maybeInvokeDelegate(delegate, context);
            if (context.method === "throw") {
              return ContinueSentinel;
            }
          }
          if (methodName !== "return") {
            context.method = "throw";
            context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
          }
          return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }
        if (info.done) {
          context[delegate.resultName] = info.value;
          context.next = delegate.nextLoc;
          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined2;
          }
        } else {
          return info;
        }
        context.delegate = null;
        return ContinueSentinel;
      }
      __name(maybeInvokeDelegate, "maybeInvokeDelegate");
      defineIteratorMethods(Gp);
      define(Gp, toStringTagSymbol, "Generator");
      define(Gp, iteratorSymbol, function() {
        return this;
      });
      define(Gp, "toString", function() {
        return "[object Generator]";
      });
      function pushTryEntry(locs) {
        var entry = {
          tryLoc: locs[0]
        };
        if (1 in locs) {
          entry.catchLoc = locs[1];
        }
        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
      }
      __name(pushTryEntry, "pushTryEntry");
      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }
      __name(resetTryEntry, "resetTryEntry");
      function Context(tryLocsList) {
        this.tryEntries = [
          {
            tryLoc: "root"
          }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }
      __name(Context, "Context");
      exports2.keys = function(val) {
        var object = Object(val);
        var keys = [];
        for (var key in object) {
          keys.push(key);
        }
        keys.reverse();
        return /* @__PURE__ */ __name(function next() {
          while (keys.length) {
            var key2 = keys.pop();
            if (key2 in object) {
              next.value = key2;
              next.done = false;
              return next;
            }
          }
          next.done = true;
          return next;
        }, "next");
      };
      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];
          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }
          if (typeof iterable.next === "function") {
            return iterable;
          }
          if (!isNaN(iterable.length)) {
            var i = -1, next = /* @__PURE__ */ __name(function next2() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next2.value = iterable[i];
                  next2.done = false;
                  return next2;
                }
              }
              next2.value = undefined2;
              next2.done = true;
              return next2;
            }, "next");
            return next.next = next;
          }
        }
        return {
          next: doneResult
        };
      }
      __name(values, "values");
      exports2.values = values;
      function doneResult() {
        return {
          value: undefined2,
          done: true
        };
      }
      __name(doneResult, "doneResult");
      Context.prototype = {
        constructor: Context,
        reset: /* @__PURE__ */ __name(function(skipTempReset) {
          this.prev = 0;
          this.next = 0;
          this.sent = this._sent = undefined2;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined2;
          this.tryEntries.forEach(resetTryEntry);
          if (!skipTempReset) {
            for (var name in this) {
              if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined2;
              }
            }
          }
        }, "reset"),
        stop: /* @__PURE__ */ __name(function() {
          this.done = true;
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;
          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }
          return this.rval;
        }, "stop"),
        dispatchException: /* @__PURE__ */ __name(function(exception) {
          if (this.done) {
            throw exception;
          }
          var context = this;
          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;
            if (caught) {
              context.method = "next";
              context.arg = undefined2;
            }
            return !!caught;
          }
          __name(handle, "handle");
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;
            if (entry.tryLoc === "root") {
              return handle("end");
            }
            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");
              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        }, "dispatchException"),
        abrupt: /* @__PURE__ */ __name(function(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }
          if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            finallyEntry = null;
          }
          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;
          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }
          return this.complete(record);
        }, "abrupt"),
        complete: /* @__PURE__ */ __name(function(record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }
          if (record.type === "break" || record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }
          return ContinueSentinel;
        }, "complete"),
        finish: /* @__PURE__ */ __name(function(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        }, "finish"),
        "catch": /* @__PURE__ */ __name(function(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;
              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }
              return thrown;
            }
          }
          throw new Error("illegal catch attempt");
        }, "catch"),
        delegateYield: /* @__PURE__ */ __name(function(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName,
            nextLoc
          };
          if (this.method === "next") {
            this.arg = undefined2;
          }
          return ContinueSentinel;
        }, "delegateYield")
      };
      return exports2;
    })(
      // If this script is executing as a CommonJS module, use module.exports
      // as the regeneratorRuntime namespace. Otherwise create a new empty
      // object. Either way, the resulting object will be used to initialize
      // the regeneratorRuntime variable at the top of this file.
      typeof module === "object" ? module.exports : {}
    );
    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      if (typeof globalThis === "object") {
        globalThis.regeneratorRuntime = runtime;
      } else {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }
  }
});

// node_modules/commander/lib/error.js
var require_error = __commonJS({
  "node_modules/commander/lib/error.js"(exports) {
    "use strict";
    var _a;
    var CommanderError2 = (_a = class extends Error {
      /**
      * Constructs the CommanderError class
      * @param {number} exitCode suggested exit code which could be used with process.exit
      * @param {string} code an id string representing the error
      * @param {string} message human-readable description of the error
      * @constructor
      */
      constructor(exitCode, code, message) {
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.code = code;
        this.exitCode = exitCode;
        this.nestedError = void 0;
      }
    }, __name(_a, "CommanderError"), _a);
    var _a2;
    var InvalidArgumentError2 = (_a2 = class extends CommanderError2 {
      /**
      * Constructs the InvalidArgumentError class
      * @param {string} [message] explanation of why argument is invalid
      * @constructor
      */
      constructor(message) {
        super(1, "commander.invalidArgument", message);
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
      }
    }, __name(_a2, "InvalidArgumentError"), _a2);
    exports.CommanderError = CommanderError2;
    exports.InvalidArgumentError = InvalidArgumentError2;
  }
});

// node_modules/commander/lib/argument.js
var require_argument = __commonJS({
  "node_modules/commander/lib/argument.js"(exports) {
    "use strict";
    var { InvalidArgumentError: InvalidArgumentError2 } = require_error();
    var _a;
    var Argument2 = (_a = class {
      /**
      * Initialize a new command argument with the given name and description.
      * The default is that the argument is required, and you can explicitly
      * indicate this with <> around the name. Put [] around the name for an optional argument.
      *
      * @param {string} name
      * @param {string} [description]
      */
      constructor(name, description) {
        this.description = description || "";
        this.variadic = false;
        this.parseArg = void 0;
        this.defaultValue = void 0;
        this.defaultValueDescription = void 0;
        this.argChoices = void 0;
        switch (name[0]) {
          case "<":
            this.required = true;
            this._name = name.slice(1, -1);
            break;
          case "[":
            this.required = false;
            this._name = name.slice(1, -1);
            break;
          default:
            this.required = true;
            this._name = name;
            break;
        }
        if (this._name.length > 3 && this._name.slice(-3) === "...") {
          this.variadic = true;
          this._name = this._name.slice(0, -3);
        }
      }
      /**
      * Return argument name.
      *
      * @return {string}
      */
      name() {
        return this._name;
      }
      /**
      * @api private
      */
      _concatValue(value, previous) {
        if (previous === this.defaultValue || !Array.isArray(previous)) {
          return [
            value
          ];
        }
        return previous.concat(value);
      }
      /**
      * Set the default value, and optionally supply the description to be displayed in the help.
      *
      * @param {any} value
      * @param {string} [description]
      * @return {Argument}
      */
      default(value, description) {
        this.defaultValue = value;
        this.defaultValueDescription = description;
        return this;
      }
      /**
      * Set the custom handler for processing CLI command arguments into argument values.
      *
      * @param {Function} [fn]
      * @return {Argument}
      */
      argParser(fn) {
        this.parseArg = fn;
        return this;
      }
      /**
      * Only allow argument value to be one of choices.
      *
      * @param {string[]} values
      * @return {Argument}
      */
      choices(values) {
        this.argChoices = values.slice();
        this.parseArg = (arg, previous) => {
          if (!this.argChoices.includes(arg)) {
            throw new InvalidArgumentError2(`Allowed choices are ${this.argChoices.join(", ")}.`);
          }
          if (this.variadic) {
            return this._concatValue(arg, previous);
          }
          return arg;
        };
        return this;
      }
      /**
      * Make argument required.
      */
      argRequired() {
        this.required = true;
        return this;
      }
      /**
      * Make argument optional.
      */
      argOptional() {
        this.required = false;
        return this;
      }
    }, __name(_a, "Argument"), _a);
    function humanReadableArgName(arg) {
      const nameOutput = arg.name() + (arg.variadic === true ? "..." : "");
      return arg.required ? "<" + nameOutput + ">" : "[" + nameOutput + "]";
    }
    __name(humanReadableArgName, "humanReadableArgName");
    exports.Argument = Argument2;
    exports.humanReadableArgName = humanReadableArgName;
  }
});

// node_modules/commander/lib/help.js
var require_help = __commonJS({
  "node_modules/commander/lib/help.js"(exports) {
    "use strict";
    var { humanReadableArgName } = require_argument();
    var _a;
    var Help2 = (_a = class {
      constructor() {
        this.helpWidth = void 0;
        this.sortSubcommands = false;
        this.sortOptions = false;
        this.showGlobalOptions = false;
      }
      /**
      * Get an array of the visible subcommands. Includes a placeholder for the implicit help command, if there is one.
      *
      * @param {Command} cmd
      * @returns {Command[]}
      */
      visibleCommands(cmd) {
        const visibleCommands = cmd.commands.filter((cmd2) => !cmd2._hidden);
        if (cmd._hasImplicitHelpCommand()) {
          const [, helpName, helpArgs] = cmd._helpCommandnameAndArgs.match(/([^ ]+) *(.*)/);
          const helpCommand = cmd.createCommand(helpName).helpOption(false);
          helpCommand.description(cmd._helpCommandDescription);
          if (helpArgs) helpCommand.arguments(helpArgs);
          visibleCommands.push(helpCommand);
        }
        if (this.sortSubcommands) {
          visibleCommands.sort((a, b) => {
            return a.name().localeCompare(b.name());
          });
        }
        return visibleCommands;
      }
      /**
      * Compare options for sort.
      *
      * @param {Option} a
      * @param {Option} b
      * @returns number
      */
      compareOptions(a, b) {
        const getSortKey = /* @__PURE__ */ __name((option) => {
          return option.short ? option.short.replace(/^-/, "") : option.long.replace(/^--/, "");
        }, "getSortKey");
        return getSortKey(a).localeCompare(getSortKey(b));
      }
      /**
      * Get an array of the visible options. Includes a placeholder for the implicit help option, if there is one.
      *
      * @param {Command} cmd
      * @returns {Option[]}
      */
      visibleOptions(cmd) {
        const visibleOptions = cmd.options.filter((option) => !option.hidden);
        const showShortHelpFlag = cmd._hasHelpOption && cmd._helpShortFlag && !cmd._findOption(cmd._helpShortFlag);
        const showLongHelpFlag = cmd._hasHelpOption && !cmd._findOption(cmd._helpLongFlag);
        if (showShortHelpFlag || showLongHelpFlag) {
          let helpOption;
          if (!showShortHelpFlag) {
            helpOption = cmd.createOption(cmd._helpLongFlag, cmd._helpDescription);
          } else if (!showLongHelpFlag) {
            helpOption = cmd.createOption(cmd._helpShortFlag, cmd._helpDescription);
          } else {
            helpOption = cmd.createOption(cmd._helpFlags, cmd._helpDescription);
          }
          visibleOptions.push(helpOption);
        }
        if (this.sortOptions) {
          visibleOptions.sort(this.compareOptions);
        }
        return visibleOptions;
      }
      /**
      * Get an array of the visible global options. (Not including help.)
      *
      * @param {Command} cmd
      * @returns {Option[]}
      */
      visibleGlobalOptions(cmd) {
        if (!this.showGlobalOptions) return [];
        const globalOptions = [];
        for (let parentCmd = cmd.parent; parentCmd; parentCmd = parentCmd.parent) {
          const visibleOptions = parentCmd.options.filter((option) => !option.hidden);
          globalOptions.push(...visibleOptions);
        }
        if (this.sortOptions) {
          globalOptions.sort(this.compareOptions);
        }
        return globalOptions;
      }
      /**
      * Get an array of the arguments if any have a description.
      *
      * @param {Command} cmd
      * @returns {Argument[]}
      */
      visibleArguments(cmd) {
        if (cmd._argsDescription) {
          cmd._args.forEach((argument) => {
            argument.description = argument.description || cmd._argsDescription[argument.name()] || "";
          });
        }
        if (cmd._args.find((argument) => argument.description)) {
          return cmd._args;
        }
        return [];
      }
      /**
      * Get the command term to show in the list of subcommands.
      *
      * @param {Command} cmd
      * @returns {string}
      */
      subcommandTerm(cmd) {
        const args = cmd._args.map((arg) => humanReadableArgName(arg)).join(" ");
        return cmd._name + (cmd._aliases[0] ? "|" + cmd._aliases[0] : "") + (cmd.options.length ? " [options]" : "") + // simplistic check for non-help option
        (args ? " " + args : "");
      }
      /**
      * Get the option term to show in the list of options.
      *
      * @param {Option} option
      * @returns {string}
      */
      optionTerm(option) {
        return option.flags;
      }
      /**
      * Get the argument term to show in the list of arguments.
      *
      * @param {Argument} argument
      * @returns {string}
      */
      argumentTerm(argument) {
        return argument.name();
      }
      /**
      * Get the longest command term length.
      *
      * @param {Command} cmd
      * @param {Help} helper
      * @returns {number}
      */
      longestSubcommandTermLength(cmd, helper) {
        return helper.visibleCommands(cmd).reduce((max, command) => {
          return Math.max(max, helper.subcommandTerm(command).length);
        }, 0);
      }
      /**
      * Get the longest option term length.
      *
      * @param {Command} cmd
      * @param {Help} helper
      * @returns {number}
      */
      longestOptionTermLength(cmd, helper) {
        return helper.visibleOptions(cmd).reduce((max, option) => {
          return Math.max(max, helper.optionTerm(option).length);
        }, 0);
      }
      /**
      * Get the longest global option term length.
      *
      * @param {Command} cmd
      * @param {Help} helper
      * @returns {number}
      */
      longestGlobalOptionTermLength(cmd, helper) {
        return helper.visibleGlobalOptions(cmd).reduce((max, option) => {
          return Math.max(max, helper.optionTerm(option).length);
        }, 0);
      }
      /**
      * Get the longest argument term length.
      *
      * @param {Command} cmd
      * @param {Help} helper
      * @returns {number}
      */
      longestArgumentTermLength(cmd, helper) {
        return helper.visibleArguments(cmd).reduce((max, argument) => {
          return Math.max(max, helper.argumentTerm(argument).length);
        }, 0);
      }
      /**
      * Get the command usage to be displayed at the top of the built-in help.
      *
      * @param {Command} cmd
      * @returns {string}
      */
      commandUsage(cmd) {
        let cmdName = cmd._name;
        if (cmd._aliases[0]) {
          cmdName = cmdName + "|" + cmd._aliases[0];
        }
        let parentCmdNames = "";
        for (let parentCmd = cmd.parent; parentCmd; parentCmd = parentCmd.parent) {
          parentCmdNames = parentCmd.name() + " " + parentCmdNames;
        }
        return parentCmdNames + cmdName + " " + cmd.usage();
      }
      /**
      * Get the description for the command.
      *
      * @param {Command} cmd
      * @returns {string}
      */
      commandDescription(cmd) {
        return cmd.description();
      }
      /**
      * Get the subcommand summary to show in the list of subcommands.
      * (Fallback to description for backwards compatibility.)
      *
      * @param {Command} cmd
      * @returns {string}
      */
      subcommandDescription(cmd) {
        return cmd.summary() || cmd.description();
      }
      /**
      * Get the option description to show in the list of options.
      *
      * @param {Option} option
      * @return {string}
      */
      optionDescription(option) {
        const extraInfo = [];
        if (option.argChoices) {
          extraInfo.push(
            // use stringify to match the display of the default value
            `choices: ${option.argChoices.map((choice) => JSON.stringify(choice)).join(", ")}`
          );
        }
        if (option.defaultValue !== void 0) {
          const showDefault = option.required || option.optional || option.isBoolean() && typeof option.defaultValue === "boolean";
          if (showDefault) {
            extraInfo.push(`default: ${option.defaultValueDescription || JSON.stringify(option.defaultValue)}`);
          }
        }
        if (option.presetArg !== void 0 && option.optional) {
          extraInfo.push(`preset: ${JSON.stringify(option.presetArg)}`);
        }
        if (option.envVar !== void 0) {
          extraInfo.push(`env: ${option.envVar}`);
        }
        if (extraInfo.length > 0) {
          return `${option.description} (${extraInfo.join(", ")})`;
        }
        return option.description;
      }
      /**
      * Get the argument description to show in the list of arguments.
      *
      * @param {Argument} argument
      * @return {string}
      */
      argumentDescription(argument) {
        const extraInfo = [];
        if (argument.argChoices) {
          extraInfo.push(
            // use stringify to match the display of the default value
            `choices: ${argument.argChoices.map((choice) => JSON.stringify(choice)).join(", ")}`
          );
        }
        if (argument.defaultValue !== void 0) {
          extraInfo.push(`default: ${argument.defaultValueDescription || JSON.stringify(argument.defaultValue)}`);
        }
        if (extraInfo.length > 0) {
          const extraDescripton = `(${extraInfo.join(", ")})`;
          if (argument.description) {
            return `${argument.description} ${extraDescripton}`;
          }
          return extraDescripton;
        }
        return argument.description;
      }
      /**
      * Generate the built-in help text.
      *
      * @param {Command} cmd
      * @param {Help} helper
      * @returns {string}
      */
      formatHelp(cmd, helper) {
        const termWidth = helper.padWidth(cmd, helper);
        const helpWidth = helper.helpWidth || 80;
        const itemIndentWidth = 2;
        const itemSeparatorWidth = 2;
        function formatItem(term, description) {
          if (description) {
            const fullText = `${term.padEnd(termWidth + itemSeparatorWidth)}${description}`;
            return helper.wrap(fullText, helpWidth - itemIndentWidth, termWidth + itemSeparatorWidth);
          }
          return term;
        }
        __name(formatItem, "formatItem");
        function formatList(textArray) {
          return textArray.join("\n").replace(/^/gm, " ".repeat(itemIndentWidth));
        }
        __name(formatList, "formatList");
        let output = [
          `Usage: ${helper.commandUsage(cmd)}`,
          ""
        ];
        const commandDescription = helper.commandDescription(cmd);
        if (commandDescription.length > 0) {
          output = output.concat([
            commandDescription,
            ""
          ]);
        }
        const argumentList = helper.visibleArguments(cmd).map((argument) => {
          return formatItem(helper.argumentTerm(argument), helper.argumentDescription(argument));
        });
        if (argumentList.length > 0) {
          output = output.concat([
            "Arguments:",
            formatList(argumentList),
            ""
          ]);
        }
        const optionList = helper.visibleOptions(cmd).map((option) => {
          return formatItem(helper.optionTerm(option), helper.optionDescription(option));
        });
        if (optionList.length > 0) {
          output = output.concat([
            "Options:",
            formatList(optionList),
            ""
          ]);
        }
        if (this.showGlobalOptions) {
          const globalOptionList = helper.visibleGlobalOptions(cmd).map((option) => {
            return formatItem(helper.optionTerm(option), helper.optionDescription(option));
          });
          if (globalOptionList.length > 0) {
            output = output.concat([
              "Global Options:",
              formatList(globalOptionList),
              ""
            ]);
          }
        }
        const commandList = helper.visibleCommands(cmd).map((cmd2) => {
          return formatItem(helper.subcommandTerm(cmd2), helper.subcommandDescription(cmd2));
        });
        if (commandList.length > 0) {
          output = output.concat([
            "Commands:",
            formatList(commandList),
            ""
          ]);
        }
        return output.join("\n");
      }
      /**
      * Calculate the pad width from the maximum term length.
      *
      * @param {Command} cmd
      * @param {Help} helper
      * @returns {number}
      */
      padWidth(cmd, helper) {
        return Math.max(helper.longestOptionTermLength(cmd, helper), helper.longestGlobalOptionTermLength(cmd, helper), helper.longestSubcommandTermLength(cmd, helper), helper.longestArgumentTermLength(cmd, helper));
      }
      /**
      * Wrap the given string to width characters per line, with lines after the first indented.
      * Do not wrap if insufficient room for wrapping (minColumnWidth), or string is manually formatted.
      *
      * @param {string} str
      * @param {number} width
      * @param {number} indent
      * @param {number} [minColumnWidth=40]
      * @return {string}
      *
      */
      wrap(str, width, indent, minColumnWidth = 40) {
        if (str.match(/[\n]\s+/)) return str;
        const columnWidth = width - indent;
        if (columnWidth < minColumnWidth) return str;
        const leadingStr = str.slice(0, indent);
        const columnText = str.slice(indent);
        const indentString = " ".repeat(indent);
        const regex = new RegExp(".{1," + (columnWidth - 1) + "}([\\s\u200B]|$)|[^\\s\u200B]+?([\\s\u200B]|$)", "g");
        const lines = columnText.match(regex) || [];
        return leadingStr + lines.map((line, i) => {
          if (line.slice(-1) === "\n") {
            line = line.slice(0, line.length - 1);
          }
          return (i > 0 ? indentString : "") + line.trimRight();
        }).join("\n");
      }
    }, __name(_a, "Help"), _a);
    exports.Help = Help2;
  }
});

// node_modules/commander/lib/option.js
var require_option = __commonJS({
  "node_modules/commander/lib/option.js"(exports) {
    "use strict";
    var { InvalidArgumentError: InvalidArgumentError2 } = require_error();
    var _a;
    var Option2 = (_a = class {
      /**
      * Initialize a new `Option` with the given `flags` and `description`.
      *
      * @param {string} flags
      * @param {string} [description]
      */
      constructor(flags, description) {
        this.flags = flags;
        this.description = description || "";
        this.required = flags.includes("<");
        this.optional = flags.includes("[");
        this.variadic = /\w\.\.\.[>\]]$/.test(flags);
        this.mandatory = false;
        const optionFlags = splitOptionFlags(flags);
        this.short = optionFlags.shortFlag;
        this.long = optionFlags.longFlag;
        this.negate = false;
        if (this.long) {
          this.negate = this.long.startsWith("--no-");
        }
        this.defaultValue = void 0;
        this.defaultValueDescription = void 0;
        this.presetArg = void 0;
        this.envVar = void 0;
        this.parseArg = void 0;
        this.hidden = false;
        this.argChoices = void 0;
        this.conflictsWith = [];
        this.implied = void 0;
      }
      /**
      * Set the default value, and optionally supply the description to be displayed in the help.
      *
      * @param {any} value
      * @param {string} [description]
      * @return {Option}
      */
      default(value, description) {
        this.defaultValue = value;
        this.defaultValueDescription = description;
        return this;
      }
      /**
      * Preset to use when option used without option-argument, especially optional but also boolean and negated.
      * The custom processing (parseArg) is called.
      *
      * @example
      * new Option('--color').default('GREYSCALE').preset('RGB');
      * new Option('--donate [amount]').preset('20').argParser(parseFloat);
      *
      * @param {any} arg
      * @return {Option}
      */
      preset(arg) {
        this.presetArg = arg;
        return this;
      }
      /**
      * Add option name(s) that conflict with this option.
      * An error will be displayed if conflicting options are found during parsing.
      *
      * @example
      * new Option('--rgb').conflicts('cmyk');
      * new Option('--js').conflicts(['ts', 'jsx']);
      *
      * @param {string | string[]} names
      * @return {Option}
      */
      conflicts(names) {
        this.conflictsWith = this.conflictsWith.concat(names);
        return this;
      }
      /**
      * Specify implied option values for when this option is set and the implied options are not.
      *
      * The custom processing (parseArg) is not called on the implied values.
      *
      * @example
      * program
      *   .addOption(new Option('--log', 'write logging information to file'))
      *   .addOption(new Option('--trace', 'log extra details').implies({ log: 'trace.txt' }));
      *
      * @param {Object} impliedOptionValues
      * @return {Option}
      */
      implies(impliedOptionValues) {
        this.implied = Object.assign(this.implied || {}, impliedOptionValues);
        return this;
      }
      /**
      * Set environment variable to check for option value.
      *
      * An environment variable is only used if when processed the current option value is
      * undefined, or the source of the current value is 'default' or 'config' or 'env'.
      *
      * @param {string} name
      * @return {Option}
      */
      env(name) {
        this.envVar = name;
        return this;
      }
      /**
      * Set the custom handler for processing CLI option arguments into option values.
      *
      * @param {Function} [fn]
      * @return {Option}
      */
      argParser(fn) {
        this.parseArg = fn;
        return this;
      }
      /**
      * Whether the option is mandatory and must have a value after parsing.
      *
      * @param {boolean} [mandatory=true]
      * @return {Option}
      */
      makeOptionMandatory(mandatory = true) {
        this.mandatory = !!mandatory;
        return this;
      }
      /**
      * Hide option in help.
      *
      * @param {boolean} [hide=true]
      * @return {Option}
      */
      hideHelp(hide = true) {
        this.hidden = !!hide;
        return this;
      }
      /**
      * @api private
      */
      _concatValue(value, previous) {
        if (previous === this.defaultValue || !Array.isArray(previous)) {
          return [
            value
          ];
        }
        return previous.concat(value);
      }
      /**
      * Only allow option value to be one of choices.
      *
      * @param {string[]} values
      * @return {Option}
      */
      choices(values) {
        this.argChoices = values.slice();
        this.parseArg = (arg, previous) => {
          if (!this.argChoices.includes(arg)) {
            throw new InvalidArgumentError2(`Allowed choices are ${this.argChoices.join(", ")}.`);
          }
          if (this.variadic) {
            return this._concatValue(arg, previous);
          }
          return arg;
        };
        return this;
      }
      /**
      * Return option name.
      *
      * @return {string}
      */
      name() {
        if (this.long) {
          return this.long.replace(/^--/, "");
        }
        return this.short.replace(/^-/, "");
      }
      /**
      * Return option name, in a camelcase format that can be used
      * as a object attribute key.
      *
      * @return {string}
      * @api private
      */
      attributeName() {
        return camelcase(this.name().replace(/^no-/, ""));
      }
      /**
      * Check if `arg` matches the short or long flag.
      *
      * @param {string} arg
      * @return {boolean}
      * @api private
      */
      is(arg) {
        return this.short === arg || this.long === arg;
      }
      /**
      * Return whether a boolean option.
      *
      * Options are one of boolean, negated, required argument, or optional argument.
      *
      * @return {boolean}
      * @api private
      */
      isBoolean() {
        return !this.required && !this.optional && !this.negate;
      }
    }, __name(_a, "Option"), _a);
    var _a2;
    var DualOptions = (_a2 = class {
      /**
      * @param {Option[]} options
      */
      constructor(options) {
        this.positiveOptions = /* @__PURE__ */ new Map();
        this.negativeOptions = /* @__PURE__ */ new Map();
        this.dualOptions = /* @__PURE__ */ new Set();
        options.forEach((option) => {
          if (option.negate) {
            this.negativeOptions.set(option.attributeName(), option);
          } else {
            this.positiveOptions.set(option.attributeName(), option);
          }
        });
        this.negativeOptions.forEach((value, key) => {
          if (this.positiveOptions.has(key)) {
            this.dualOptions.add(key);
          }
        });
      }
      /**
      * Did the value come from the option, and not from possible matching dual option?
      *
      * @param {any} value
      * @param {Option} option
      * @returns {boolean}
      */
      valueFromOption(value, option) {
        const optionKey = option.attributeName();
        if (!this.dualOptions.has(optionKey)) return true;
        const preset = this.negativeOptions.get(optionKey).presetArg;
        const negativeValue = preset !== void 0 ? preset : false;
        return option.negate === (negativeValue === value);
      }
    }, __name(_a2, "DualOptions"), _a2);
    function camelcase(str) {
      return str.split("-").reduce((str2, word) => {
        return str2 + word[0].toUpperCase() + word.slice(1);
      });
    }
    __name(camelcase, "camelcase");
    function splitOptionFlags(flags) {
      let shortFlag;
      let longFlag;
      const flagParts = flags.split(/[ |,]+/);
      if (flagParts.length > 1 && !/^[[<]/.test(flagParts[1])) shortFlag = flagParts.shift();
      longFlag = flagParts.shift();
      if (!shortFlag && /^-[^-]$/.test(longFlag)) {
        shortFlag = longFlag;
        longFlag = void 0;
      }
      return {
        shortFlag,
        longFlag
      };
    }
    __name(splitOptionFlags, "splitOptionFlags");
    exports.Option = Option2;
    exports.splitOptionFlags = splitOptionFlags;
    exports.DualOptions = DualOptions;
  }
});

// node_modules/commander/lib/suggestSimilar.js
var require_suggestSimilar = __commonJS({
  "node_modules/commander/lib/suggestSimilar.js"(exports) {
    "use strict";
    var maxDistance = 3;
    function editDistance(a, b) {
      if (Math.abs(a.length - b.length) > maxDistance) return Math.max(a.length, b.length);
      const d = [];
      for (let i = 0; i <= a.length; i++) {
        d[i] = [
          i
        ];
      }
      for (let j = 0; j <= b.length; j++) {
        d[0][j] = j;
      }
      for (let j = 1; j <= b.length; j++) {
        for (let i = 1; i <= a.length; i++) {
          let cost = 1;
          if (a[i - 1] === b[j - 1]) {
            cost = 0;
          } else {
            cost = 1;
          }
          d[i][j] = Math.min(
            d[i - 1][j] + 1,
            d[i][j - 1] + 1,
            d[i - 1][j - 1] + cost
            // substitution
          );
          if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
            d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
          }
        }
      }
      return d[a.length][b.length];
    }
    __name(editDistance, "editDistance");
    function suggestSimilar(word, candidates) {
      if (!candidates || candidates.length === 0) return "";
      candidates = Array.from(new Set(candidates));
      const searchingOptions = word.startsWith("--");
      if (searchingOptions) {
        word = word.slice(2);
        candidates = candidates.map((candidate) => candidate.slice(2));
      }
      let similar = [];
      let bestDistance = maxDistance;
      const minSimilarity = 0.4;
      candidates.forEach((candidate) => {
        if (candidate.length <= 1) return;
        const distance = editDistance(word, candidate);
        const length = Math.max(word.length, candidate.length);
        const similarity = (length - distance) / length;
        if (similarity > minSimilarity) {
          if (distance < bestDistance) {
            bestDistance = distance;
            similar = [
              candidate
            ];
          } else if (distance === bestDistance) {
            similar.push(candidate);
          }
        }
      });
      similar.sort((a, b) => a.localeCompare(b));
      if (searchingOptions) {
        similar = similar.map((candidate) => `--${candidate}`);
      }
      if (similar.length > 1) {
        return `
(Did you mean one of ${similar.join(", ")}?)`;
      }
      if (similar.length === 1) {
        return `
(Did you mean ${similar[0]}?)`;
      }
      return "";
    }
    __name(suggestSimilar, "suggestSimilar");
    exports.suggestSimilar = suggestSimilar;
  }
});

// node_modules/commander/lib/command.js
var require_command = __commonJS({
  "node_modules/commander/lib/command.js"(exports) {
    "use strict";
    var EventEmitter = __require("events").EventEmitter;
    var childProcess = __require("child_process");
    var path4 = __require("path");
    var fs2 = __require("fs");
    var process2 = __require("process");
    var { Argument: Argument2, humanReadableArgName } = require_argument();
    var { CommanderError: CommanderError2 } = require_error();
    var { Help: Help2 } = require_help();
    var { Option: Option2, splitOptionFlags, DualOptions } = require_option();
    var { suggestSimilar } = require_suggestSimilar();
    var _a;
    var Command2 = (_a = class extends EventEmitter {
      /**
      * Initialize a new `Command`.
      *
      * @param {string} [name]
      */
      constructor(name) {
        super();
        this.commands = [];
        this.options = [];
        this.parent = null;
        this._allowUnknownOption = false;
        this._allowExcessArguments = true;
        this._args = [];
        this.args = [];
        this.rawArgs = [];
        this.processedArgs = [];
        this._scriptPath = null;
        this._name = name || "";
        this._optionValues = {};
        this._optionValueSources = {};
        this._storeOptionsAsProperties = false;
        this._actionHandler = null;
        this._executableHandler = false;
        this._executableFile = null;
        this._executableDir = null;
        this._defaultCommandName = null;
        this._exitCallback = null;
        this._aliases = [];
        this._combineFlagAndOptionalValue = true;
        this._description = "";
        this._summary = "";
        this._argsDescription = void 0;
        this._enablePositionalOptions = false;
        this._passThroughOptions = false;
        this._lifeCycleHooks = {};
        this._showHelpAfterError = false;
        this._showSuggestionAfterError = true;
        this._outputConfiguration = {
          writeOut: /* @__PURE__ */ __name((str) => process2.stdout.write(str), "writeOut"),
          writeErr: /* @__PURE__ */ __name((str) => process2.stderr.write(str), "writeErr"),
          getOutHelpWidth: /* @__PURE__ */ __name(() => process2.stdout.isTTY ? process2.stdout.columns : void 0, "getOutHelpWidth"),
          getErrHelpWidth: /* @__PURE__ */ __name(() => process2.stderr.isTTY ? process2.stderr.columns : void 0, "getErrHelpWidth"),
          outputError: /* @__PURE__ */ __name((str, write) => write(str), "outputError")
        };
        this._hidden = false;
        this._hasHelpOption = true;
        this._helpFlags = "-h, --help";
        this._helpDescription = "display help for command";
        this._helpShortFlag = "-h";
        this._helpLongFlag = "--help";
        this._addImplicitHelpCommand = void 0;
        this._helpCommandName = "help";
        this._helpCommandnameAndArgs = "help [command]";
        this._helpCommandDescription = "display help for command";
        this._helpConfiguration = {};
      }
      /**
      * Copy settings that are useful to have in common across root command and subcommands.
      *
      * (Used internally when adding a command using `.command()` so subcommands inherit parent settings.)
      *
      * @param {Command} sourceCommand
      * @return {Command} `this` command for chaining
      */
      copyInheritedSettings(sourceCommand) {
        this._outputConfiguration = sourceCommand._outputConfiguration;
        this._hasHelpOption = sourceCommand._hasHelpOption;
        this._helpFlags = sourceCommand._helpFlags;
        this._helpDescription = sourceCommand._helpDescription;
        this._helpShortFlag = sourceCommand._helpShortFlag;
        this._helpLongFlag = sourceCommand._helpLongFlag;
        this._helpCommandName = sourceCommand._helpCommandName;
        this._helpCommandnameAndArgs = sourceCommand._helpCommandnameAndArgs;
        this._helpCommandDescription = sourceCommand._helpCommandDescription;
        this._helpConfiguration = sourceCommand._helpConfiguration;
        this._exitCallback = sourceCommand._exitCallback;
        this._storeOptionsAsProperties = sourceCommand._storeOptionsAsProperties;
        this._combineFlagAndOptionalValue = sourceCommand._combineFlagAndOptionalValue;
        this._allowExcessArguments = sourceCommand._allowExcessArguments;
        this._enablePositionalOptions = sourceCommand._enablePositionalOptions;
        this._showHelpAfterError = sourceCommand._showHelpAfterError;
        this._showSuggestionAfterError = sourceCommand._showSuggestionAfterError;
        return this;
      }
      /**
      * Define a command.
      *
      * There are two styles of command: pay attention to where to put the description.
      *
      * @example
      * // Command implemented using action handler (description is supplied separately to `.command`)
      * program
      *   .command('clone <source> [destination]')
      *   .description('clone a repository into a newly created directory')
      *   .action((source, destination) => {
      *     console.log('clone command called');
      *   });
      *
      * // Command implemented using separate executable file (description is second parameter to `.command`)
      * program
      *   .command('start <service>', 'start named service')
      *   .command('stop [service]', 'stop named service, or all if no name supplied');
      *
      * @param {string} nameAndArgs - command name and arguments, args are `<required>` or `[optional]` and last may also be `variadic...`
      * @param {Object|string} [actionOptsOrExecDesc] - configuration options (for action), or description (for executable)
      * @param {Object} [execOpts] - configuration options (for executable)
      * @return {Command} returns new command for action handler, or `this` for executable command
      */
      command(nameAndArgs, actionOptsOrExecDesc, execOpts) {
        let desc = actionOptsOrExecDesc;
        let opts = execOpts;
        if (typeof desc === "object" && desc !== null) {
          opts = desc;
          desc = null;
        }
        opts = opts || {};
        const [, name, args] = nameAndArgs.match(/([^ ]+) *(.*)/);
        const cmd = this.createCommand(name);
        if (desc) {
          cmd.description(desc);
          cmd._executableHandler = true;
        }
        if (opts.isDefault) this._defaultCommandName = cmd._name;
        cmd._hidden = !!(opts.noHelp || opts.hidden);
        cmd._executableFile = opts.executableFile || null;
        if (args) cmd.arguments(args);
        this.commands.push(cmd);
        cmd.parent = this;
        cmd.copyInheritedSettings(this);
        if (desc) return this;
        return cmd;
      }
      /**
      * Factory routine to create a new unattached command.
      *
      * See .command() for creating an attached subcommand, which uses this routine to
      * create the command. You can override createCommand to customise subcommands.
      *
      * @param {string} [name]
      * @return {Command} new command
      */
      createCommand(name) {
        return new _a(name);
      }
      /**
      * You can customise the help with a subclass of Help by overriding createHelp,
      * or by overriding Help properties using configureHelp().
      *
      * @return {Help}
      */
      createHelp() {
        return Object.assign(new Help2(), this.configureHelp());
      }
      /**
      * You can customise the help by overriding Help properties using configureHelp(),
      * or with a subclass of Help by overriding createHelp().
      *
      * @param {Object} [configuration] - configuration options
      * @return {Command|Object} `this` command for chaining, or stored configuration
      */
      configureHelp(configuration) {
        if (configuration === void 0) return this._helpConfiguration;
        this._helpConfiguration = configuration;
        return this;
      }
      /**
      * The default output goes to stdout and stderr. You can customise this for special
      * applications. You can also customise the display of errors by overriding outputError.
      *
      * The configuration properties are all functions:
      *
      *     // functions to change where being written, stdout and stderr
      *     writeOut(str)
      *     writeErr(str)
      *     // matching functions to specify width for wrapping help
      *     getOutHelpWidth()
      *     getErrHelpWidth()
      *     // functions based on what is being written out
      *     outputError(str, write) // used for displaying errors, and not used for displaying help
      *
      * @param {Object} [configuration] - configuration options
      * @return {Command|Object} `this` command for chaining, or stored configuration
      */
      configureOutput(configuration) {
        if (configuration === void 0) return this._outputConfiguration;
        Object.assign(this._outputConfiguration, configuration);
        return this;
      }
      /**
      * Display the help or a custom message after an error occurs.
      *
      * @param {boolean|string} [displayHelp]
      * @return {Command} `this` command for chaining
      */
      showHelpAfterError(displayHelp = true) {
        if (typeof displayHelp !== "string") displayHelp = !!displayHelp;
        this._showHelpAfterError = displayHelp;
        return this;
      }
      /**
      * Display suggestion of similar commands for unknown commands, or options for unknown options.
      *
      * @param {boolean} [displaySuggestion]
      * @return {Command} `this` command for chaining
      */
      showSuggestionAfterError(displaySuggestion = true) {
        this._showSuggestionAfterError = !!displaySuggestion;
        return this;
      }
      /**
      * Add a prepared subcommand.
      *
      * See .command() for creating an attached subcommand which inherits settings from its parent.
      *
      * @param {Command} cmd - new subcommand
      * @param {Object} [opts] - configuration options
      * @return {Command} `this` command for chaining
      */
      addCommand(cmd, opts) {
        if (!cmd._name) {
          throw new Error(`Command passed to .addCommand() must have a name
- specify the name in Command constructor or using .name()`);
        }
        opts = opts || {};
        if (opts.isDefault) this._defaultCommandName = cmd._name;
        if (opts.noHelp || opts.hidden) cmd._hidden = true;
        this.commands.push(cmd);
        cmd.parent = this;
        return this;
      }
      /**
      * Factory routine to create a new unattached argument.
      *
      * See .argument() for creating an attached argument, which uses this routine to
      * create the argument. You can override createArgument to return a custom argument.
      *
      * @param {string} name
      * @param {string} [description]
      * @return {Argument} new argument
      */
      createArgument(name, description) {
        return new Argument2(name, description);
      }
      /**
      * Define argument syntax for command.
      *
      * The default is that the argument is required, and you can explicitly
      * indicate this with <> around the name. Put [] around the name for an optional argument.
      *
      * @example
      * program.argument('<input-file>');
      * program.argument('[output-file]');
      *
      * @param {string} name
      * @param {string} [description]
      * @param {Function|*} [fn] - custom argument processing function
      * @param {*} [defaultValue]
      * @return {Command} `this` command for chaining
      */
      argument(name, description, fn, defaultValue) {
        const argument = this.createArgument(name, description);
        if (typeof fn === "function") {
          argument.default(defaultValue).argParser(fn);
        } else {
          argument.default(fn);
        }
        this.addArgument(argument);
        return this;
      }
      /**
      * Define argument syntax for command, adding multiple at once (without descriptions).
      *
      * See also .argument().
      *
      * @example
      * program.arguments('<cmd> [env]');
      *
      * @param {string} names
      * @return {Command} `this` command for chaining
      */
      arguments(names) {
        names.split(/ +/).forEach((detail) => {
          this.argument(detail);
        });
        return this;
      }
      /**
      * Define argument syntax for command, adding a prepared argument.
      *
      * @param {Argument} argument
      * @return {Command} `this` command for chaining
      */
      addArgument(argument) {
        const previousArgument = this._args.slice(-1)[0];
        if (previousArgument && previousArgument.variadic) {
          throw new Error(`only the last argument can be variadic '${previousArgument.name()}'`);
        }
        if (argument.required && argument.defaultValue !== void 0 && argument.parseArg === void 0) {
          throw new Error(`a default value for a required argument is never used: '${argument.name()}'`);
        }
        this._args.push(argument);
        return this;
      }
      /**
      * Override default decision whether to add implicit help command.
      *
      *    addHelpCommand() // force on
      *    addHelpCommand(false); // force off
      *    addHelpCommand('help [cmd]', 'display help for [cmd]'); // force on with custom details
      *
      * @return {Command} `this` command for chaining
      */
      addHelpCommand(enableOrNameAndArgs, description) {
        if (enableOrNameAndArgs === false) {
          this._addImplicitHelpCommand = false;
        } else {
          this._addImplicitHelpCommand = true;
          if (typeof enableOrNameAndArgs === "string") {
            this._helpCommandName = enableOrNameAndArgs.split(" ")[0];
            this._helpCommandnameAndArgs = enableOrNameAndArgs;
          }
          this._helpCommandDescription = description || this._helpCommandDescription;
        }
        return this;
      }
      /**
      * @return {boolean}
      * @api private
      */
      _hasImplicitHelpCommand() {
        if (this._addImplicitHelpCommand === void 0) {
          return this.commands.length && !this._actionHandler && !this._findCommand("help");
        }
        return this._addImplicitHelpCommand;
      }
      /**
      * Add hook for life cycle event.
      *
      * @param {string} event
      * @param {Function} listener
      * @return {Command} `this` command for chaining
      */
      hook(event, listener) {
        const allowedValues = [
          "preSubcommand",
          "preAction",
          "postAction"
        ];
        if (!allowedValues.includes(event)) {
          throw new Error(`Unexpected value for event passed to hook : '${event}'.
Expecting one of '${allowedValues.join("', '")}'`);
        }
        if (this._lifeCycleHooks[event]) {
          this._lifeCycleHooks[event].push(listener);
        } else {
          this._lifeCycleHooks[event] = [
            listener
          ];
        }
        return this;
      }
      /**
      * Register callback to use as replacement for calling process.exit.
      *
      * @param {Function} [fn] optional callback which will be passed a CommanderError, defaults to throwing
      * @return {Command} `this` command for chaining
      */
      exitOverride(fn) {
        if (fn) {
          this._exitCallback = fn;
        } else {
          this._exitCallback = (err) => {
            if (err.code !== "commander.executeSubCommandAsync") {
              throw err;
            } else {
            }
          };
        }
        return this;
      }
      /**
      * Call process.exit, and _exitCallback if defined.
      *
      * @param {number} exitCode exit code for using with process.exit
      * @param {string} code an id string representing the error
      * @param {string} message human-readable description of the error
      * @return never
      * @api private
      */
      _exit(exitCode, code, message) {
        if (this._exitCallback) {
          this._exitCallback(new CommanderError2(exitCode, code, message));
        }
        process2.exit(exitCode);
      }
      /**
      * Register callback `fn` for the command.
      *
      * @example
      * program
      *   .command('serve')
      *   .description('start service')
      *   .action(function() {
      *      // do work here
      *   });
      *
      * @param {Function} fn
      * @return {Command} `this` command for chaining
      */
      action(fn) {
        const listener = /* @__PURE__ */ __name((args) => {
          const expectedArgsCount = this._args.length;
          const actionArgs = args.slice(0, expectedArgsCount);
          if (this._storeOptionsAsProperties) {
            actionArgs[expectedArgsCount] = this;
          } else {
            actionArgs[expectedArgsCount] = this.opts();
          }
          actionArgs.push(this);
          return fn.apply(this, actionArgs);
        }, "listener");
        this._actionHandler = listener;
        return this;
      }
      /**
      * Factory routine to create a new unattached option.
      *
      * See .option() for creating an attached option, which uses this routine to
      * create the option. You can override createOption to return a custom option.
      *
      * @param {string} flags
      * @param {string} [description]
      * @return {Option} new option
      */
      createOption(flags, description) {
        return new Option2(flags, description);
      }
      /**
      * Add an option.
      *
      * @param {Option} option
      * @return {Command} `this` command for chaining
      */
      addOption(option) {
        const oname = option.name();
        const name = option.attributeName();
        if (option.negate) {
          const positiveLongFlag = option.long.replace(/^--no-/, "--");
          if (!this._findOption(positiveLongFlag)) {
            this.setOptionValueWithSource(name, option.defaultValue === void 0 ? true : option.defaultValue, "default");
          }
        } else if (option.defaultValue !== void 0) {
          this.setOptionValueWithSource(name, option.defaultValue, "default");
        }
        this.options.push(option);
        const handleOptionValue = /* @__PURE__ */ __name((val, invalidValueMessage, valueSource) => {
          if (val == null && option.presetArg !== void 0) {
            val = option.presetArg;
          }
          const oldValue = this.getOptionValue(name);
          if (val !== null && option.parseArg) {
            try {
              val = option.parseArg(val, oldValue);
            } catch (err) {
              if (err.code === "commander.invalidArgument") {
                const message = `${invalidValueMessage} ${err.message}`;
                this.error(message, {
                  exitCode: err.exitCode,
                  code: err.code
                });
              }
              throw err;
            }
          } else if (val !== null && option.variadic) {
            val = option._concatValue(val, oldValue);
          }
          if (val == null) {
            if (option.negate) {
              val = false;
            } else if (option.isBoolean() || option.optional) {
              val = true;
            } else {
              val = "";
            }
          }
          this.setOptionValueWithSource(name, val, valueSource);
        }, "handleOptionValue");
        this.on("option:" + oname, (val) => {
          const invalidValueMessage = `error: option '${option.flags}' argument '${val}' is invalid.`;
          handleOptionValue(val, invalidValueMessage, "cli");
        });
        if (option.envVar) {
          this.on("optionEnv:" + oname, (val) => {
            const invalidValueMessage = `error: option '${option.flags}' value '${val}' from env '${option.envVar}' is invalid.`;
            handleOptionValue(val, invalidValueMessage, "env");
          });
        }
        return this;
      }
      /**
      * Internal implementation shared by .option() and .requiredOption()
      *
      * @api private
      */
      _optionEx(config, flags, description, fn, defaultValue) {
        if (typeof flags === "object" && flags instanceof Option2) {
          throw new Error("To add an Option object use addOption() instead of option() or requiredOption()");
        }
        const option = this.createOption(flags, description);
        option.makeOptionMandatory(!!config.mandatory);
        if (typeof fn === "function") {
          option.default(defaultValue).argParser(fn);
        } else if (fn instanceof RegExp) {
          const regex = fn;
          fn = /* @__PURE__ */ __name((val, def) => {
            const m = regex.exec(val);
            return m ? m[0] : def;
          }, "fn");
          option.default(defaultValue).argParser(fn);
        } else {
          option.default(fn);
        }
        return this.addOption(option);
      }
      /**
      * Define option with `flags`, `description` and optional
      * coercion `fn`.
      *
      * The `flags` string contains the short and/or long flags,
      * separated by comma, a pipe or space. The following are all valid
      * all will output this way when `--help` is used.
      *
      *     "-p, --pepper"
      *     "-p|--pepper"
      *     "-p --pepper"
      *
      * @example
      * // simple boolean defaulting to undefined
      * program.option('-p, --pepper', 'add pepper');
      *
      * program.pepper
      * // => undefined
      *
      * --pepper
      * program.pepper
      * // => true
      *
      * // simple boolean defaulting to true (unless non-negated option is also defined)
      * program.option('-C, --no-cheese', 'remove cheese');
      *
      * program.cheese
      * // => true
      *
      * --no-cheese
      * program.cheese
      * // => false
      *
      * // required argument
      * program.option('-C, --chdir <path>', 'change the working directory');
      *
      * --chdir /tmp
      * program.chdir
      * // => "/tmp"
      *
      * // optional argument
      * program.option('-c, --cheese [type]', 'add cheese [marble]');
      *
      * @param {string} flags
      * @param {string} [description]
      * @param {Function|*} [fn] - custom option processing function or default value
      * @param {*} [defaultValue]
      * @return {Command} `this` command for chaining
      */
      option(flags, description, fn, defaultValue) {
        return this._optionEx({}, flags, description, fn, defaultValue);
      }
      /**
      * Add a required option which must have a value after parsing. This usually means
      * the option must be specified on the command line. (Otherwise the same as .option().)
      *
      * The `flags` string contains the short and/or long flags, separated by comma, a pipe or space.
      *
      * @param {string} flags
      * @param {string} [description]
      * @param {Function|*} [fn] - custom option processing function or default value
      * @param {*} [defaultValue]
      * @return {Command} `this` command for chaining
      */
      requiredOption(flags, description, fn, defaultValue) {
        return this._optionEx({
          mandatory: true
        }, flags, description, fn, defaultValue);
      }
      /**
      * Alter parsing of short flags with optional values.
      *
      * @example
      * // for `.option('-f,--flag [value]'):
      * program.combineFlagAndOptionalValue(true);  // `-f80` is treated like `--flag=80`, this is the default behaviour
      * program.combineFlagAndOptionalValue(false) // `-fb` is treated like `-f -b`
      *
      * @param {Boolean} [combine=true] - if `true` or omitted, an optional value can be specified directly after the flag.
      */
      combineFlagAndOptionalValue(combine = true) {
        this._combineFlagAndOptionalValue = !!combine;
        return this;
      }
      /**
      * Allow unknown options on the command line.
      *
      * @param {Boolean} [allowUnknown=true] - if `true` or omitted, no error will be thrown
      * for unknown options.
      */
      allowUnknownOption(allowUnknown = true) {
        this._allowUnknownOption = !!allowUnknown;
        return this;
      }
      /**
      * Allow excess command-arguments on the command line. Pass false to make excess arguments an error.
      *
      * @param {Boolean} [allowExcess=true] - if `true` or omitted, no error will be thrown
      * for excess arguments.
      */
      allowExcessArguments(allowExcess = true) {
        this._allowExcessArguments = !!allowExcess;
        return this;
      }
      /**
      * Enable positional options. Positional means global options are specified before subcommands which lets
      * subcommands reuse the same option names, and also enables subcommands to turn on passThroughOptions.
      * The default behaviour is non-positional and global options may appear anywhere on the command line.
      *
      * @param {Boolean} [positional=true]
      */
      enablePositionalOptions(positional = true) {
        this._enablePositionalOptions = !!positional;
        return this;
      }
      /**
      * Pass through options that come after command-arguments rather than treat them as command-options,
      * so actual command-options come before command-arguments. Turning this on for a subcommand requires
      * positional options to have been enabled on the program (parent commands).
      * The default behaviour is non-positional and options may appear before or after command-arguments.
      *
      * @param {Boolean} [passThrough=true]
      * for unknown options.
      */
      passThroughOptions(passThrough = true) {
        this._passThroughOptions = !!passThrough;
        if (!!this.parent && passThrough && !this.parent._enablePositionalOptions) {
          throw new Error("passThroughOptions can not be used without turning on enablePositionalOptions for parent command(s)");
        }
        return this;
      }
      /**
      * Whether to store option values as properties on command object,
      * or store separately (specify false). In both cases the option values can be accessed using .opts().
      *
      * @param {boolean} [storeAsProperties=true]
      * @return {Command} `this` command for chaining
      */
      storeOptionsAsProperties(storeAsProperties = true) {
        this._storeOptionsAsProperties = !!storeAsProperties;
        if (this.options.length) {
          throw new Error("call .storeOptionsAsProperties() before adding options");
        }
        return this;
      }
      /**
      * Retrieve option value.
      *
      * @param {string} key
      * @return {Object} value
      */
      getOptionValue(key) {
        if (this._storeOptionsAsProperties) {
          return this[key];
        }
        return this._optionValues[key];
      }
      /**
      * Store option value.
      *
      * @param {string} key
      * @param {Object} value
      * @return {Command} `this` command for chaining
      */
      setOptionValue(key, value) {
        return this.setOptionValueWithSource(key, value, void 0);
      }
      /**
      * Store option value and where the value came from.
      *
      * @param {string} key
      * @param {Object} value
      * @param {string} source - expected values are default/config/env/cli/implied
      * @return {Command} `this` command for chaining
      */
      setOptionValueWithSource(key, value, source) {
        if (this._storeOptionsAsProperties) {
          this[key] = value;
        } else {
          this._optionValues[key] = value;
        }
        this._optionValueSources[key] = source;
        return this;
      }
      /**
      * Get source of option value.
      * Expected values are default | config | env | cli | implied
      *
      * @param {string} key
      * @return {string}
      */
      getOptionValueSource(key) {
        return this._optionValueSources[key];
      }
      /**
      * Get source of option value. See also .optsWithGlobals().
      * Expected values are default | config | env | cli | implied
      *
      * @param {string} key
      * @return {string}
      */
      getOptionValueSourceWithGlobals(key) {
        let source;
        getCommandAndParents(this).forEach((cmd) => {
          if (cmd.getOptionValueSource(key) !== void 0) {
            source = cmd.getOptionValueSource(key);
          }
        });
        return source;
      }
      /**
      * Get user arguments from implied or explicit arguments.
      * Side-effects: set _scriptPath if args included script. Used for default program name, and subcommand searches.
      *
      * @api private
      */
      _prepareUserArgs(argv, parseOptions) {
        if (argv !== void 0 && !Array.isArray(argv)) {
          throw new Error("first parameter to parse must be array or undefined");
        }
        parseOptions = parseOptions || {};
        if (argv === void 0) {
          argv = process2.argv;
          if (process2.versions && process2.versions.electron) {
            parseOptions.from = "electron";
          }
        }
        this.rawArgs = argv.slice();
        let userArgs;
        switch (parseOptions.from) {
          case void 0:
          case "node":
            this._scriptPath = argv[1];
            userArgs = argv.slice(2);
            break;
          case "electron":
            if (process2.defaultApp) {
              this._scriptPath = argv[1];
              userArgs = argv.slice(2);
            } else {
              userArgs = argv.slice(1);
            }
            break;
          case "user":
            userArgs = argv.slice(0);
            break;
          default:
            throw new Error(`unexpected parse option { from: '${parseOptions.from}' }`);
        }
        if (!this._name && this._scriptPath) this.nameFromFilename(this._scriptPath);
        this._name = this._name || "program";
        return userArgs;
      }
      /**
      * Parse `argv`, setting options and invoking commands when defined.
      *
      * The default expectation is that the arguments are from node and have the application as argv[0]
      * and the script being run in argv[1], with user parameters after that.
      *
      * @example
      * program.parse(process.argv);
      * program.parse(); // implicitly use process.argv and auto-detect node vs electron conventions
      * program.parse(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]
      *
      * @param {string[]} [argv] - optional, defaults to process.argv
      * @param {Object} [parseOptions] - optionally specify style of options with from: node/user/electron
      * @param {string} [parseOptions.from] - where the args are from: 'node', 'user', 'electron'
      * @return {Command} `this` command for chaining
      */
      parse(argv, parseOptions) {
        const userArgs = this._prepareUserArgs(argv, parseOptions);
        this._parseCommand([], userArgs);
        return this;
      }
      /**
      * Parse `argv`, setting options and invoking commands when defined.
      *
      * Use parseAsync instead of parse if any of your action handlers are async. Returns a Promise.
      *
      * The default expectation is that the arguments are from node and have the application as argv[0]
      * and the script being run in argv[1], with user parameters after that.
      *
      * @example
      * await program.parseAsync(process.argv);
      * await program.parseAsync(); // implicitly use process.argv and auto-detect node vs electron conventions
      * await program.parseAsync(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]
      *
      * @param {string[]} [argv]
      * @param {Object} [parseOptions]
      * @param {string} parseOptions.from - where the args are from: 'node', 'user', 'electron'
      * @return {Promise}
      */
      parseAsync(argv, parseOptions) {
        return __async(this, null, function* () {
          const userArgs = this._prepareUserArgs(argv, parseOptions);
          yield this._parseCommand([], userArgs);
          return this;
        });
      }
      /**
      * Execute a sub-command executable.
      *
      * @api private
      */
      _executeSubCommand(subcommand, args) {
        args = args.slice();
        let launchWithNode = false;
        const sourceExt = [
          ".js",
          ".ts",
          ".tsx",
          ".mjs",
          ".cjs"
        ];
        function findFile(baseDir, baseName) {
          const localBin = path4.resolve(baseDir, baseName);
          if (fs2.existsSync(localBin)) return localBin;
          if (sourceExt.includes(path4.extname(baseName))) return void 0;
          const foundExt = sourceExt.find((ext) => fs2.existsSync(`${localBin}${ext}`));
          if (foundExt) return `${localBin}${foundExt}`;
          return void 0;
        }
        __name(findFile, "findFile");
        this._checkForMissingMandatoryOptions();
        this._checkForConflictingOptions();
        let executableFile = subcommand._executableFile || `${this._name}-${subcommand._name}`;
        let executableDir = this._executableDir || "";
        if (this._scriptPath) {
          let resolvedScriptPath;
          try {
            resolvedScriptPath = fs2.realpathSync(this._scriptPath);
          } catch (err) {
            resolvedScriptPath = this._scriptPath;
          }
          executableDir = path4.resolve(path4.dirname(resolvedScriptPath), executableDir);
        }
        if (executableDir) {
          let localFile = findFile(executableDir, executableFile);
          if (!localFile && !subcommand._executableFile && this._scriptPath) {
            const legacyName = path4.basename(this._scriptPath, path4.extname(this._scriptPath));
            if (legacyName !== this._name) {
              localFile = findFile(executableDir, `${legacyName}-${subcommand._name}`);
            }
          }
          executableFile = localFile || executableFile;
        }
        launchWithNode = sourceExt.includes(path4.extname(executableFile));
        let proc;
        if (process2.platform !== "win32") {
          if (launchWithNode) {
            args.unshift(executableFile);
            args = incrementNodeInspectorPort(process2.execArgv).concat(args);
            proc = childProcess.spawn(process2.argv[0], args, {
              stdio: "inherit"
            });
          } else {
            proc = childProcess.spawn(executableFile, args, {
              stdio: "inherit"
            });
          }
        } else {
          args.unshift(executableFile);
          args = incrementNodeInspectorPort(process2.execArgv).concat(args);
          proc = childProcess.spawn(process2.execPath, args, {
            stdio: "inherit"
          });
        }
        if (!proc.killed) {
          const signals = [
            "SIGUSR1",
            "SIGUSR2",
            "SIGTERM",
            "SIGINT",
            "SIGHUP"
          ];
          signals.forEach((signal) => {
            process2.on(signal, () => {
              if (proc.killed === false && proc.exitCode === null) {
                proc.kill(signal);
              }
            });
          });
        }
        const exitCallback = this._exitCallback;
        if (!exitCallback) {
          proc.on("close", process2.exit.bind(process2));
        } else {
          proc.on("close", () => {
            exitCallback(new CommanderError2(process2.exitCode || 0, "commander.executeSubCommandAsync", "(close)"));
          });
        }
        proc.on("error", (err) => {
          if (err.code === "ENOENT") {
            const executableDirMessage = executableDir ? `searched for local subcommand relative to directory '${executableDir}'` : "no directory for search for local subcommand, use .executableDir() to supply a custom directory";
            const executableMissing = `'${executableFile}' does not exist
 - if '${subcommand._name}' is not meant to be an executable command, remove description parameter from '.command()' and use '.description()' instead
 - if the default executable name is not suitable, use the executableFile option to supply a custom name or path
 - ${executableDirMessage}`;
            throw new Error(executableMissing);
          } else if (err.code === "EACCES") {
            throw new Error(`'${executableFile}' not executable`);
          }
          if (!exitCallback) {
            process2.exit(1);
          } else {
            const wrappedError = new CommanderError2(1, "commander.executeSubCommandAsync", "(error)");
            wrappedError.nestedError = err;
            exitCallback(wrappedError);
          }
        });
        this.runningCommand = proc;
      }
      /**
      * @api private
      */
      _dispatchSubcommand(commandName, operands, unknown) {
        const subCommand = this._findCommand(commandName);
        if (!subCommand) this.help({
          error: true
        });
        let hookResult;
        hookResult = this._chainOrCallSubCommandHook(hookResult, subCommand, "preSubcommand");
        hookResult = this._chainOrCall(hookResult, () => {
          if (subCommand._executableHandler) {
            this._executeSubCommand(subCommand, operands.concat(unknown));
          } else {
            return subCommand._parseCommand(operands, unknown);
          }
        });
        return hookResult;
      }
      /**
      * Check this.args against expected this._args.
      *
      * @api private
      */
      _checkNumberOfArguments() {
        this._args.forEach((arg, i) => {
          if (arg.required && this.args[i] == null) {
            this.missingArgument(arg.name());
          }
        });
        if (this._args.length > 0 && this._args[this._args.length - 1].variadic) {
          return;
        }
        if (this.args.length > this._args.length) {
          this._excessArguments(this.args);
        }
      }
      /**
      * Process this.args using this._args and save as this.processedArgs!
      *
      * @api private
      */
      _processArguments() {
        const myParseArg = /* @__PURE__ */ __name((argument, value, previous) => {
          let parsedValue = value;
          if (value !== null && argument.parseArg) {
            try {
              parsedValue = argument.parseArg(value, previous);
            } catch (err) {
              if (err.code === "commander.invalidArgument") {
                const message = `error: command-argument value '${value}' is invalid for argument '${argument.name()}'. ${err.message}`;
                this.error(message, {
                  exitCode: err.exitCode,
                  code: err.code
                });
              }
              throw err;
            }
          }
          return parsedValue;
        }, "myParseArg");
        this._checkNumberOfArguments();
        const processedArgs = [];
        this._args.forEach((declaredArg, index) => {
          let value = declaredArg.defaultValue;
          if (declaredArg.variadic) {
            if (index < this.args.length) {
              value = this.args.slice(index);
              if (declaredArg.parseArg) {
                value = value.reduce((processed, v) => {
                  return myParseArg(declaredArg, v, processed);
                }, declaredArg.defaultValue);
              }
            } else if (value === void 0) {
              value = [];
            }
          } else if (index < this.args.length) {
            value = this.args[index];
            if (declaredArg.parseArg) {
              value = myParseArg(declaredArg, value, declaredArg.defaultValue);
            }
          }
          processedArgs[index] = value;
        });
        this.processedArgs = processedArgs;
      }
      /**
      * Once we have a promise we chain, but call synchronously until then.
      *
      * @param {Promise|undefined} promise
      * @param {Function} fn
      * @return {Promise|undefined}
      * @api private
      */
      _chainOrCall(promise, fn) {
        if (promise && promise.then && typeof promise.then === "function") {
          return promise.then(() => fn());
        }
        return fn();
      }
      /**
      *
      * @param {Promise|undefined} promise
      * @param {string} event
      * @return {Promise|undefined}
      * @api private
      */
      _chainOrCallHooks(promise, event) {
        let result = promise;
        const hooks = [];
        getCommandAndParents(this).reverse().filter((cmd) => cmd._lifeCycleHooks[event] !== void 0).forEach((hookedCommand) => {
          hookedCommand._lifeCycleHooks[event].forEach((callback) => {
            hooks.push({
              hookedCommand,
              callback
            });
          });
        });
        if (event === "postAction") {
          hooks.reverse();
        }
        hooks.forEach((hookDetail) => {
          result = this._chainOrCall(result, () => {
            return hookDetail.callback(hookDetail.hookedCommand, this);
          });
        });
        return result;
      }
      /**
      *
      * @param {Promise|undefined} promise
      * @param {Command} subCommand
      * @param {string} event
      * @return {Promise|undefined}
      * @api private
      */
      _chainOrCallSubCommandHook(promise, subCommand, event) {
        let result = promise;
        if (this._lifeCycleHooks[event] !== void 0) {
          this._lifeCycleHooks[event].forEach((hook) => {
            result = this._chainOrCall(result, () => {
              return hook(this, subCommand);
            });
          });
        }
        return result;
      }
      /**
      * Process arguments in context of this command.
      * Returns action result, in case it is a promise.
      *
      * @api private
      */
      _parseCommand(operands, unknown) {
        const parsed = this.parseOptions(unknown);
        this._parseOptionsEnv();
        this._parseOptionsImplied();
        operands = operands.concat(parsed.operands);
        unknown = parsed.unknown;
        this.args = operands.concat(unknown);
        if (operands && this._findCommand(operands[0])) {
          return this._dispatchSubcommand(operands[0], operands.slice(1), unknown);
        }
        if (this._hasImplicitHelpCommand() && operands[0] === this._helpCommandName) {
          if (operands.length === 1) {
            this.help();
          }
          return this._dispatchSubcommand(operands[1], [], [
            this._helpLongFlag
          ]);
        }
        if (this._defaultCommandName) {
          outputHelpIfRequested(this, unknown);
          return this._dispatchSubcommand(this._defaultCommandName, operands, unknown);
        }
        if (this.commands.length && this.args.length === 0 && !this._actionHandler && !this._defaultCommandName) {
          this.help({
            error: true
          });
        }
        outputHelpIfRequested(this, parsed.unknown);
        this._checkForMissingMandatoryOptions();
        this._checkForConflictingOptions();
        const checkForUnknownOptions = /* @__PURE__ */ __name(() => {
          if (parsed.unknown.length > 0) {
            this.unknownOption(parsed.unknown[0]);
          }
        }, "checkForUnknownOptions");
        const commandEvent = `command:${this.name()}`;
        if (this._actionHandler) {
          checkForUnknownOptions();
          this._processArguments();
          let actionResult;
          actionResult = this._chainOrCallHooks(actionResult, "preAction");
          actionResult = this._chainOrCall(actionResult, () => this._actionHandler(this.processedArgs));
          if (this.parent) {
            actionResult = this._chainOrCall(actionResult, () => {
              this.parent.emit(commandEvent, operands, unknown);
            });
          }
          actionResult = this._chainOrCallHooks(actionResult, "postAction");
          return actionResult;
        }
        if (this.parent && this.parent.listenerCount(commandEvent)) {
          checkForUnknownOptions();
          this._processArguments();
          this.parent.emit(commandEvent, operands, unknown);
        } else if (operands.length) {
          if (this._findCommand("*")) {
            return this._dispatchSubcommand("*", operands, unknown);
          }
          if (this.listenerCount("command:*")) {
            this.emit("command:*", operands, unknown);
          } else if (this.commands.length) {
            this.unknownCommand();
          } else {
            checkForUnknownOptions();
            this._processArguments();
          }
        } else if (this.commands.length) {
          checkForUnknownOptions();
          this.help({
            error: true
          });
        } else {
          checkForUnknownOptions();
          this._processArguments();
        }
      }
      /**
      * Find matching command.
      *
      * @api private
      */
      _findCommand(name) {
        if (!name) return void 0;
        return this.commands.find((cmd) => cmd._name === name || cmd._aliases.includes(name));
      }
      /**
      * Return an option matching `arg` if any.
      *
      * @param {string} arg
      * @return {Option}
      * @api private
      */
      _findOption(arg) {
        return this.options.find((option) => option.is(arg));
      }
      /**
      * Display an error message if a mandatory option does not have a value.
      * Called after checking for help flags in leaf subcommand.
      *
      * @api private
      */
      _checkForMissingMandatoryOptions() {
        for (let cmd = this; cmd; cmd = cmd.parent) {
          cmd.options.forEach((anOption) => {
            if (anOption.mandatory && cmd.getOptionValue(anOption.attributeName()) === void 0) {
              cmd.missingMandatoryOptionValue(anOption);
            }
          });
        }
      }
      /**
      * Display an error message if conflicting options are used together in this.
      *
      * @api private
      */
      _checkForConflictingLocalOptions() {
        const definedNonDefaultOptions = this.options.filter((option) => {
          const optionKey = option.attributeName();
          if (this.getOptionValue(optionKey) === void 0) {
            return false;
          }
          return this.getOptionValueSource(optionKey) !== "default";
        });
        const optionsWithConflicting = definedNonDefaultOptions.filter((option) => option.conflictsWith.length > 0);
        optionsWithConflicting.forEach((option) => {
          const conflictingAndDefined = definedNonDefaultOptions.find((defined) => option.conflictsWith.includes(defined.attributeName()));
          if (conflictingAndDefined) {
            this._conflictingOption(option, conflictingAndDefined);
          }
        });
      }
      /**
      * Display an error message if conflicting options are used together.
      * Called after checking for help flags in leaf subcommand.
      *
      * @api private
      */
      _checkForConflictingOptions() {
        for (let cmd = this; cmd; cmd = cmd.parent) {
          cmd._checkForConflictingLocalOptions();
        }
      }
      /**
      * Parse options from `argv` removing known options,
      * and return argv split into operands and unknown arguments.
      *
      * Examples:
      *
      *     argv => operands, unknown
      *     --known kkk op => [op], []
      *     op --known kkk => [op], []
      *     sub --unknown uuu op => [sub], [--unknown uuu op]
      *     sub -- --unknown uuu op => [sub --unknown uuu op], []
      *
      * @param {String[]} argv
      * @return {{operands: String[], unknown: String[]}}
      */
      parseOptions(argv) {
        const operands = [];
        const unknown = [];
        let dest = operands;
        const args = argv.slice();
        function maybeOption(arg) {
          return arg.length > 1 && arg[0] === "-";
        }
        __name(maybeOption, "maybeOption");
        let activeVariadicOption = null;
        while (args.length) {
          const arg = args.shift();
          if (arg === "--") {
            if (dest === unknown) dest.push(arg);
            dest.push(...args);
            break;
          }
          if (activeVariadicOption && !maybeOption(arg)) {
            this.emit(`option:${activeVariadicOption.name()}`, arg);
            continue;
          }
          activeVariadicOption = null;
          if (maybeOption(arg)) {
            const option = this._findOption(arg);
            if (option) {
              if (option.required) {
                const value = args.shift();
                if (value === void 0) this.optionMissingArgument(option);
                this.emit(`option:${option.name()}`, value);
              } else if (option.optional) {
                let value = null;
                if (args.length > 0 && !maybeOption(args[0])) {
                  value = args.shift();
                }
                this.emit(`option:${option.name()}`, value);
              } else {
                this.emit(`option:${option.name()}`);
              }
              activeVariadicOption = option.variadic ? option : null;
              continue;
            }
          }
          if (arg.length > 2 && arg[0] === "-" && arg[1] !== "-") {
            const option = this._findOption(`-${arg[1]}`);
            if (option) {
              if (option.required || option.optional && this._combineFlagAndOptionalValue) {
                this.emit(`option:${option.name()}`, arg.slice(2));
              } else {
                this.emit(`option:${option.name()}`);
                args.unshift(`-${arg.slice(2)}`);
              }
              continue;
            }
          }
          if (/^--[^=]+=/.test(arg)) {
            const index = arg.indexOf("=");
            const option = this._findOption(arg.slice(0, index));
            if (option && (option.required || option.optional)) {
              this.emit(`option:${option.name()}`, arg.slice(index + 1));
              continue;
            }
          }
          if (maybeOption(arg)) {
            dest = unknown;
          }
          if ((this._enablePositionalOptions || this._passThroughOptions) && operands.length === 0 && unknown.length === 0) {
            if (this._findCommand(arg)) {
              operands.push(arg);
              if (args.length > 0) unknown.push(...args);
              break;
            } else if (arg === this._helpCommandName && this._hasImplicitHelpCommand()) {
              operands.push(arg);
              if (args.length > 0) operands.push(...args);
              break;
            } else if (this._defaultCommandName) {
              unknown.push(arg);
              if (args.length > 0) unknown.push(...args);
              break;
            }
          }
          if (this._passThroughOptions) {
            dest.push(arg);
            if (args.length > 0) dest.push(...args);
            break;
          }
          dest.push(arg);
        }
        return {
          operands,
          unknown
        };
      }
      /**
      * Return an object containing local option values as key-value pairs.
      *
      * @return {Object}
      */
      opts() {
        if (this._storeOptionsAsProperties) {
          const result = {};
          const len = this.options.length;
          for (let i = 0; i < len; i++) {
            const key = this.options[i].attributeName();
            result[key] = key === this._versionOptionName ? this._version : this[key];
          }
          return result;
        }
        return this._optionValues;
      }
      /**
      * Return an object containing merged local and global option values as key-value pairs.
      *
      * @return {Object}
      */
      optsWithGlobals() {
        return getCommandAndParents(this).reduce((combinedOptions, cmd) => Object.assign(combinedOptions, cmd.opts()), {});
      }
      /**
      * Display error message and exit (or call exitOverride).
      *
      * @param {string} message
      * @param {Object} [errorOptions]
      * @param {string} [errorOptions.code] - an id string representing the error
      * @param {number} [errorOptions.exitCode] - used with process.exit
      */
      error(message, errorOptions) {
        this._outputConfiguration.outputError(`${message}
`, this._outputConfiguration.writeErr);
        if (typeof this._showHelpAfterError === "string") {
          this._outputConfiguration.writeErr(`${this._showHelpAfterError}
`);
        } else if (this._showHelpAfterError) {
          this._outputConfiguration.writeErr("\n");
          this.outputHelp({
            error: true
          });
        }
        const config = errorOptions || {};
        const exitCode = config.exitCode || 1;
        const code = config.code || "commander.error";
        this._exit(exitCode, code, message);
      }
      /**
      * Apply any option related environment variables, if option does
      * not have a value from cli or client code.
      *
      * @api private
      */
      _parseOptionsEnv() {
        this.options.forEach((option) => {
          if (option.envVar && option.envVar in process2.env) {
            const optionKey = option.attributeName();
            if (this.getOptionValue(optionKey) === void 0 || [
              "default",
              "config",
              "env"
            ].includes(this.getOptionValueSource(optionKey))) {
              if (option.required || option.optional) {
                this.emit(`optionEnv:${option.name()}`, process2.env[option.envVar]);
              } else {
                this.emit(`optionEnv:${option.name()}`);
              }
            }
          }
        });
      }
      /**
      * Apply any implied option values, if option is undefined or default value.
      *
      * @api private
      */
      _parseOptionsImplied() {
        const dualHelper = new DualOptions(this.options);
        const hasCustomOptionValue = /* @__PURE__ */ __name((optionKey) => {
          return this.getOptionValue(optionKey) !== void 0 && ![
            "default",
            "implied"
          ].includes(this.getOptionValueSource(optionKey));
        }, "hasCustomOptionValue");
        this.options.filter((option) => option.implied !== void 0 && hasCustomOptionValue(option.attributeName()) && dualHelper.valueFromOption(this.getOptionValue(option.attributeName()), option)).forEach((option) => {
          Object.keys(option.implied).filter((impliedKey) => !hasCustomOptionValue(impliedKey)).forEach((impliedKey) => {
            this.setOptionValueWithSource(impliedKey, option.implied[impliedKey], "implied");
          });
        });
      }
      /**
      * Argument `name` is missing.
      *
      * @param {string} name
      * @api private
      */
      missingArgument(name) {
        const message = `error: missing required argument '${name}'`;
        this.error(message, {
          code: "commander.missingArgument"
        });
      }
      /**
      * `Option` is missing an argument.
      *
      * @param {Option} option
      * @api private
      */
      optionMissingArgument(option) {
        const message = `error: option '${option.flags}' argument missing`;
        this.error(message, {
          code: "commander.optionMissingArgument"
        });
      }
      /**
      * `Option` does not have a value, and is a mandatory option.
      *
      * @param {Option} option
      * @api private
      */
      missingMandatoryOptionValue(option) {
        const message = `error: required option '${option.flags}' not specified`;
        this.error(message, {
          code: "commander.missingMandatoryOptionValue"
        });
      }
      /**
      * `Option` conflicts with another option.
      *
      * @param {Option} option
      * @param {Option} conflictingOption
      * @api private
      */
      _conflictingOption(option, conflictingOption) {
        const findBestOptionFromValue = /* @__PURE__ */ __name((option2) => {
          const optionKey = option2.attributeName();
          const optionValue = this.getOptionValue(optionKey);
          const negativeOption = this.options.find((target) => target.negate && optionKey === target.attributeName());
          const positiveOption = this.options.find((target) => !target.negate && optionKey === target.attributeName());
          if (negativeOption && (negativeOption.presetArg === void 0 && optionValue === false || negativeOption.presetArg !== void 0 && optionValue === negativeOption.presetArg)) {
            return negativeOption;
          }
          return positiveOption || option2;
        }, "findBestOptionFromValue");
        const getErrorMessage = /* @__PURE__ */ __name((option2) => {
          const bestOption = findBestOptionFromValue(option2);
          const optionKey = bestOption.attributeName();
          const source = this.getOptionValueSource(optionKey);
          if (source === "env") {
            return `environment variable '${bestOption.envVar}'`;
          }
          return `option '${bestOption.flags}'`;
        }, "getErrorMessage");
        const message = `error: ${getErrorMessage(option)} cannot be used with ${getErrorMessage(conflictingOption)}`;
        this.error(message, {
          code: "commander.conflictingOption"
        });
      }
      /**
      * Unknown option `flag`.
      *
      * @param {string} flag
      * @api private
      */
      unknownOption(flag) {
        if (this._allowUnknownOption) return;
        let suggestion = "";
        if (flag.startsWith("--") && this._showSuggestionAfterError) {
          let candidateFlags = [];
          let command = this;
          do {
            const moreFlags = command.createHelp().visibleOptions(command).filter((option) => option.long).map((option) => option.long);
            candidateFlags = candidateFlags.concat(moreFlags);
            command = command.parent;
          } while (command && !command._enablePositionalOptions);
          suggestion = suggestSimilar(flag, candidateFlags);
        }
        const message = `error: unknown option '${flag}'${suggestion}`;
        this.error(message, {
          code: "commander.unknownOption"
        });
      }
      /**
      * Excess arguments, more than expected.
      *
      * @param {string[]} receivedArgs
      * @api private
      */
      _excessArguments(receivedArgs) {
        if (this._allowExcessArguments) return;
        const expected = this._args.length;
        const s = expected === 1 ? "" : "s";
        const forSubcommand = this.parent ? ` for '${this.name()}'` : "";
        const message = `error: too many arguments${forSubcommand}. Expected ${expected} argument${s} but got ${receivedArgs.length}.`;
        this.error(message, {
          code: "commander.excessArguments"
        });
      }
      /**
      * Unknown command.
      *
      * @api private
      */
      unknownCommand() {
        const unknownName = this.args[0];
        let suggestion = "";
        if (this._showSuggestionAfterError) {
          const candidateNames = [];
          this.createHelp().visibleCommands(this).forEach((command) => {
            candidateNames.push(command.name());
            if (command.alias()) candidateNames.push(command.alias());
          });
          suggestion = suggestSimilar(unknownName, candidateNames);
        }
        const message = `error: unknown command '${unknownName}'${suggestion}`;
        this.error(message, {
          code: "commander.unknownCommand"
        });
      }
      /**
      * Set the program version to `str`.
      *
      * This method auto-registers the "-V, --version" flag
      * which will print the version number when passed.
      *
      * You can optionally supply the  flags and description to override the defaults.
      *
      * @param {string} str
      * @param {string} [flags]
      * @param {string} [description]
      * @return {this | string} `this` command for chaining, or version string if no arguments
      */
      version(str, flags, description) {
        if (str === void 0) return this._version;
        this._version = str;
        flags = flags || "-V, --version";
        description = description || "output the version number";
        const versionOption = this.createOption(flags, description);
        this._versionOptionName = versionOption.attributeName();
        this.options.push(versionOption);
        this.on("option:" + versionOption.name(), () => {
          this._outputConfiguration.writeOut(`${str}
`);
          this._exit(0, "commander.version", str);
        });
        return this;
      }
      /**
      * Set the description.
      *
      * @param {string} [str]
      * @param {Object} [argsDescription]
      * @return {string|Command}
      */
      description(str, argsDescription) {
        if (str === void 0 && argsDescription === void 0) return this._description;
        this._description = str;
        if (argsDescription) {
          this._argsDescription = argsDescription;
        }
        return this;
      }
      /**
      * Set the summary. Used when listed as subcommand of parent.
      *
      * @param {string} [str]
      * @return {string|Command}
      */
      summary(str) {
        if (str === void 0) return this._summary;
        this._summary = str;
        return this;
      }
      /**
      * Set an alias for the command.
      *
      * You may call more than once to add multiple aliases. Only the first alias is shown in the auto-generated help.
      *
      * @param {string} [alias]
      * @return {string|Command}
      */
      alias(alias) {
        if (alias === void 0) return this._aliases[0];
        let command = this;
        if (this.commands.length !== 0 && this.commands[this.commands.length - 1]._executableHandler) {
          command = this.commands[this.commands.length - 1];
        }
        if (alias === command._name) throw new Error("Command alias can't be the same as its name");
        command._aliases.push(alias);
        return this;
      }
      /**
      * Set aliases for the command.
      *
      * Only the first alias is shown in the auto-generated help.
      *
      * @param {string[]} [aliases]
      * @return {string[]|Command}
      */
      aliases(aliases) {
        if (aliases === void 0) return this._aliases;
        aliases.forEach((alias) => this.alias(alias));
        return this;
      }
      /**
      * Set / get the command usage `str`.
      *
      * @param {string} [str]
      * @return {String|Command}
      */
      usage(str) {
        if (str === void 0) {
          if (this._usage) return this._usage;
          const args = this._args.map((arg) => {
            return humanReadableArgName(arg);
          });
          return [].concat(this.options.length || this._hasHelpOption ? "[options]" : [], this.commands.length ? "[command]" : [], this._args.length ? args : []).join(" ");
        }
        this._usage = str;
        return this;
      }
      /**
      * Get or set the name of the command.
      *
      * @param {string} [str]
      * @return {string|Command}
      */
      name(str) {
        if (str === void 0) return this._name;
        this._name = str;
        return this;
      }
      /**
      * Set the name of the command from script filename, such as process.argv[1],
      * or require.main.filename, or __filename.
      *
      * (Used internally and public although not documented in README.)
      *
      * @example
      * program.nameFromFilename(require.main.filename);
      *
      * @param {string} filename
      * @return {Command}
      */
      nameFromFilename(filename) {
        this._name = path4.basename(filename, path4.extname(filename));
        return this;
      }
      /**
      * Get or set the directory for searching for executable subcommands of this command.
      *
      * @example
      * program.executableDir(__dirname);
      * // or
      * program.executableDir('subcommands');
      *
      * @param {string} [path]
      * @return {string|Command}
      */
      executableDir(path5) {
        if (path5 === void 0) return this._executableDir;
        this._executableDir = path5;
        return this;
      }
      /**
      * Return program help documentation.
      *
      * @param {{ error: boolean }} [contextOptions] - pass {error:true} to wrap for stderr instead of stdout
      * @return {string}
      */
      helpInformation(contextOptions) {
        const helper = this.createHelp();
        if (helper.helpWidth === void 0) {
          helper.helpWidth = contextOptions && contextOptions.error ? this._outputConfiguration.getErrHelpWidth() : this._outputConfiguration.getOutHelpWidth();
        }
        return helper.formatHelp(this, helper);
      }
      /**
      * @api private
      */
      _getHelpContext(contextOptions) {
        contextOptions = contextOptions || {};
        const context = {
          error: !!contextOptions.error
        };
        let write;
        if (context.error) {
          write = /* @__PURE__ */ __name((arg) => this._outputConfiguration.writeErr(arg), "write");
        } else {
          write = /* @__PURE__ */ __name((arg) => this._outputConfiguration.writeOut(arg), "write");
        }
        context.write = contextOptions.write || write;
        context.command = this;
        return context;
      }
      /**
      * Output help information for this command.
      *
      * Outputs built-in help, and custom text added using `.addHelpText()`.
      *
      * @param {{ error: boolean } | Function} [contextOptions] - pass {error:true} to write to stderr instead of stdout
      */
      outputHelp(contextOptions) {
        let deprecatedCallback;
        if (typeof contextOptions === "function") {
          deprecatedCallback = contextOptions;
          contextOptions = void 0;
        }
        const context = this._getHelpContext(contextOptions);
        getCommandAndParents(this).reverse().forEach((command) => command.emit("beforeAllHelp", context));
        this.emit("beforeHelp", context);
        let helpInformation = this.helpInformation(context);
        if (deprecatedCallback) {
          helpInformation = deprecatedCallback(helpInformation);
          if (typeof helpInformation !== "string" && !Buffer.isBuffer(helpInformation)) {
            throw new Error("outputHelp callback must return a string or a Buffer");
          }
        }
        context.write(helpInformation);
        this.emit(this._helpLongFlag);
        this.emit("afterHelp", context);
        getCommandAndParents(this).forEach((command) => command.emit("afterAllHelp", context));
      }
      /**
      * You can pass in flags and a description to override the help
      * flags and help description for your command. Pass in false to
      * disable the built-in help option.
      *
      * @param {string | boolean} [flags]
      * @param {string} [description]
      * @return {Command} `this` command for chaining
      */
      helpOption(flags, description) {
        if (typeof flags === "boolean") {
          this._hasHelpOption = flags;
          return this;
        }
        this._helpFlags = flags || this._helpFlags;
        this._helpDescription = description || this._helpDescription;
        const helpFlags = splitOptionFlags(this._helpFlags);
        this._helpShortFlag = helpFlags.shortFlag;
        this._helpLongFlag = helpFlags.longFlag;
        return this;
      }
      /**
      * Output help information and exit.
      *
      * Outputs built-in help, and custom text added using `.addHelpText()`.
      *
      * @param {{ error: boolean }} [contextOptions] - pass {error:true} to write to stderr instead of stdout
      */
      help(contextOptions) {
        this.outputHelp(contextOptions);
        let exitCode = process2.exitCode || 0;
        if (exitCode === 0 && contextOptions && typeof contextOptions !== "function" && contextOptions.error) {
          exitCode = 1;
        }
        this._exit(exitCode, "commander.help", "(outputHelp)");
      }
      /**
      * Add additional text to be displayed with the built-in help.
      *
      * Position is 'before' or 'after' to affect just this command,
      * and 'beforeAll' or 'afterAll' to affect this command and all its subcommands.
      *
      * @param {string} position - before or after built-in help
      * @param {string | Function} text - string to add, or a function returning a string
      * @return {Command} `this` command for chaining
      */
      addHelpText(position, text) {
        const allowedValues = [
          "beforeAll",
          "before",
          "after",
          "afterAll"
        ];
        if (!allowedValues.includes(position)) {
          throw new Error(`Unexpected value for position to addHelpText.
Expecting one of '${allowedValues.join("', '")}'`);
        }
        const helpEvent = `${position}Help`;
        this.on(helpEvent, (context) => {
          let helpStr;
          if (typeof text === "function") {
            helpStr = text({
              error: context.error,
              command: context.command
            });
          } else {
            helpStr = text;
          }
          if (helpStr) {
            context.write(`${helpStr}
`);
          }
        });
        return this;
      }
    }, __name(_a, "Command"), _a);
    function outputHelpIfRequested(cmd, args) {
      const helpOption = cmd._hasHelpOption && args.find((arg) => arg === cmd._helpLongFlag || arg === cmd._helpShortFlag);
      if (helpOption) {
        cmd.outputHelp();
        cmd._exit(0, "commander.helpDisplayed", "(outputHelp)");
      }
    }
    __name(outputHelpIfRequested, "outputHelpIfRequested");
    function incrementNodeInspectorPort(args) {
      return args.map((arg) => {
        if (!arg.startsWith("--inspect")) {
          return arg;
        }
        let debugOption;
        let debugHost = "127.0.0.1";
        let debugPort = "9229";
        let match;
        if ((match = arg.match(/^(--inspect(-brk)?)$/)) !== null) {
          debugOption = match[1];
        } else if ((match = arg.match(/^(--inspect(-brk|-port)?)=([^:]+)$/)) !== null) {
          debugOption = match[1];
          if (/^\d+$/.test(match[3])) {
            debugPort = match[3];
          } else {
            debugHost = match[3];
          }
        } else if ((match = arg.match(/^(--inspect(-brk|-port)?)=([^:]+):(\d+)$/)) !== null) {
          debugOption = match[1];
          debugHost = match[3];
          debugPort = match[4];
        }
        if (debugOption && debugPort !== "0") {
          return `${debugOption}=${debugHost}:${parseInt(debugPort) + 1}`;
        }
        return arg;
      });
    }
    __name(incrementNodeInspectorPort, "incrementNodeInspectorPort");
    function getCommandAndParents(startCommand) {
      const result = [];
      for (let command = startCommand; command; command = command.parent) {
        result.push(command);
      }
      return result;
    }
    __name(getCommandAndParents, "getCommandAndParents");
    exports.Command = Command2;
  }
});

// node_modules/commander/index.js
var require_commander = __commonJS({
  "node_modules/commander/index.js"(exports, module) {
    "use strict";
    var { Argument: Argument2 } = require_argument();
    var { Command: Command2 } = require_command();
    var { CommanderError: CommanderError2, InvalidArgumentError: InvalidArgumentError2 } = require_error();
    var { Help: Help2 } = require_help();
    var { Option: Option2 } = require_option();
    exports = module.exports = new Command2();
    exports.program = exports;
    exports.Argument = Argument2;
    exports.Command = Command2;
    exports.CommanderError = CommanderError2;
    exports.Help = Help2;
    exports.InvalidArgumentError = InvalidArgumentError2;
    exports.InvalidOptionArgumentError = InvalidArgumentError2;
    exports.Option = Option2;
  }
});

// node_modules/picomatch/lib/constants.js
var require_constants = __commonJS({
  "node_modules/picomatch/lib/constants.js"(exports, module) {
    "use strict";
    var path4 = __require("path");
    var WIN_SLASH = "\\\\/";
    var WIN_NO_SLASH = `[^${WIN_SLASH}]`;
    var DOT_LITERAL = "\\.";
    var PLUS_LITERAL = "\\+";
    var QMARK_LITERAL = "\\?";
    var SLASH_LITERAL = "\\/";
    var ONE_CHAR = "(?=.)";
    var QMARK = "[^/]";
    var END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
    var START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
    var DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
    var NO_DOT = `(?!${DOT_LITERAL})`;
    var NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
    var NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
    var NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
    var QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
    var STAR = `${QMARK}*?`;
    var POSIX_CHARS = {
      DOT_LITERAL,
      PLUS_LITERAL,
      QMARK_LITERAL,
      SLASH_LITERAL,
      ONE_CHAR,
      QMARK,
      END_ANCHOR,
      DOTS_SLASH,
      NO_DOT,
      NO_DOTS,
      NO_DOT_SLASH,
      NO_DOTS_SLASH,
      QMARK_NO_DOT,
      STAR,
      START_ANCHOR
    };
    var WINDOWS_CHARS = __spreadProps(__spreadValues({}, POSIX_CHARS), {
      SLASH_LITERAL: `[${WIN_SLASH}]`,
      QMARK: WIN_NO_SLASH,
      STAR: `${WIN_NO_SLASH}*?`,
      DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
      NO_DOT: `(?!${DOT_LITERAL})`,
      NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
      NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
      START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
      END_ANCHOR: `(?:[${WIN_SLASH}]|$)`
    });
    var POSIX_REGEX_SOURCE = {
      alnum: "a-zA-Z0-9",
      alpha: "a-zA-Z",
      ascii: "\\x00-\\x7F",
      blank: " \\t",
      cntrl: "\\x00-\\x1F\\x7F",
      digit: "0-9",
      graph: "\\x21-\\x7E",
      lower: "a-z",
      print: "\\x20-\\x7E ",
      punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
      space: " \\t\\r\\n\\v\\f",
      upper: "A-Z",
      word: "A-Za-z0-9_",
      xdigit: "A-Fa-f0-9"
    };
    module.exports = {
      MAX_LENGTH: 1024 * 64,
      POSIX_REGEX_SOURCE,
      // regular expressions
      REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
      REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
      REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
      REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
      REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
      REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
      // Replace globs with equivalent patterns to reduce parsing time.
      REPLACEMENTS: {
        "***": "*",
        "**/**": "**",
        "**/**/**": "**"
      },
      // Digits
      CHAR_0: 48,
      /* 0 */
      CHAR_9: 57,
      /* 9 */
      // Alphabet chars.
      CHAR_UPPERCASE_A: 65,
      /* A */
      CHAR_LOWERCASE_A: 97,
      /* a */
      CHAR_UPPERCASE_Z: 90,
      /* Z */
      CHAR_LOWERCASE_Z: 122,
      /* z */
      CHAR_LEFT_PARENTHESES: 40,
      /* ( */
      CHAR_RIGHT_PARENTHESES: 41,
      /* ) */
      CHAR_ASTERISK: 42,
      /* * */
      // Non-alphabetic chars.
      CHAR_AMPERSAND: 38,
      /* & */
      CHAR_AT: 64,
      /* @ */
      CHAR_BACKWARD_SLASH: 92,
      /* \ */
      CHAR_CARRIAGE_RETURN: 13,
      /* \r */
      CHAR_CIRCUMFLEX_ACCENT: 94,
      /* ^ */
      CHAR_COLON: 58,
      /* : */
      CHAR_COMMA: 44,
      /* , */
      CHAR_DOT: 46,
      /* . */
      CHAR_DOUBLE_QUOTE: 34,
      /* " */
      CHAR_EQUAL: 61,
      /* = */
      CHAR_EXCLAMATION_MARK: 33,
      /* ! */
      CHAR_FORM_FEED: 12,
      /* \f */
      CHAR_FORWARD_SLASH: 47,
      /* / */
      CHAR_GRAVE_ACCENT: 96,
      /* ` */
      CHAR_HASH: 35,
      /* # */
      CHAR_HYPHEN_MINUS: 45,
      /* - */
      CHAR_LEFT_ANGLE_BRACKET: 60,
      /* < */
      CHAR_LEFT_CURLY_BRACE: 123,
      /* { */
      CHAR_LEFT_SQUARE_BRACKET: 91,
      /* [ */
      CHAR_LINE_FEED: 10,
      /* \n */
      CHAR_NO_BREAK_SPACE: 160,
      /* \u00A0 */
      CHAR_PERCENT: 37,
      /* % */
      CHAR_PLUS: 43,
      /* + */
      CHAR_QUESTION_MARK: 63,
      /* ? */
      CHAR_RIGHT_ANGLE_BRACKET: 62,
      /* > */
      CHAR_RIGHT_CURLY_BRACE: 125,
      /* } */
      CHAR_RIGHT_SQUARE_BRACKET: 93,
      /* ] */
      CHAR_SEMICOLON: 59,
      /* ; */
      CHAR_SINGLE_QUOTE: 39,
      /* ' */
      CHAR_SPACE: 32,
      /*   */
      CHAR_TAB: 9,
      /* \t */
      CHAR_UNDERSCORE: 95,
      /* _ */
      CHAR_VERTICAL_LINE: 124,
      /* | */
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
      /* \uFEFF */
      SEP: path4.sep,
      /**
      * Create EXTGLOB_CHARS
      */
      extglobChars(chars) {
        return {
          "!": {
            type: "negate",
            open: "(?:(?!(?:",
            close: `))${chars.STAR})`
          },
          "?": {
            type: "qmark",
            open: "(?:",
            close: ")?"
          },
          "+": {
            type: "plus",
            open: "(?:",
            close: ")+"
          },
          "*": {
            type: "star",
            open: "(?:",
            close: ")*"
          },
          "@": {
            type: "at",
            open: "(?:",
            close: ")"
          }
        };
      },
      /**
      * Create GLOB_CHARS
      */
      globChars(win32) {
        return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
      }
    };
  }
});

// node_modules/picomatch/lib/utils.js
var require_utils = __commonJS({
  "node_modules/picomatch/lib/utils.js"(exports) {
    "use strict";
    var path4 = __require("path");
    var win32 = process.platform === "win32";
    var { REGEX_BACKSLASH, REGEX_REMOVE_BACKSLASH, REGEX_SPECIAL_CHARS, REGEX_SPECIAL_CHARS_GLOBAL } = require_constants();
    exports.isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    exports.hasRegexChars = (str) => REGEX_SPECIAL_CHARS.test(str);
    exports.isRegexChar = (str) => str.length === 1 && exports.hasRegexChars(str);
    exports.escapeRegex = (str) => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
    exports.toPosixSlashes = (str) => str.replace(REGEX_BACKSLASH, "/");
    exports.removeBackslashes = (str) => {
      return str.replace(REGEX_REMOVE_BACKSLASH, (match) => {
        return match === "\\" ? "" : match;
      });
    };
    exports.supportsLookbehinds = () => {
      const segs = process.version.slice(1).split(".").map(Number);
      if (segs.length === 3 && segs[0] >= 9 || segs[0] === 8 && segs[1] >= 10) {
        return true;
      }
      return false;
    };
    exports.isWindows = (options) => {
      if (options && typeof options.windows === "boolean") {
        return options.windows;
      }
      return win32 === true || path4.sep === "\\";
    };
    exports.escapeLast = (input, char, lastIdx) => {
      const idx = input.lastIndexOf(char, lastIdx);
      if (idx === -1) return input;
      if (input[idx - 1] === "\\") return exports.escapeLast(input, char, idx - 1);
      return `${input.slice(0, idx)}\\${input.slice(idx)}`;
    };
    exports.removePrefix = (input, state = {}) => {
      let output = input;
      if (output.startsWith("./")) {
        output = output.slice(2);
        state.prefix = "./";
      }
      return output;
    };
    exports.wrapOutput = (input, state = {}, options = {}) => {
      const prepend = options.contains ? "" : "^";
      const append = options.contains ? "" : "$";
      let output = `${prepend}(?:${input})${append}`;
      if (state.negated === true) {
        output = `(?:^(?!${output}).*$)`;
      }
      return output;
    };
  }
});

// node_modules/picomatch/lib/scan.js
var require_scan = __commonJS({
  "node_modules/picomatch/lib/scan.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var {
      CHAR_ASTERISK,
      /* * */
      CHAR_AT,
      /* @ */
      CHAR_BACKWARD_SLASH,
      /* \ */
      CHAR_COMMA,
      /* , */
      CHAR_DOT,
      /* . */
      CHAR_EXCLAMATION_MARK,
      /* ! */
      CHAR_FORWARD_SLASH,
      /* / */
      CHAR_LEFT_CURLY_BRACE,
      /* { */
      CHAR_LEFT_PARENTHESES,
      /* ( */
      CHAR_LEFT_SQUARE_BRACKET,
      /* [ */
      CHAR_PLUS,
      /* + */
      CHAR_QUESTION_MARK,
      /* ? */
      CHAR_RIGHT_CURLY_BRACE,
      /* } */
      CHAR_RIGHT_PARENTHESES,
      /* ) */
      CHAR_RIGHT_SQUARE_BRACKET
      /* ] */
    } = require_constants();
    var isPathSeparator = /* @__PURE__ */ __name((code) => {
      return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
    }, "isPathSeparator");
    var depth = /* @__PURE__ */ __name((token) => {
      if (token.isPrefix !== true) {
        token.depth = token.isGlobstar ? Infinity : 1;
      }
    }, "depth");
    var scan = /* @__PURE__ */ __name((input, options) => {
      const opts = options || {};
      const length = input.length - 1;
      const scanToEnd = opts.parts === true || opts.scanToEnd === true;
      const slashes = [];
      const tokens = [];
      const parts = [];
      let str = input;
      let index = -1;
      let start = 0;
      let lastIndex = 0;
      let isBrace = false;
      let isBracket = false;
      let isGlob = false;
      let isExtglob = false;
      let isGlobstar = false;
      let braceEscaped = false;
      let backslashes = false;
      let negated = false;
      let negatedExtglob = false;
      let finished = false;
      let braces = 0;
      let prev;
      let code;
      let token = {
        value: "",
        depth: 0,
        isGlob: false
      };
      const eos = /* @__PURE__ */ __name(() => index >= length, "eos");
      const peek = /* @__PURE__ */ __name(() => str.charCodeAt(index + 1), "peek");
      const advance = /* @__PURE__ */ __name(() => {
        prev = code;
        return str.charCodeAt(++index);
      }, "advance");
      while (index < length) {
        code = advance();
        let next;
        if (code === CHAR_BACKWARD_SLASH) {
          backslashes = token.backslashes = true;
          code = advance();
          if (code === CHAR_LEFT_CURLY_BRACE) {
            braceEscaped = true;
          }
          continue;
        }
        if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
          braces++;
          while (eos() !== true && (code = advance())) {
            if (code === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }
            if (code === CHAR_LEFT_CURLY_BRACE) {
              braces++;
              continue;
            }
            if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (braceEscaped !== true && code === CHAR_COMMA) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (code === CHAR_RIGHT_CURLY_BRACE) {
              braces--;
              if (braces === 0) {
                braceEscaped = false;
                isBrace = token.isBrace = true;
                finished = true;
                break;
              }
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_FORWARD_SLASH) {
          slashes.push(index);
          tokens.push(token);
          token = {
            value: "",
            depth: 0,
            isGlob: false
          };
          if (finished === true) continue;
          if (prev === CHAR_DOT && index === start + 1) {
            start += 2;
            continue;
          }
          lastIndex = index + 1;
          continue;
        }
        if (opts.noext !== true) {
          const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;
          if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
            isGlob = token.isGlob = true;
            isExtglob = token.isExtglob = true;
            finished = true;
            if (code === CHAR_EXCLAMATION_MARK && index === start) {
              negatedExtglob = true;
            }
            if (scanToEnd === true) {
              while (eos() !== true && (code = advance())) {
                if (code === CHAR_BACKWARD_SLASH) {
                  backslashes = token.backslashes = true;
                  code = advance();
                  continue;
                }
                if (code === CHAR_RIGHT_PARENTHESES) {
                  isGlob = token.isGlob = true;
                  finished = true;
                  break;
                }
              }
              continue;
            }
            break;
          }
        }
        if (code === CHAR_ASTERISK) {
          if (prev === CHAR_ASTERISK) isGlobstar = token.isGlobstar = true;
          isGlob = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_QUESTION_MARK) {
          isGlob = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_LEFT_SQUARE_BRACKET) {
          while (eos() !== true && (next = advance())) {
            if (next === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }
            if (next === CHAR_RIGHT_SQUARE_BRACKET) {
              isBracket = token.isBracket = true;
              isGlob = token.isGlob = true;
              finished = true;
              break;
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
          negated = token.negated = true;
          start++;
          continue;
        }
        if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
          isGlob = token.isGlob = true;
          if (scanToEnd === true) {
            while (eos() !== true && (code = advance())) {
              if (code === CHAR_LEFT_PARENTHESES) {
                backslashes = token.backslashes = true;
                code = advance();
                continue;
              }
              if (code === CHAR_RIGHT_PARENTHESES) {
                finished = true;
                break;
              }
            }
            continue;
          }
          break;
        }
        if (isGlob === true) {
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
      }
      if (opts.noext === true) {
        isExtglob = false;
        isGlob = false;
      }
      let base = str;
      let prefix = "";
      let glob = "";
      if (start > 0) {
        prefix = str.slice(0, start);
        str = str.slice(start);
        lastIndex -= start;
      }
      if (base && isGlob === true && lastIndex > 0) {
        base = str.slice(0, lastIndex);
        glob = str.slice(lastIndex);
      } else if (isGlob === true) {
        base = "";
        glob = str;
      } else {
        base = str;
      }
      if (base && base !== "" && base !== "/" && base !== str) {
        if (isPathSeparator(base.charCodeAt(base.length - 1))) {
          base = base.slice(0, -1);
        }
      }
      if (opts.unescape === true) {
        if (glob) glob = utils.removeBackslashes(glob);
        if (base && backslashes === true) {
          base = utils.removeBackslashes(base);
        }
      }
      const state = {
        prefix,
        input,
        start,
        base,
        glob,
        isBrace,
        isBracket,
        isGlob,
        isExtglob,
        isGlobstar,
        negated,
        negatedExtglob
      };
      if (opts.tokens === true) {
        state.maxDepth = 0;
        if (!isPathSeparator(code)) {
          tokens.push(token);
        }
        state.tokens = tokens;
      }
      if (opts.parts === true || opts.tokens === true) {
        let prevIndex;
        for (let idx = 0; idx < slashes.length; idx++) {
          const n = prevIndex ? prevIndex + 1 : start;
          const i = slashes[idx];
          const value = input.slice(n, i);
          if (opts.tokens) {
            if (idx === 0 && start !== 0) {
              tokens[idx].isPrefix = true;
              tokens[idx].value = prefix;
            } else {
              tokens[idx].value = value;
            }
            depth(tokens[idx]);
            state.maxDepth += tokens[idx].depth;
          }
          if (idx !== 0 || value !== "") {
            parts.push(value);
          }
          prevIndex = i;
        }
        if (prevIndex && prevIndex + 1 < input.length) {
          const value = input.slice(prevIndex + 1);
          parts.push(value);
          if (opts.tokens) {
            tokens[tokens.length - 1].value = value;
            depth(tokens[tokens.length - 1]);
            state.maxDepth += tokens[tokens.length - 1].depth;
          }
        }
        state.slashes = slashes;
        state.parts = parts;
      }
      return state;
    }, "scan");
    module.exports = scan;
  }
});

// node_modules/picomatch/lib/parse.js
var require_parse = __commonJS({
  "node_modules/picomatch/lib/parse.js"(exports, module) {
    "use strict";
    var constants = require_constants();
    var utils = require_utils();
    var { MAX_LENGTH, POSIX_REGEX_SOURCE, REGEX_NON_SPECIAL_CHARS, REGEX_SPECIAL_CHARS_BACKREF, REPLACEMENTS } = constants;
    var expandRange = /* @__PURE__ */ __name((args, options) => {
      if (typeof options.expandRange === "function") {
        return options.expandRange(...args, options);
      }
      args.sort();
      const value = `[${args.join("-")}]`;
      try {
        new RegExp(value);
      } catch (ex) {
        return args.map((v) => utils.escapeRegex(v)).join("..");
      }
      return value;
    }, "expandRange");
    var syntaxError = /* @__PURE__ */ __name((type, char) => {
      return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
    }, "syntaxError");
    var parse = /* @__PURE__ */ __name((input, options) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected a string");
      }
      input = REPLACEMENTS[input] || input;
      const opts = __spreadValues({}, options);
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      let len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      const bos = {
        type: "bos",
        value: "",
        output: opts.prepend || ""
      };
      const tokens = [
        bos
      ];
      const capture = opts.capture ? "" : "?:";
      const win32 = utils.isWindows(options);
      const PLATFORM_CHARS = constants.globChars(win32);
      const EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS);
      const { DOT_LITERAL, PLUS_LITERAL, SLASH_LITERAL, ONE_CHAR, DOTS_SLASH, NO_DOT, NO_DOT_SLASH, NO_DOTS_SLASH, QMARK, QMARK_NO_DOT, STAR, START_ANCHOR } = PLATFORM_CHARS;
      const globstar = /* @__PURE__ */ __name((opts2) => {
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      }, "globstar");
      const nodot = opts.dot ? "" : NO_DOT;
      const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
      let star = opts.bash === true ? globstar(opts) : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      if (typeof opts.noext === "boolean") {
        opts.noextglob = opts.noext;
      }
      const state = {
        input,
        index: -1,
        start: 0,
        dot: opts.dot === true,
        consumed: "",
        output: "",
        prefix: "",
        backtrack: false,
        negated: false,
        brackets: 0,
        braces: 0,
        parens: 0,
        quotes: 0,
        globstar: false,
        tokens
      };
      input = utils.removePrefix(input, state);
      len = input.length;
      const extglobs = [];
      const braces = [];
      const stack = [];
      let prev = bos;
      let value;
      const eos = /* @__PURE__ */ __name(() => state.index === len - 1, "eos");
      const peek = state.peek = (n = 1) => input[state.index + n];
      const advance = state.advance = () => input[++state.index] || "";
      const remaining = /* @__PURE__ */ __name(() => input.slice(state.index + 1), "remaining");
      const consume = /* @__PURE__ */ __name((value2 = "", num = 0) => {
        state.consumed += value2;
        state.index += num;
      }, "consume");
      const append = /* @__PURE__ */ __name((token) => {
        state.output += token.output != null ? token.output : token.value;
        consume(token.value);
      }, "append");
      const negate = /* @__PURE__ */ __name(() => {
        let count = 1;
        while (peek() === "!" && (peek(2) !== "(" || peek(3) === "?")) {
          advance();
          state.start++;
          count++;
        }
        if (count % 2 === 0) {
          return false;
        }
        state.negated = true;
        state.start++;
        return true;
      }, "negate");
      const increment = /* @__PURE__ */ __name((type) => {
        state[type]++;
        stack.push(type);
      }, "increment");
      const decrement = /* @__PURE__ */ __name((type) => {
        state[type]--;
        stack.pop();
      }, "decrement");
      const push = /* @__PURE__ */ __name((tok) => {
        if (prev.type === "globstar") {
          const isBrace = state.braces > 0 && (tok.type === "comma" || tok.type === "brace");
          const isExtglob = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
          if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob) {
            state.output = state.output.slice(0, -prev.output.length);
            prev.type = "star";
            prev.value = "*";
            prev.output = star;
            state.output += prev.output;
          }
        }
        if (extglobs.length && tok.type !== "paren") {
          extglobs[extglobs.length - 1].inner += tok.value;
        }
        if (tok.value || tok.output) append(tok);
        if (prev && prev.type === "text" && tok.type === "text") {
          prev.value += tok.value;
          prev.output = (prev.output || "") + tok.value;
          return;
        }
        tok.prev = prev;
        tokens.push(tok);
        prev = tok;
      }, "push");
      const extglobOpen = /* @__PURE__ */ __name((type, value2) => {
        const token = __spreadProps(__spreadValues({}, EXTGLOB_CHARS[value2]), {
          conditions: 1,
          inner: ""
        });
        token.prev = prev;
        token.parens = state.parens;
        token.output = state.output;
        const output = (opts.capture ? "(" : "") + token.open;
        increment("parens");
        push({
          type,
          value: value2,
          output: state.output ? "" : ONE_CHAR
        });
        push({
          type: "paren",
          extglob: true,
          value: advance(),
          output
        });
        extglobs.push(token);
      }, "extglobOpen");
      const extglobClose = /* @__PURE__ */ __name((token) => {
        let output = token.close + (opts.capture ? ")" : "");
        let rest;
        if (token.type === "negate") {
          let extglobStar = star;
          if (token.inner && token.inner.length > 1 && token.inner.includes("/")) {
            extglobStar = globstar(opts);
          }
          if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
            output = token.close = `)$))${extglobStar}`;
          }
          if (token.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
            const expression = parse(rest, __spreadProps(__spreadValues({}, options), {
              fastpaths: false
            })).output;
            output = token.close = `)${expression})${extglobStar})`;
          }
          if (token.prev.type === "bos") {
            state.negatedExtglob = true;
          }
        }
        push({
          type: "paren",
          extglob: true,
          value,
          output
        });
        decrement("parens");
      }, "extglobClose");
      if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
        let backslashes = false;
        let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
          if (first === "\\") {
            backslashes = true;
            return m;
          }
          if (first === "?") {
            if (esc) {
              return esc + first + (rest ? QMARK.repeat(rest.length) : "");
            }
            if (index === 0) {
              return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : "");
            }
            return QMARK.repeat(chars.length);
          }
          if (first === ".") {
            return DOT_LITERAL.repeat(chars.length);
          }
          if (first === "*") {
            if (esc) {
              return esc + first + (rest ? star : "");
            }
            return star;
          }
          return esc ? m : `\\${m}`;
        });
        if (backslashes === true) {
          if (opts.unescape === true) {
            output = output.replace(/\\/g, "");
          } else {
            output = output.replace(/\\+/g, (m) => {
              return m.length % 2 === 0 ? "\\\\" : m ? "\\" : "";
            });
          }
        }
        if (output === input && opts.contains === true) {
          state.output = input;
          return state;
        }
        state.output = utils.wrapOutput(output, state, options);
        return state;
      }
      while (!eos()) {
        value = advance();
        if (value === "\0") {
          continue;
        }
        if (value === "\\") {
          const next = peek();
          if (next === "/" && opts.bash !== true) {
            continue;
          }
          if (next === "." || next === ";") {
            continue;
          }
          if (!next) {
            value += "\\";
            push({
              type: "text",
              value
            });
            continue;
          }
          const match = /^\\+/.exec(remaining());
          let slashes = 0;
          if (match && match[0].length > 2) {
            slashes = match[0].length;
            state.index += slashes;
            if (slashes % 2 !== 0) {
              value += "\\";
            }
          }
          if (opts.unescape === true) {
            value = advance();
          } else {
            value += advance();
          }
          if (state.brackets === 0) {
            push({
              type: "text",
              value
            });
            continue;
          }
        }
        if (state.brackets > 0 && (value !== "]" || prev.value === "[" || prev.value === "[^")) {
          if (opts.posix !== false && value === ":") {
            const inner = prev.value.slice(1);
            if (inner.includes("[")) {
              prev.posix = true;
              if (inner.includes(":")) {
                const idx = prev.value.lastIndexOf("[");
                const pre = prev.value.slice(0, idx);
                const rest2 = prev.value.slice(idx + 2);
                const posix = POSIX_REGEX_SOURCE[rest2];
                if (posix) {
                  prev.value = pre + posix;
                  state.backtrack = true;
                  advance();
                  if (!bos.output && tokens.indexOf(prev) === 1) {
                    bos.output = ONE_CHAR;
                  }
                  continue;
                }
              }
            }
          }
          if (value === "[" && peek() !== ":" || value === "-" && peek() === "]") {
            value = `\\${value}`;
          }
          if (value === "]" && (prev.value === "[" || prev.value === "[^")) {
            value = `\\${value}`;
          }
          if (opts.posix === true && value === "!" && prev.value === "[") {
            value = "^";
          }
          prev.value += value;
          append({
            value
          });
          continue;
        }
        if (state.quotes === 1 && value !== '"') {
          value = utils.escapeRegex(value);
          prev.value += value;
          append({
            value
          });
          continue;
        }
        if (value === '"') {
          state.quotes = state.quotes === 1 ? 0 : 1;
          if (opts.keepQuotes === true) {
            push({
              type: "text",
              value
            });
          }
          continue;
        }
        if (value === "(") {
          increment("parens");
          push({
            type: "paren",
            value
          });
          continue;
        }
        if (value === ")") {
          if (state.parens === 0 && opts.strictBrackets === true) {
            throw new SyntaxError(syntaxError("opening", "("));
          }
          const extglob = extglobs[extglobs.length - 1];
          if (extglob && state.parens === extglob.parens + 1) {
            extglobClose(extglobs.pop());
            continue;
          }
          push({
            type: "paren",
            value,
            output: state.parens ? ")" : "\\)"
          });
          decrement("parens");
          continue;
        }
        if (value === "[") {
          if (opts.nobracket === true || !remaining().includes("]")) {
            if (opts.nobracket !== true && opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("closing", "]"));
            }
            value = `\\${value}`;
          } else {
            increment("brackets");
          }
          push({
            type: "bracket",
            value
          });
          continue;
        }
        if (value === "]") {
          if (opts.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
            push({
              type: "text",
              value,
              output: `\\${value}`
            });
            continue;
          }
          if (state.brackets === 0) {
            if (opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("opening", "["));
            }
            push({
              type: "text",
              value,
              output: `\\${value}`
            });
            continue;
          }
          decrement("brackets");
          const prevValue = prev.value.slice(1);
          if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) {
            value = `/${value}`;
          }
          prev.value += value;
          append({
            value
          });
          if (opts.literalBrackets === false || utils.hasRegexChars(prevValue)) {
            continue;
          }
          const escaped = utils.escapeRegex(prev.value);
          state.output = state.output.slice(0, -prev.value.length);
          if (opts.literalBrackets === true) {
            state.output += escaped;
            prev.value = escaped;
            continue;
          }
          prev.value = `(${capture}${escaped}|${prev.value})`;
          state.output += prev.value;
          continue;
        }
        if (value === "{" && opts.nobrace !== true) {
          increment("braces");
          const open = {
            type: "brace",
            value,
            output: "(",
            outputIndex: state.output.length,
            tokensIndex: state.tokens.length
          };
          braces.push(open);
          push(open);
          continue;
        }
        if (value === "}") {
          const brace = braces[braces.length - 1];
          if (opts.nobrace === true || !brace) {
            push({
              type: "text",
              value,
              output: value
            });
            continue;
          }
          let output = ")";
          if (brace.dots === true) {
            const arr = tokens.slice();
            const range = [];
            for (let i = arr.length - 1; i >= 0; i--) {
              tokens.pop();
              if (arr[i].type === "brace") {
                break;
              }
              if (arr[i].type !== "dots") {
                range.unshift(arr[i].value);
              }
            }
            output = expandRange(range, opts);
            state.backtrack = true;
          }
          if (brace.comma !== true && brace.dots !== true) {
            const out = state.output.slice(0, brace.outputIndex);
            const toks = state.tokens.slice(brace.tokensIndex);
            brace.value = brace.output = "\\{";
            value = output = "\\}";
            state.output = out;
            for (const t of toks) {
              state.output += t.output || t.value;
            }
          }
          push({
            type: "brace",
            value,
            output
          });
          decrement("braces");
          braces.pop();
          continue;
        }
        if (value === "|") {
          if (extglobs.length > 0) {
            extglobs[extglobs.length - 1].conditions++;
          }
          push({
            type: "text",
            value
          });
          continue;
        }
        if (value === ",") {
          let output = value;
          const brace = braces[braces.length - 1];
          if (brace && stack[stack.length - 1] === "braces") {
            brace.comma = true;
            output = "|";
          }
          push({
            type: "comma",
            value,
            output
          });
          continue;
        }
        if (value === "/") {
          if (prev.type === "dot" && state.index === state.start + 1) {
            state.start = state.index + 1;
            state.consumed = "";
            state.output = "";
            tokens.pop();
            prev = bos;
            continue;
          }
          push({
            type: "slash",
            value,
            output: SLASH_LITERAL
          });
          continue;
        }
        if (value === ".") {
          if (state.braces > 0 && prev.type === "dot") {
            if (prev.value === ".") prev.output = DOT_LITERAL;
            const brace = braces[braces.length - 1];
            prev.type = "dots";
            prev.output += value;
            prev.value += value;
            brace.dots = true;
            continue;
          }
          if (state.braces + state.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
            push({
              type: "text",
              value,
              output: DOT_LITERAL
            });
            continue;
          }
          push({
            type: "dot",
            value,
            output: DOT_LITERAL
          });
          continue;
        }
        if (value === "?") {
          const isGroup = prev && prev.value === "(";
          if (!isGroup && opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("qmark", value);
            continue;
          }
          if (prev && prev.type === "paren") {
            const next = peek();
            let output = value;
            if (next === "<" && !utils.supportsLookbehinds()) {
              throw new Error("Node.js v10 or higher is required for regex lookbehinds");
            }
            if (prev.value === "(" && !/[!=<:]/.test(next) || next === "<" && !/<([!=]|\w+>)/.test(remaining())) {
              output = `\\${value}`;
            }
            push({
              type: "text",
              value,
              output
            });
            continue;
          }
          if (opts.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
            push({
              type: "qmark",
              value,
              output: QMARK_NO_DOT
            });
            continue;
          }
          push({
            type: "qmark",
            value,
            output: QMARK
          });
          continue;
        }
        if (value === "!") {
          if (opts.noextglob !== true && peek() === "(") {
            if (peek(2) !== "?" || !/[!=<:]/.test(peek(3))) {
              extglobOpen("negate", value);
              continue;
            }
          }
          if (opts.nonegate !== true && state.index === 0) {
            negate();
            continue;
          }
        }
        if (value === "+") {
          if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("plus", value);
            continue;
          }
          if (prev && prev.value === "(" || opts.regex === false) {
            push({
              type: "plus",
              value,
              output: PLUS_LITERAL
            });
            continue;
          }
          if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state.parens > 0) {
            push({
              type: "plus",
              value
            });
            continue;
          }
          push({
            type: "plus",
            value: PLUS_LITERAL
          });
          continue;
        }
        if (value === "@") {
          if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            push({
              type: "at",
              extglob: true,
              value,
              output: ""
            });
            continue;
          }
          push({
            type: "text",
            value
          });
          continue;
        }
        if (value !== "*") {
          if (value === "$" || value === "^") {
            value = `\\${value}`;
          }
          const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
          if (match) {
            value += match[0];
            state.index += match[0].length;
          }
          push({
            type: "text",
            value
          });
          continue;
        }
        if (prev && (prev.type === "globstar" || prev.star === true)) {
          prev.type = "star";
          prev.star = true;
          prev.value += value;
          prev.output = star;
          state.backtrack = true;
          state.globstar = true;
          consume(value);
          continue;
        }
        let rest = remaining();
        if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
          extglobOpen("star", value);
          continue;
        }
        if (prev.type === "star") {
          if (opts.noglobstar === true) {
            consume(value);
            continue;
          }
          const prior = prev.prev;
          const before = prior.prev;
          const isStart = prior.type === "slash" || prior.type === "bos";
          const afterStar = before && (before.type === "star" || before.type === "globstar");
          if (opts.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
            push({
              type: "star",
              value,
              output: ""
            });
            continue;
          }
          const isBrace = state.braces > 0 && (prior.type === "comma" || prior.type === "brace");
          const isExtglob = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
          if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob) {
            push({
              type: "star",
              value,
              output: ""
            });
            continue;
          }
          while (rest.slice(0, 3) === "/**") {
            const after = input[state.index + 4];
            if (after && after !== "/") {
              break;
            }
            rest = rest.slice(3);
            consume("/**", 3);
          }
          if (prior.type === "bos" && eos()) {
            prev.type = "globstar";
            prev.value += value;
            prev.output = globstar(opts);
            state.output = prev.output;
            state.globstar = true;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && eos()) {
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = globstar(opts) + (opts.strictSlashes ? ")" : "|$)");
            prev.value += value;
            state.globstar = true;
            state.output += prior.output + prev.output;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
            const end = rest[1] !== void 0 ? "|$" : "";
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
            prev.value += value;
            state.output += prior.output + prev.output;
            state.globstar = true;
            consume(value + advance());
            push({
              type: "slash",
              value: "/",
              output: ""
            });
            continue;
          }
          if (prior.type === "bos" && rest[0] === "/") {
            prev.type = "globstar";
            prev.value += value;
            prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
            state.output = prev.output;
            state.globstar = true;
            consume(value + advance());
            push({
              type: "slash",
              value: "/",
              output: ""
            });
            continue;
          }
          state.output = state.output.slice(0, -prev.output.length);
          prev.type = "globstar";
          prev.output = globstar(opts);
          prev.value += value;
          state.output += prev.output;
          state.globstar = true;
          consume(value);
          continue;
        }
        const token = {
          type: "star",
          value,
          output: star
        };
        if (opts.bash === true) {
          token.output = ".*?";
          if (prev.type === "bos" || prev.type === "slash") {
            token.output = nodot + token.output;
          }
          push(token);
          continue;
        }
        if (prev && (prev.type === "bracket" || prev.type === "paren") && opts.regex === true) {
          token.output = value;
          push(token);
          continue;
        }
        if (state.index === state.start || prev.type === "slash" || prev.type === "dot") {
          if (prev.type === "dot") {
            state.output += NO_DOT_SLASH;
            prev.output += NO_DOT_SLASH;
          } else if (opts.dot === true) {
            state.output += NO_DOTS_SLASH;
            prev.output += NO_DOTS_SLASH;
          } else {
            state.output += nodot;
            prev.output += nodot;
          }
          if (peek() !== "*") {
            state.output += ONE_CHAR;
            prev.output += ONE_CHAR;
          }
        }
        push(token);
      }
      while (state.brackets > 0) {
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
        state.output = utils.escapeLast(state.output, "[");
        decrement("brackets");
      }
      while (state.parens > 0) {
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", ")"));
        state.output = utils.escapeLast(state.output, "(");
        decrement("parens");
      }
      while (state.braces > 0) {
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "}"));
        state.output = utils.escapeLast(state.output, "{");
        decrement("braces");
      }
      if (opts.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) {
        push({
          type: "maybe_slash",
          value: "",
          output: `${SLASH_LITERAL}?`
        });
      }
      if (state.backtrack === true) {
        state.output = "";
        for (const token of state.tokens) {
          state.output += token.output != null ? token.output : token.value;
          if (token.suffix) {
            state.output += token.suffix;
          }
        }
      }
      return state;
    }, "parse");
    parse.fastpaths = (input, options) => {
      const opts = __spreadValues({}, options);
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      const len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      input = REPLACEMENTS[input] || input;
      const win32 = utils.isWindows(options);
      const { DOT_LITERAL, SLASH_LITERAL, ONE_CHAR, DOTS_SLASH, NO_DOT, NO_DOTS, NO_DOTS_SLASH, STAR, START_ANCHOR } = constants.globChars(win32);
      const nodot = opts.dot ? NO_DOTS : NO_DOT;
      const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
      const capture = opts.capture ? "" : "?:";
      const state = {
        negated: false,
        prefix: ""
      };
      let star = opts.bash === true ? ".*?" : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      const globstar = /* @__PURE__ */ __name((opts2) => {
        if (opts2.noglobstar === true) return star;
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      }, "globstar");
      const create = /* @__PURE__ */ __name((str) => {
        switch (str) {
          case "*":
            return `${nodot}${ONE_CHAR}${star}`;
          case ".*":
            return `${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*.*":
            return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*/*":
            return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;
          case "**":
            return nodot + globstar(opts);
          case "**/*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;
          case "**/*.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "**/.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;
          default: {
            const match = /^(.*?)\.(\w+)$/.exec(str);
            if (!match) return;
            const source2 = create(match[1]);
            if (!source2) return;
            return source2 + DOT_LITERAL + match[2];
          }
        }
      }, "create");
      const output = utils.removePrefix(input, state);
      let source = create(output);
      if (source && opts.strictSlashes !== true) {
        source += `${SLASH_LITERAL}?`;
      }
      return source;
    };
    module.exports = parse;
  }
});

// node_modules/picomatch/lib/picomatch.js
var require_picomatch = __commonJS({
  "node_modules/picomatch/lib/picomatch.js"(exports, module) {
    "use strict";
    var path4 = __require("path");
    var scan = require_scan();
    var parse = require_parse();
    var utils = require_utils();
    var constants = require_constants();
    var isObject = /* @__PURE__ */ __name((val) => val && typeof val === "object" && !Array.isArray(val), "isObject");
    var picomatch = /* @__PURE__ */ __name((glob, options, returnState = false) => {
      if (Array.isArray(glob)) {
        const fns = glob.map((input) => picomatch(input, options, returnState));
        const arrayMatcher = /* @__PURE__ */ __name((str) => {
          for (const isMatch of fns) {
            const state2 = isMatch(str);
            if (state2) return state2;
          }
          return false;
        }, "arrayMatcher");
        return arrayMatcher;
      }
      const isState = isObject(glob) && glob.tokens && glob.input;
      if (glob === "" || typeof glob !== "string" && !isState) {
        throw new TypeError("Expected pattern to be a non-empty string");
      }
      const opts = options || {};
      const posix = utils.isWindows(options);
      const regex = isState ? picomatch.compileRe(glob, options) : picomatch.makeRe(glob, options, false, true);
      const state = regex.state;
      delete regex.state;
      let isIgnored = /* @__PURE__ */ __name(() => false, "isIgnored");
      if (opts.ignore) {
        const ignoreOpts = __spreadProps(__spreadValues({}, options), {
          ignore: null,
          onMatch: null,
          onResult: null
        });
        isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
      }
      const matcher = /* @__PURE__ */ __name((input, returnObject = false) => {
        const { isMatch, match, output } = picomatch.test(input, regex, options, {
          glob,
          posix
        });
        const result = {
          glob,
          state,
          regex,
          posix,
          input,
          output,
          match,
          isMatch
        };
        if (typeof opts.onResult === "function") {
          opts.onResult(result);
        }
        if (isMatch === false) {
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (isIgnored(input)) {
          if (typeof opts.onIgnore === "function") {
            opts.onIgnore(result);
          }
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (typeof opts.onMatch === "function") {
          opts.onMatch(result);
        }
        return returnObject ? result : true;
      }, "matcher");
      if (returnState) {
        matcher.state = state;
      }
      return matcher;
    }, "picomatch");
    picomatch.test = (input, regex, options, { glob, posix } = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected input to be a string");
      }
      if (input === "") {
        return {
          isMatch: false,
          output: ""
        };
      }
      const opts = options || {};
      const format = opts.format || (posix ? utils.toPosixSlashes : null);
      let match = input === glob;
      let output = match && format ? format(input) : input;
      if (match === false) {
        output = format ? format(input) : input;
        match = output === glob;
      }
      if (match === false || opts.capture === true) {
        if (opts.matchBase === true || opts.basename === true) {
          match = picomatch.matchBase(input, regex, options, posix);
        } else {
          match = regex.exec(output);
        }
      }
      return {
        isMatch: Boolean(match),
        match,
        output
      };
    };
    picomatch.matchBase = (input, glob, options, posix = utils.isWindows(options)) => {
      const regex = glob instanceof RegExp ? glob : picomatch.makeRe(glob, options);
      return regex.test(path4.basename(input));
    };
    picomatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
    picomatch.parse = (pattern, options) => {
      if (Array.isArray(pattern)) return pattern.map((p) => picomatch.parse(p, options));
      return parse(pattern, __spreadProps(__spreadValues({}, options), {
        fastpaths: false
      }));
    };
    picomatch.scan = (input, options) => scan(input, options);
    picomatch.compileRe = (state, options, returnOutput = false, returnState = false) => {
      if (returnOutput === true) {
        return state.output;
      }
      const opts = options || {};
      const prepend = opts.contains ? "" : "^";
      const append = opts.contains ? "" : "$";
      let source = `${prepend}(?:${state.output})${append}`;
      if (state && state.negated === true) {
        source = `^(?!${source}).*$`;
      }
      const regex = picomatch.toRegex(source, options);
      if (returnState === true) {
        regex.state = state;
      }
      return regex;
    };
    picomatch.makeRe = (input, options = {}, returnOutput = false, returnState = false) => {
      if (!input || typeof input !== "string") {
        throw new TypeError("Expected a non-empty string");
      }
      let parsed = {
        negated: false,
        fastpaths: true
      };
      if (options.fastpaths !== false && (input[0] === "." || input[0] === "*")) {
        parsed.output = parse.fastpaths(input, options);
      }
      if (!parsed.output) {
        parsed = parse(input, options);
      }
      return picomatch.compileRe(parsed, options, returnOutput, returnState);
    };
    picomatch.toRegex = (source, options) => {
      try {
        const opts = options || {};
        return new RegExp(source, opts.flags || (opts.nocase ? "i" : ""));
      } catch (err) {
        if (options && options.debug === true) throw err;
        return /$^/;
      }
    };
    picomatch.constants = constants;
    module.exports = picomatch;
  }
});

// node_modules/picomatch/index.js
var require_picomatch2 = __commonJS({
  "node_modules/picomatch/index.js"(exports, module) {
    "use strict";
    module.exports = require_picomatch();
  }
});

// node_modules/readdirp/index.js
var require_readdirp = __commonJS({
  "node_modules/readdirp/index.js"(exports, module) {
    "use strict";
    var fs2 = __require("fs");
    var { Readable } = __require("stream");
    var sysPath = __require("path");
    var { promisify: promisify3 } = __require("util");
    var picomatch = require_picomatch2();
    var readdir = promisify3(fs2.readdir);
    var stat = promisify3(fs2.stat);
    var lstat = promisify3(fs2.lstat);
    var realpath = promisify3(fs2.realpath);
    var BANG = "!";
    var RECURSIVE_ERROR_CODE = "READDIRP_RECURSIVE_ERROR";
    var NORMAL_FLOW_ERRORS = /* @__PURE__ */ new Set([
      "ENOENT",
      "EPERM",
      "EACCES",
      "ELOOP",
      RECURSIVE_ERROR_CODE
    ]);
    var FILE_TYPE = "files";
    var DIR_TYPE = "directories";
    var FILE_DIR_TYPE = "files_directories";
    var EVERYTHING_TYPE = "all";
    var ALL_TYPES = [
      FILE_TYPE,
      DIR_TYPE,
      FILE_DIR_TYPE,
      EVERYTHING_TYPE
    ];
    var isNormalFlowError = /* @__PURE__ */ __name((error) => NORMAL_FLOW_ERRORS.has(error.code), "isNormalFlowError");
    var [maj, min] = process.versions.node.split(".").slice(0, 2).map((n) => Number.parseInt(n, 10));
    var wantBigintFsStats = process.platform === "win32" && (maj > 10 || maj === 10 && min >= 5);
    var normalizeFilter = /* @__PURE__ */ __name((filter) => {
      if (filter === void 0) return;
      if (typeof filter === "function") return filter;
      if (typeof filter === "string") {
        const glob = picomatch(filter.trim());
        return (entry) => glob(entry.basename);
      }
      if (Array.isArray(filter)) {
        const positive = [];
        const negative = [];
        for (const item of filter) {
          const trimmed = item.trim();
          if (trimmed.charAt(0) === BANG) {
            negative.push(picomatch(trimmed.slice(1)));
          } else {
            positive.push(picomatch(trimmed));
          }
        }
        if (negative.length > 0) {
          if (positive.length > 0) {
            return (entry) => positive.some((f) => f(entry.basename)) && !negative.some((f) => f(entry.basename));
          }
          return (entry) => !negative.some((f) => f(entry.basename));
        }
        return (entry) => positive.some((f) => f(entry.basename));
      }
    }, "normalizeFilter");
    var _a;
    var ReaddirpStream = (_a = class extends Readable {
      static get defaultOptions() {
        return {
          root: ".",
          /* eslint-disable no-unused-vars */
          fileFilter: /* @__PURE__ */ __name((path4) => true, "fileFilter"),
          directoryFilter: /* @__PURE__ */ __name((path4) => true, "directoryFilter"),
          /* eslint-enable no-unused-vars */
          type: FILE_TYPE,
          lstat: false,
          depth: 2147483648,
          alwaysStat: false
        };
      }
      constructor(options = {}) {
        super({
          objectMode: true,
          autoDestroy: true,
          highWaterMark: options.highWaterMark || 4096
        });
        const opts = __spreadValues(__spreadValues({}, _a.defaultOptions), options);
        const { root, type } = opts;
        this._fileFilter = normalizeFilter(opts.fileFilter);
        this._directoryFilter = normalizeFilter(opts.directoryFilter);
        const statMethod = opts.lstat ? lstat : stat;
        if (wantBigintFsStats) {
          this._stat = (path4) => statMethod(path4, {
            bigint: true
          });
        } else {
          this._stat = statMethod;
        }
        this._maxDepth = opts.depth;
        this._wantsDir = [
          DIR_TYPE,
          FILE_DIR_TYPE,
          EVERYTHING_TYPE
        ].includes(type);
        this._wantsFile = [
          FILE_TYPE,
          FILE_DIR_TYPE,
          EVERYTHING_TYPE
        ].includes(type);
        this._wantsEverything = type === EVERYTHING_TYPE;
        this._root = sysPath.resolve(root);
        this._isDirent = "Dirent" in fs2 && !opts.alwaysStat;
        this._statsProp = this._isDirent ? "dirent" : "stats";
        this._rdOptions = {
          encoding: "utf8",
          withFileTypes: this._isDirent
        };
        this.parents = [
          this._exploreDir(root, 1)
        ];
        this.reading = false;
        this.parent = void 0;
      }
      _read(batch) {
        return __async(this, null, function* () {
          if (this.reading) return;
          this.reading = true;
          try {
            while (!this.destroyed && batch > 0) {
              const { path: path4, depth, files = [] } = this.parent || {};
              if (files.length > 0) {
                const slice = files.splice(0, batch).map((dirent) => this._formatEntry(dirent, path4));
                for (const entry of yield Promise.all(slice)) {
                  if (this.destroyed) return;
                  const entryType = yield this._getEntryType(entry);
                  if (entryType === "directory" && this._directoryFilter(entry)) {
                    if (depth <= this._maxDepth) {
                      this.parents.push(this._exploreDir(entry.fullPath, depth + 1));
                    }
                    if (this._wantsDir) {
                      this.push(entry);
                      batch--;
                    }
                  } else if ((entryType === "file" || this._includeAsFile(entry)) && this._fileFilter(entry)) {
                    if (this._wantsFile) {
                      this.push(entry);
                      batch--;
                    }
                  }
                }
              } else {
                const parent = this.parents.pop();
                if (!parent) {
                  this.push(null);
                  break;
                }
                this.parent = yield parent;
                if (this.destroyed) return;
              }
            }
          } catch (error) {
            this.destroy(error);
          } finally {
            this.reading = false;
          }
        });
      }
      _exploreDir(path4, depth) {
        return __async(this, null, function* () {
          let files;
          try {
            files = yield readdir(path4, this._rdOptions);
          } catch (error) {
            this._onError(error);
          }
          return {
            files,
            depth,
            path: path4
          };
        });
      }
      _formatEntry(dirent, path4) {
        return __async(this, null, function* () {
          let entry;
          try {
            const basename = this._isDirent ? dirent.name : dirent;
            const fullPath = sysPath.resolve(sysPath.join(path4, basename));
            entry = {
              path: sysPath.relative(this._root, fullPath),
              fullPath,
              basename
            };
            entry[this._statsProp] = this._isDirent ? dirent : yield this._stat(fullPath);
          } catch (err) {
            this._onError(err);
          }
          return entry;
        });
      }
      _onError(err) {
        if (isNormalFlowError(err) && !this.destroyed) {
          this.emit("warn", err);
        } else {
          this.destroy(err);
        }
      }
      _getEntryType(entry) {
        return __async(this, null, function* () {
          const stats = entry && entry[this._statsProp];
          if (!stats) {
            return;
          }
          if (stats.isFile()) {
            return "file";
          }
          if (stats.isDirectory()) {
            return "directory";
          }
          if (stats && stats.isSymbolicLink()) {
            const full = entry.fullPath;
            try {
              const entryRealPath = yield realpath(full);
              const entryRealPathStats = yield lstat(entryRealPath);
              if (entryRealPathStats.isFile()) {
                return "file";
              }
              if (entryRealPathStats.isDirectory()) {
                const len = entryRealPath.length;
                if (full.startsWith(entryRealPath) && full.substr(len, 1) === sysPath.sep) {
                  const recursiveError = new Error(`Circular symlink detected: "${full}" points to "${entryRealPath}"`);
                  recursiveError.code = RECURSIVE_ERROR_CODE;
                  return this._onError(recursiveError);
                }
                return "directory";
              }
            } catch (error) {
              this._onError(error);
            }
          }
        });
      }
      _includeAsFile(entry) {
        const stats = entry && entry[this._statsProp];
        return stats && this._wantsEverything && !stats.isDirectory();
      }
    }, __name(_a, "ReaddirpStream"), _a);
    var readdirp = /* @__PURE__ */ __name((root, options = {}) => {
      let type = options.entryType || options.type;
      if (type === "both") type = FILE_DIR_TYPE;
      if (type) options.type = type;
      if (!root) {
        throw new Error("readdirp: root argument is required. Usage: readdirp(root, options)");
      } else if (typeof root !== "string") {
        throw new TypeError("readdirp: root argument must be a string. Usage: readdirp(root, options)");
      } else if (type && !ALL_TYPES.includes(type)) {
        throw new Error(`readdirp: Invalid type passed. Use one of ${ALL_TYPES.join(", ")}`);
      }
      options.root = root;
      return new ReaddirpStream(options);
    }, "readdirp");
    var readdirpPromise = /* @__PURE__ */ __name((root, options = {}) => {
      return new Promise((resolve, reject) => {
        const files = [];
        readdirp(root, options).on("data", (entry) => files.push(entry)).on("end", () => resolve(files)).on("error", (error) => reject(error));
      });
    }, "readdirpPromise");
    readdirp.promise = readdirpPromise;
    readdirp.ReaddirpStream = ReaddirpStream;
    readdirp.default = readdirp;
    module.exports = readdirp;
  }
});

// node_modules/normalize-path/index.js
var require_normalize_path = __commonJS({
  "node_modules/normalize-path/index.js"(exports, module) {
    "use strict";
    module.exports = function(path4, stripTrailing) {
      if (typeof path4 !== "string") {
        throw new TypeError("expected path to be a string");
      }
      if (path4 === "\\" || path4 === "/") return "/";
      var len = path4.length;
      if (len <= 1) return path4;
      var prefix = "";
      if (len > 4 && path4[3] === "\\") {
        var ch = path4[2];
        if ((ch === "?" || ch === ".") && path4.slice(0, 2) === "\\\\") {
          path4 = path4.slice(2);
          prefix = "//";
        }
      }
      var segs = path4.split(/[/\\]+/);
      if (stripTrailing !== false && segs[segs.length - 1] === "") {
        segs.pop();
      }
      return prefix + segs.join("/");
    };
  }
});

// node_modules/anymatch/index.js
var require_anymatch = __commonJS({
  "node_modules/anymatch/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var picomatch = require_picomatch2();
    var normalizePath = require_normalize_path();
    var BANG = "!";
    var DEFAULT_OPTIONS = {
      returnIndex: false
    };
    var arrify = /* @__PURE__ */ __name((item) => Array.isArray(item) ? item : [
      item
    ], "arrify");
    var createPattern = /* @__PURE__ */ __name((matcher, options) => {
      if (typeof matcher === "function") {
        return matcher;
      }
      if (typeof matcher === "string") {
        const glob = picomatch(matcher, options);
        return (string) => matcher === string || glob(string);
      }
      if (matcher instanceof RegExp) {
        return (string) => matcher.test(string);
      }
      return (string) => false;
    }, "createPattern");
    var matchPatterns = /* @__PURE__ */ __name((patterns, negPatterns, args, returnIndex) => {
      const isList = Array.isArray(args);
      const _path = isList ? args[0] : args;
      if (!isList && typeof _path !== "string") {
        throw new TypeError("anymatch: second argument must be a string: got " + Object.prototype.toString.call(_path));
      }
      const path4 = normalizePath(_path, false);
      for (let index = 0; index < negPatterns.length; index++) {
        const nglob = negPatterns[index];
        if (nglob(path4)) {
          return returnIndex ? -1 : false;
        }
      }
      const applied = isList && [
        path4
      ].concat(args.slice(1));
      for (let index = 0; index < patterns.length; index++) {
        const pattern = patterns[index];
        if (isList ? pattern(...applied) : pattern(path4)) {
          return returnIndex ? index : true;
        }
      }
      return returnIndex ? -1 : false;
    }, "matchPatterns");
    var anymatch = /* @__PURE__ */ __name((matchers, testString, options = DEFAULT_OPTIONS) => {
      if (matchers == null) {
        throw new TypeError("anymatch: specify first argument");
      }
      const opts = typeof options === "boolean" ? {
        returnIndex: options
      } : options;
      const returnIndex = opts.returnIndex || false;
      const mtchers = arrify(matchers);
      const negatedGlobs = mtchers.filter((item) => typeof item === "string" && item.charAt(0) === BANG).map((item) => item.slice(1)).map((item) => picomatch(item, opts));
      const patterns = mtchers.filter((item) => typeof item !== "string" || typeof item === "string" && item.charAt(0) !== BANG).map((matcher) => createPattern(matcher, opts));
      if (testString == null) {
        return (testString2, ri = false) => {
          const returnIndex2 = typeof ri === "boolean" ? ri : false;
          return matchPatterns(patterns, negatedGlobs, testString2, returnIndex2);
        };
      }
      return matchPatterns(patterns, negatedGlobs, testString, returnIndex);
    }, "anymatch");
    anymatch.default = anymatch;
    module.exports = anymatch;
  }
});

// node_modules/is-extglob/index.js
var require_is_extglob = __commonJS({
  "node_modules/is-extglob/index.js"(exports, module) {
    "use strict";
    module.exports = /* @__PURE__ */ __name(function isExtglob(str) {
      if (typeof str !== "string" || str === "") {
        return false;
      }
      var match;
      while (match = /(\\).|([@?!+*]\(.*\))/g.exec(str)) {
        if (match[2]) return true;
        str = str.slice(match.index + match[0].length);
      }
      return false;
    }, "isExtglob");
  }
});

// node_modules/is-glob/index.js
var require_is_glob = __commonJS({
  "node_modules/is-glob/index.js"(exports, module) {
    "use strict";
    var isExtglob = require_is_extglob();
    var chars = {
      "{": "}",
      "(": ")",
      "[": "]"
    };
    var strictCheck = /* @__PURE__ */ __name(function(str) {
      if (str[0] === "!") {
        return true;
      }
      var index = 0;
      var pipeIndex = -2;
      var closeSquareIndex = -2;
      var closeCurlyIndex = -2;
      var closeParenIndex = -2;
      var backSlashIndex = -2;
      while (index < str.length) {
        if (str[index] === "*") {
          return true;
        }
        if (str[index + 1] === "?" && /[\].+)]/.test(str[index])) {
          return true;
        }
        if (closeSquareIndex !== -1 && str[index] === "[" && str[index + 1] !== "]") {
          if (closeSquareIndex < index) {
            closeSquareIndex = str.indexOf("]", index);
          }
          if (closeSquareIndex > index) {
            if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
              return true;
            }
            backSlashIndex = str.indexOf("\\", index);
            if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
              return true;
            }
          }
        }
        if (closeCurlyIndex !== -1 && str[index] === "{" && str[index + 1] !== "}") {
          closeCurlyIndex = str.indexOf("}", index);
          if (closeCurlyIndex > index) {
            backSlashIndex = str.indexOf("\\", index);
            if (backSlashIndex === -1 || backSlashIndex > closeCurlyIndex) {
              return true;
            }
          }
        }
        if (closeParenIndex !== -1 && str[index] === "(" && str[index + 1] === "?" && /[:!=]/.test(str[index + 2]) && str[index + 3] !== ")") {
          closeParenIndex = str.indexOf(")", index);
          if (closeParenIndex > index) {
            backSlashIndex = str.indexOf("\\", index);
            if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
              return true;
            }
          }
        }
        if (pipeIndex !== -1 && str[index] === "(" && str[index + 1] !== "|") {
          if (pipeIndex < index) {
            pipeIndex = str.indexOf("|", index);
          }
          if (pipeIndex !== -1 && str[pipeIndex + 1] !== ")") {
            closeParenIndex = str.indexOf(")", pipeIndex);
            if (closeParenIndex > pipeIndex) {
              backSlashIndex = str.indexOf("\\", pipeIndex);
              if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
                return true;
              }
            }
          }
        }
        if (str[index] === "\\") {
          var open = str[index + 1];
          index += 2;
          var close = chars[open];
          if (close) {
            var n = str.indexOf(close, index);
            if (n !== -1) {
              index = n + 1;
            }
          }
          if (str[index] === "!") {
            return true;
          }
        } else {
          index++;
        }
      }
      return false;
    }, "strictCheck");
    var relaxedCheck = /* @__PURE__ */ __name(function(str) {
      if (str[0] === "!") {
        return true;
      }
      var index = 0;
      while (index < str.length) {
        if (/[*?{}()[\]]/.test(str[index])) {
          return true;
        }
        if (str[index] === "\\") {
          var open = str[index + 1];
          index += 2;
          var close = chars[open];
          if (close) {
            var n = str.indexOf(close, index);
            if (n !== -1) {
              index = n + 1;
            }
          }
          if (str[index] === "!") {
            return true;
          }
        } else {
          index++;
        }
      }
      return false;
    }, "relaxedCheck");
    module.exports = /* @__PURE__ */ __name(function isGlob(str, options) {
      if (typeof str !== "string" || str === "") {
        return false;
      }
      if (isExtglob(str)) {
        return true;
      }
      var check = strictCheck;
      if (options && options.strict === false) {
        check = relaxedCheck;
      }
      return check(str);
    }, "isGlob");
  }
});

// node_modules/glob-parent/index.js
var require_glob_parent = __commonJS({
  "node_modules/glob-parent/index.js"(exports, module) {
    "use strict";
    var isGlob = require_is_glob();
    var pathPosixDirname = __require("path").posix.dirname;
    var isWin32 = __require("os").platform() === "win32";
    var slash = "/";
    var backslash = /\\/g;
    var enclosure = /[\{\[].*[\}\]]$/;
    var globby = /(^|[^\\])([\{\[]|\([^\)]+$)/;
    var escaped = /\\([\!\*\?\|\[\]\(\)\{\}])/g;
    module.exports = /* @__PURE__ */ __name(function globParent(str, opts) {
      var options = Object.assign({
        flipBackslashes: true
      }, opts);
      if (options.flipBackslashes && isWin32 && str.indexOf(slash) < 0) {
        str = str.replace(backslash, slash);
      }
      if (enclosure.test(str)) {
        str += slash;
      }
      str += "a";
      do {
        str = pathPosixDirname(str);
      } while (isGlob(str) || globby.test(str));
      return str.replace(escaped, "$1");
    }, "globParent");
  }
});

// node_modules/braces/lib/utils.js
var require_utils2 = __commonJS({
  "node_modules/braces/lib/utils.js"(exports) {
    "use strict";
    exports.isInteger = (num) => {
      if (typeof num === "number") {
        return Number.isInteger(num);
      }
      if (typeof num === "string" && num.trim() !== "") {
        return Number.isInteger(Number(num));
      }
      return false;
    };
    exports.find = (node, type) => node.nodes.find((node2) => node2.type === type);
    exports.exceedsLimit = (min, max, step = 1, limit) => {
      if (limit === false) return false;
      if (!exports.isInteger(min) || !exports.isInteger(max)) return false;
      return (Number(max) - Number(min)) / Number(step) >= limit;
    };
    exports.escapeNode = (block, n = 0, type) => {
      const node = block.nodes[n];
      if (!node) return;
      if (type && node.type === type || node.type === "open" || node.type === "close") {
        if (node.escaped !== true) {
          node.value = "\\" + node.value;
          node.escaped = true;
        }
      }
    };
    exports.encloseBrace = (node) => {
      if (node.type !== "brace") return false;
      if (node.commas >> 0 + node.ranges >> 0 === 0) {
        node.invalid = true;
        return true;
      }
      return false;
    };
    exports.isInvalidBrace = (block) => {
      if (block.type !== "brace") return false;
      if (block.invalid === true || block.dollar) return true;
      if (block.commas >> 0 + block.ranges >> 0 === 0) {
        block.invalid = true;
        return true;
      }
      if (block.open !== true || block.close !== true) {
        block.invalid = true;
        return true;
      }
      return false;
    };
    exports.isOpenOrClose = (node) => {
      if (node.type === "open" || node.type === "close") {
        return true;
      }
      return node.open === true || node.close === true;
    };
    exports.reduce = (nodes) => nodes.reduce((acc, node) => {
      if (node.type === "text") acc.push(node.value);
      if (node.type === "range") node.type = "text";
      return acc;
    }, []);
    exports.flatten = (...args) => {
      const result = [];
      const flat = /* @__PURE__ */ __name((arr) => {
        for (let i = 0; i < arr.length; i++) {
          const ele = arr[i];
          if (Array.isArray(ele)) {
            flat(ele);
            continue;
          }
          if (ele !== void 0) {
            result.push(ele);
          }
        }
        return result;
      }, "flat");
      flat(args);
      return result;
    };
  }
});

// node_modules/braces/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/braces/lib/stringify.js"(exports, module) {
    "use strict";
    var utils = require_utils2();
    module.exports = (ast, options = {}) => {
      const stringify = /* @__PURE__ */ __name((node, parent = {}) => {
        const invalidBlock = options.escapeInvalid && utils.isInvalidBrace(parent);
        const invalidNode = node.invalid === true && options.escapeInvalid === true;
        let output = "";
        if (node.value) {
          if ((invalidBlock || invalidNode) && utils.isOpenOrClose(node)) {
            return "\\" + node.value;
          }
          return node.value;
        }
        if (node.value) {
          return node.value;
        }
        if (node.nodes) {
          for (const child of node.nodes) {
            output += stringify(child);
          }
        }
        return output;
      }, "stringify");
      return stringify(ast);
    };
  }
});

// node_modules/is-number/index.js
var require_is_number = __commonJS({
  "node_modules/is-number/index.js"(exports, module) {
    "use strict";
    module.exports = function(num) {
      if (typeof num === "number") {
        return num - num === 0;
      }
      if (typeof num === "string" && num.trim() !== "") {
        return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
      }
      return false;
    };
  }
});

// node_modules/to-regex-range/index.js
var require_to_regex_range = __commonJS({
  "node_modules/to-regex-range/index.js"(exports, module) {
    "use strict";
    var isNumber = require_is_number();
    var toRegexRange = /* @__PURE__ */ __name((min, max, options) => {
      if (isNumber(min) === false) {
        throw new TypeError("toRegexRange: expected the first argument to be a number");
      }
      if (max === void 0 || min === max) {
        return String(min);
      }
      if (isNumber(max) === false) {
        throw new TypeError("toRegexRange: expected the second argument to be a number.");
      }
      let opts = __spreadValues({
        relaxZeros: true
      }, options);
      if (typeof opts.strictZeros === "boolean") {
        opts.relaxZeros = opts.strictZeros === false;
      }
      let relax = String(opts.relaxZeros);
      let shorthand = String(opts.shorthand);
      let capture = String(opts.capture);
      let wrap = String(opts.wrap);
      let cacheKey = min + ":" + max + "=" + relax + shorthand + capture + wrap;
      if (toRegexRange.cache.hasOwnProperty(cacheKey)) {
        return toRegexRange.cache[cacheKey].result;
      }
      let a = Math.min(min, max);
      let b = Math.max(min, max);
      if (Math.abs(a - b) === 1) {
        let result = min + "|" + max;
        if (opts.capture) {
          return `(${result})`;
        }
        if (opts.wrap === false) {
          return result;
        }
        return `(?:${result})`;
      }
      let isPadded = hasPadding(min) || hasPadding(max);
      let state = {
        min,
        max,
        a,
        b
      };
      let positives = [];
      let negatives = [];
      if (isPadded) {
        state.isPadded = isPadded;
        state.maxLen = String(state.max).length;
      }
      if (a < 0) {
        let newMin = b < 0 ? Math.abs(b) : 1;
        negatives = splitToPatterns(newMin, Math.abs(a), state, opts);
        a = state.a = 0;
      }
      if (b >= 0) {
        positives = splitToPatterns(a, b, state, opts);
      }
      state.negatives = negatives;
      state.positives = positives;
      state.result = collatePatterns(negatives, positives, opts);
      if (opts.capture === true) {
        state.result = `(${state.result})`;
      } else if (opts.wrap !== false && positives.length + negatives.length > 1) {
        state.result = `(?:${state.result})`;
      }
      toRegexRange.cache[cacheKey] = state;
      return state.result;
    }, "toRegexRange");
    function collatePatterns(neg, pos, options) {
      let onlyNegative = filterPatterns(neg, pos, "-", false, options) || [];
      let onlyPositive = filterPatterns(pos, neg, "", false, options) || [];
      let intersected = filterPatterns(neg, pos, "-?", true, options) || [];
      let subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
      return subpatterns.join("|");
    }
    __name(collatePatterns, "collatePatterns");
    function splitToRanges(min, max) {
      let nines = 1;
      let zeros = 1;
      let stop = countNines(min, nines);
      let stops = /* @__PURE__ */ new Set([
        max
      ]);
      while (min <= stop && stop <= max) {
        stops.add(stop);
        nines += 1;
        stop = countNines(min, nines);
      }
      stop = countZeros(max + 1, zeros) - 1;
      while (min < stop && stop <= max) {
        stops.add(stop);
        zeros += 1;
        stop = countZeros(max + 1, zeros) - 1;
      }
      stops = [
        ...stops
      ];
      stops.sort(compare);
      return stops;
    }
    __name(splitToRanges, "splitToRanges");
    function rangeToPattern(start, stop, options) {
      if (start === stop) {
        return {
          pattern: start,
          count: [],
          digits: 0
        };
      }
      let zipped = zip(start, stop);
      let digits = zipped.length;
      let pattern = "";
      let count = 0;
      for (let i = 0; i < digits; i++) {
        let [startDigit, stopDigit] = zipped[i];
        if (startDigit === stopDigit) {
          pattern += startDigit;
        } else if (startDigit !== "0" || stopDigit !== "9") {
          pattern += toCharacterClass(startDigit, stopDigit, options);
        } else {
          count++;
        }
      }
      if (count) {
        pattern += options.shorthand === true ? "\\d" : "[0-9]";
      }
      return {
        pattern,
        count: [
          count
        ],
        digits
      };
    }
    __name(rangeToPattern, "rangeToPattern");
    function splitToPatterns(min, max, tok, options) {
      let ranges = splitToRanges(min, max);
      let tokens = [];
      let start = min;
      let prev;
      for (let i = 0; i < ranges.length; i++) {
        let max2 = ranges[i];
        let obj = rangeToPattern(String(start), String(max2), options);
        let zeros = "";
        if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
          if (prev.count.length > 1) {
            prev.count.pop();
          }
          prev.count.push(obj.count[0]);
          prev.string = prev.pattern + toQuantifier(prev.count);
          start = max2 + 1;
          continue;
        }
        if (tok.isPadded) {
          zeros = padZeros(max2, tok, options);
        }
        obj.string = zeros + obj.pattern + toQuantifier(obj.count);
        tokens.push(obj);
        start = max2 + 1;
        prev = obj;
      }
      return tokens;
    }
    __name(splitToPatterns, "splitToPatterns");
    function filterPatterns(arr, comparison, prefix, intersection, options) {
      let result = [];
      for (let ele of arr) {
        let { string } = ele;
        if (!intersection && !contains(comparison, "string", string)) {
          result.push(prefix + string);
        }
        if (intersection && contains(comparison, "string", string)) {
          result.push(prefix + string);
        }
      }
      return result;
    }
    __name(filterPatterns, "filterPatterns");
    function zip(a, b) {
      let arr = [];
      for (let i = 0; i < a.length; i++) arr.push([
        a[i],
        b[i]
      ]);
      return arr;
    }
    __name(zip, "zip");
    function compare(a, b) {
      return a > b ? 1 : b > a ? -1 : 0;
    }
    __name(compare, "compare");
    function contains(arr, key, val) {
      return arr.some((ele) => ele[key] === val);
    }
    __name(contains, "contains");
    function countNines(min, len) {
      return Number(String(min).slice(0, -len) + "9".repeat(len));
    }
    __name(countNines, "countNines");
    function countZeros(integer, zeros) {
      return integer - integer % Math.pow(10, zeros);
    }
    __name(countZeros, "countZeros");
    function toQuantifier(digits) {
      let [start = 0, stop = ""] = digits;
      if (stop || start > 1) {
        return `{${start + (stop ? "," + stop : "")}}`;
      }
      return "";
    }
    __name(toQuantifier, "toQuantifier");
    function toCharacterClass(a, b, options) {
      return `[${a}${b - a === 1 ? "" : "-"}${b}]`;
    }
    __name(toCharacterClass, "toCharacterClass");
    function hasPadding(str) {
      return /^-?(0+)\d/.test(str);
    }
    __name(hasPadding, "hasPadding");
    function padZeros(value, tok, options) {
      if (!tok.isPadded) {
        return value;
      }
      let diff = Math.abs(tok.maxLen - String(value).length);
      let relax = options.relaxZeros !== false;
      switch (diff) {
        case 0:
          return "";
        case 1:
          return relax ? "0?" : "0";
        case 2:
          return relax ? "0{0,2}" : "00";
        default: {
          return relax ? `0{0,${diff}}` : `0{${diff}}`;
        }
      }
    }
    __name(padZeros, "padZeros");
    toRegexRange.cache = {};
    toRegexRange.clearCache = () => toRegexRange.cache = {};
    module.exports = toRegexRange;
  }
});

// node_modules/fill-range/index.js
var require_fill_range = __commonJS({
  "node_modules/fill-range/index.js"(exports, module) {
    "use strict";
    var util = __require("util");
    var toRegexRange = require_to_regex_range();
    var isObject = /* @__PURE__ */ __name((val) => val !== null && typeof val === "object" && !Array.isArray(val), "isObject");
    var transform = /* @__PURE__ */ __name((toNumber) => {
      return (value) => toNumber === true ? Number(value) : String(value);
    }, "transform");
    var isValidValue = /* @__PURE__ */ __name((value) => {
      return typeof value === "number" || typeof value === "string" && value !== "";
    }, "isValidValue");
    var isNumber = /* @__PURE__ */ __name((num) => Number.isInteger(+num), "isNumber");
    var zeros = /* @__PURE__ */ __name((input) => {
      let value = `${input}`;
      let index = -1;
      if (value[0] === "-") value = value.slice(1);
      if (value === "0") return false;
      while (value[++index] === "0") ;
      return index > 0;
    }, "zeros");
    var stringify = /* @__PURE__ */ __name((start, end, options) => {
      if (typeof start === "string" || typeof end === "string") {
        return true;
      }
      return options.stringify === true;
    }, "stringify");
    var pad = /* @__PURE__ */ __name((input, maxLength, toNumber) => {
      if (maxLength > 0) {
        let dash = input[0] === "-" ? "-" : "";
        if (dash) input = input.slice(1);
        input = dash + input.padStart(dash ? maxLength - 1 : maxLength, "0");
      }
      if (toNumber === false) {
        return String(input);
      }
      return input;
    }, "pad");
    var toMaxLen = /* @__PURE__ */ __name((input, maxLength) => {
      let negative = input[0] === "-" ? "-" : "";
      if (negative) {
        input = input.slice(1);
        maxLength--;
      }
      while (input.length < maxLength) input = "0" + input;
      return negative ? "-" + input : input;
    }, "toMaxLen");
    var toSequence = /* @__PURE__ */ __name((parts, options, maxLen) => {
      parts.negatives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
      parts.positives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
      let prefix = options.capture ? "" : "?:";
      let positives = "";
      let negatives = "";
      let result;
      if (parts.positives.length) {
        positives = parts.positives.map((v) => toMaxLen(String(v), maxLen)).join("|");
      }
      if (parts.negatives.length) {
        negatives = `-(${prefix}${parts.negatives.map((v) => toMaxLen(String(v), maxLen)).join("|")})`;
      }
      if (positives && negatives) {
        result = `${positives}|${negatives}`;
      } else {
        result = positives || negatives;
      }
      if (options.wrap) {
        return `(${prefix}${result})`;
      }
      return result;
    }, "toSequence");
    var toRange = /* @__PURE__ */ __name((a, b, isNumbers, options) => {
      if (isNumbers) {
        return toRegexRange(a, b, __spreadValues({
          wrap: false
        }, options));
      }
      let start = String.fromCharCode(a);
      if (a === b) return start;
      let stop = String.fromCharCode(b);
      return `[${start}-${stop}]`;
    }, "toRange");
    var toRegex = /* @__PURE__ */ __name((start, end, options) => {
      if (Array.isArray(start)) {
        let wrap = options.wrap === true;
        let prefix = options.capture ? "" : "?:";
        return wrap ? `(${prefix}${start.join("|")})` : start.join("|");
      }
      return toRegexRange(start, end, options);
    }, "toRegex");
    var rangeError = /* @__PURE__ */ __name((...args) => {
      return new RangeError("Invalid range arguments: " + util.inspect(...args));
    }, "rangeError");
    var invalidRange = /* @__PURE__ */ __name((start, end, options) => {
      if (options.strictRanges === true) throw rangeError([
        start,
        end
      ]);
      return [];
    }, "invalidRange");
    var invalidStep = /* @__PURE__ */ __name((step, options) => {
      if (options.strictRanges === true) {
        throw new TypeError(`Expected step "${step}" to be a number`);
      }
      return [];
    }, "invalidStep");
    var fillNumbers = /* @__PURE__ */ __name((start, end, step = 1, options = {}) => {
      let a = Number(start);
      let b = Number(end);
      if (!Number.isInteger(a) || !Number.isInteger(b)) {
        if (options.strictRanges === true) throw rangeError([
          start,
          end
        ]);
        return [];
      }
      if (a === 0) a = 0;
      if (b === 0) b = 0;
      let descending = a > b;
      let startString = String(start);
      let endString = String(end);
      let stepString = String(step);
      step = Math.max(Math.abs(step), 1);
      let padded = zeros(startString) || zeros(endString) || zeros(stepString);
      let maxLen = padded ? Math.max(startString.length, endString.length, stepString.length) : 0;
      let toNumber = padded === false && stringify(start, end, options) === false;
      let format = options.transform || transform(toNumber);
      if (options.toRegex && step === 1) {
        return toRange(toMaxLen(start, maxLen), toMaxLen(end, maxLen), true, options);
      }
      let parts = {
        negatives: [],
        positives: []
      };
      let push = /* @__PURE__ */ __name((num) => parts[num < 0 ? "negatives" : "positives"].push(Math.abs(num)), "push");
      let range = [];
      let index = 0;
      while (descending ? a >= b : a <= b) {
        if (options.toRegex === true && step > 1) {
          push(a);
        } else {
          range.push(pad(format(a, index), maxLen, toNumber));
        }
        a = descending ? a - step : a + step;
        index++;
      }
      if (options.toRegex === true) {
        return step > 1 ? toSequence(parts, options, maxLen) : toRegex(range, null, __spreadValues({
          wrap: false
        }, options));
      }
      return range;
    }, "fillNumbers");
    var fillLetters = /* @__PURE__ */ __name((start, end, step = 1, options = {}) => {
      if (!isNumber(start) && start.length > 1 || !isNumber(end) && end.length > 1) {
        return invalidRange(start, end, options);
      }
      let format = options.transform || ((val) => String.fromCharCode(val));
      let a = `${start}`.charCodeAt(0);
      let b = `${end}`.charCodeAt(0);
      let descending = a > b;
      let min = Math.min(a, b);
      let max = Math.max(a, b);
      if (options.toRegex && step === 1) {
        return toRange(min, max, false, options);
      }
      let range = [];
      let index = 0;
      while (descending ? a >= b : a <= b) {
        range.push(format(a, index));
        a = descending ? a - step : a + step;
        index++;
      }
      if (options.toRegex === true) {
        return toRegex(range, null, {
          wrap: false,
          options
        });
      }
      return range;
    }, "fillLetters");
    var fill = /* @__PURE__ */ __name((start, end, step, options = {}) => {
      if (end == null && isValidValue(start)) {
        return [
          start
        ];
      }
      if (!isValidValue(start) || !isValidValue(end)) {
        return invalidRange(start, end, options);
      }
      if (typeof step === "function") {
        return fill(start, end, 1, {
          transform: step
        });
      }
      if (isObject(step)) {
        return fill(start, end, 0, step);
      }
      let opts = __spreadValues({}, options);
      if (opts.capture === true) opts.wrap = true;
      step = step || opts.step || 1;
      if (!isNumber(step)) {
        if (step != null && !isObject(step)) return invalidStep(step, opts);
        return fill(start, end, 1, step);
      }
      if (isNumber(start) && isNumber(end)) {
        return fillNumbers(start, end, step, opts);
      }
      return fillLetters(start, end, Math.max(Math.abs(step), 1), opts);
    }, "fill");
    module.exports = fill;
  }
});

// node_modules/braces/lib/compile.js
var require_compile = __commonJS({
  "node_modules/braces/lib/compile.js"(exports, module) {
    "use strict";
    var fill = require_fill_range();
    var utils = require_utils2();
    var compile = /* @__PURE__ */ __name((ast, options = {}) => {
      const walk = /* @__PURE__ */ __name((node, parent = {}) => {
        const invalidBlock = utils.isInvalidBrace(parent);
        const invalidNode = node.invalid === true && options.escapeInvalid === true;
        const invalid = invalidBlock === true || invalidNode === true;
        const prefix = options.escapeInvalid === true ? "\\" : "";
        let output = "";
        if (node.isOpen === true) {
          return prefix + node.value;
        }
        if (node.isClose === true) {
          console.log("node.isClose", prefix, node.value);
          return prefix + node.value;
        }
        if (node.type === "open") {
          return invalid ? prefix + node.value : "(";
        }
        if (node.type === "close") {
          return invalid ? prefix + node.value : ")";
        }
        if (node.type === "comma") {
          return node.prev.type === "comma" ? "" : invalid ? node.value : "|";
        }
        if (node.value) {
          return node.value;
        }
        if (node.nodes && node.ranges > 0) {
          const args = utils.reduce(node.nodes);
          const range = fill(...args, __spreadProps(__spreadValues({}, options), {
            wrap: false,
            toRegex: true,
            strictZeros: true
          }));
          if (range.length !== 0) {
            return args.length > 1 && range.length > 1 ? `(${range})` : range;
          }
        }
        if (node.nodes) {
          for (const child of node.nodes) {
            output += walk(child, node);
          }
        }
        return output;
      }, "walk");
      return walk(ast);
    }, "compile");
    module.exports = compile;
  }
});

// node_modules/braces/lib/expand.js
var require_expand = __commonJS({
  "node_modules/braces/lib/expand.js"(exports, module) {
    "use strict";
    var fill = require_fill_range();
    var stringify = require_stringify();
    var utils = require_utils2();
    var append = /* @__PURE__ */ __name((queue = "", stash = "", enclose = false) => {
      const result = [];
      queue = [].concat(queue);
      stash = [].concat(stash);
      if (!stash.length) return queue;
      if (!queue.length) {
        return enclose ? utils.flatten(stash).map((ele) => `{${ele}}`) : stash;
      }
      for (const item of queue) {
        if (Array.isArray(item)) {
          for (const value of item) {
            result.push(append(value, stash, enclose));
          }
        } else {
          for (let ele of stash) {
            if (enclose === true && typeof ele === "string") ele = `{${ele}}`;
            result.push(Array.isArray(ele) ? append(item, ele, enclose) : item + ele);
          }
        }
      }
      return utils.flatten(result);
    }, "append");
    var expand = /* @__PURE__ */ __name((ast, options = {}) => {
      const rangeLimit = options.rangeLimit === void 0 ? 1e3 : options.rangeLimit;
      const walk = /* @__PURE__ */ __name((node, parent = {}) => {
        node.queue = [];
        let p = parent;
        let q = parent.queue;
        while (p.type !== "brace" && p.type !== "root" && p.parent) {
          p = p.parent;
          q = p.queue;
        }
        if (node.invalid || node.dollar) {
          q.push(append(q.pop(), stringify(node, options)));
          return;
        }
        if (node.type === "brace" && node.invalid !== true && node.nodes.length === 2) {
          q.push(append(q.pop(), [
            "{}"
          ]));
          return;
        }
        if (node.nodes && node.ranges > 0) {
          const args = utils.reduce(node.nodes);
          if (utils.exceedsLimit(...args, options.step, rangeLimit)) {
            throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
          }
          let range = fill(...args, options);
          if (range.length === 0) {
            range = stringify(node, options);
          }
          q.push(append(q.pop(), range));
          node.nodes = [];
          return;
        }
        const enclose = utils.encloseBrace(node);
        let queue = node.queue;
        let block = node;
        while (block.type !== "brace" && block.type !== "root" && block.parent) {
          block = block.parent;
          queue = block.queue;
        }
        for (let i = 0; i < node.nodes.length; i++) {
          const child = node.nodes[i];
          if (child.type === "comma" && node.type === "brace") {
            if (i === 1) queue.push("");
            queue.push("");
            continue;
          }
          if (child.type === "close") {
            q.push(append(q.pop(), queue, enclose));
            continue;
          }
          if (child.value && child.type !== "open") {
            queue.push(append(queue.pop(), child.value));
            continue;
          }
          if (child.nodes) {
            walk(child, node);
          }
        }
        return queue;
      }, "walk");
      return utils.flatten(walk(ast));
    }, "expand");
    module.exports = expand;
  }
});

// node_modules/braces/lib/constants.js
var require_constants2 = __commonJS({
  "node_modules/braces/lib/constants.js"(exports, module) {
    "use strict";
    module.exports = {
      MAX_LENGTH: 1e4,
      // Digits
      CHAR_0: "0",
      /* 0 */
      CHAR_9: "9",
      /* 9 */
      // Alphabet chars.
      CHAR_UPPERCASE_A: "A",
      /* A */
      CHAR_LOWERCASE_A: "a",
      /* a */
      CHAR_UPPERCASE_Z: "Z",
      /* Z */
      CHAR_LOWERCASE_Z: "z",
      /* z */
      CHAR_LEFT_PARENTHESES: "(",
      /* ( */
      CHAR_RIGHT_PARENTHESES: ")",
      /* ) */
      CHAR_ASTERISK: "*",
      /* * */
      // Non-alphabetic chars.
      CHAR_AMPERSAND: "&",
      /* & */
      CHAR_AT: "@",
      /* @ */
      CHAR_BACKSLASH: "\\",
      /* \ */
      CHAR_BACKTICK: "`",
      /* ` */
      CHAR_CARRIAGE_RETURN: "\r",
      /* \r */
      CHAR_CIRCUMFLEX_ACCENT: "^",
      /* ^ */
      CHAR_COLON: ":",
      /* : */
      CHAR_COMMA: ",",
      /* , */
      CHAR_DOLLAR: "$",
      /* . */
      CHAR_DOT: ".",
      /* . */
      CHAR_DOUBLE_QUOTE: '"',
      /* " */
      CHAR_EQUAL: "=",
      /* = */
      CHAR_EXCLAMATION_MARK: "!",
      /* ! */
      CHAR_FORM_FEED: "\f",
      /* \f */
      CHAR_FORWARD_SLASH: "/",
      /* / */
      CHAR_HASH: "#",
      /* # */
      CHAR_HYPHEN_MINUS: "-",
      /* - */
      CHAR_LEFT_ANGLE_BRACKET: "<",
      /* < */
      CHAR_LEFT_CURLY_BRACE: "{",
      /* { */
      CHAR_LEFT_SQUARE_BRACKET: "[",
      /* [ */
      CHAR_LINE_FEED: "\n",
      /* \n */
      CHAR_NO_BREAK_SPACE: "\xA0",
      /* \u00A0 */
      CHAR_PERCENT: "%",
      /* % */
      CHAR_PLUS: "+",
      /* + */
      CHAR_QUESTION_MARK: "?",
      /* ? */
      CHAR_RIGHT_ANGLE_BRACKET: ">",
      /* > */
      CHAR_RIGHT_CURLY_BRACE: "}",
      /* } */
      CHAR_RIGHT_SQUARE_BRACKET: "]",
      /* ] */
      CHAR_SEMICOLON: ";",
      /* ; */
      CHAR_SINGLE_QUOTE: "'",
      /* ' */
      CHAR_SPACE: " ",
      /*   */
      CHAR_TAB: "	",
      /* \t */
      CHAR_UNDERSCORE: "_",
      /* _ */
      CHAR_VERTICAL_LINE: "|",
      /* | */
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\uFEFF"
      /* \uFEFF */
    };
  }
});

// node_modules/braces/lib/parse.js
var require_parse2 = __commonJS({
  "node_modules/braces/lib/parse.js"(exports, module) {
    "use strict";
    var stringify = require_stringify();
    var {
      MAX_LENGTH,
      CHAR_BACKSLASH,
      /* \ */
      CHAR_BACKTICK,
      /* ` */
      CHAR_COMMA,
      /* , */
      CHAR_DOT,
      /* . */
      CHAR_LEFT_PARENTHESES,
      /* ( */
      CHAR_RIGHT_PARENTHESES,
      /* ) */
      CHAR_LEFT_CURLY_BRACE,
      /* { */
      CHAR_RIGHT_CURLY_BRACE,
      /* } */
      CHAR_LEFT_SQUARE_BRACKET,
      /* [ */
      CHAR_RIGHT_SQUARE_BRACKET,
      /* ] */
      CHAR_DOUBLE_QUOTE,
      /* " */
      CHAR_SINGLE_QUOTE,
      /* ' */
      CHAR_NO_BREAK_SPACE,
      CHAR_ZERO_WIDTH_NOBREAK_SPACE
    } = require_constants2();
    var parse = /* @__PURE__ */ __name((input, options = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected a string");
      }
      const opts = options || {};
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      if (input.length > max) {
        throw new SyntaxError(`Input length (${input.length}), exceeds max characters (${max})`);
      }
      const ast = {
        type: "root",
        input,
        nodes: []
      };
      const stack = [
        ast
      ];
      let block = ast;
      let prev = ast;
      let brackets = 0;
      const length = input.length;
      let index = 0;
      let depth = 0;
      let value;
      const advance = /* @__PURE__ */ __name(() => input[index++], "advance");
      const push = /* @__PURE__ */ __name((node) => {
        if (node.type === "text" && prev.type === "dot") {
          prev.type = "text";
        }
        if (prev && prev.type === "text" && node.type === "text") {
          prev.value += node.value;
          return;
        }
        block.nodes.push(node);
        node.parent = block;
        node.prev = prev;
        prev = node;
        return node;
      }, "push");
      push({
        type: "bos"
      });
      while (index < length) {
        block = stack[stack.length - 1];
        value = advance();
        if (value === CHAR_ZERO_WIDTH_NOBREAK_SPACE || value === CHAR_NO_BREAK_SPACE) {
          continue;
        }
        if (value === CHAR_BACKSLASH) {
          push({
            type: "text",
            value: (options.keepEscaping ? value : "") + advance()
          });
          continue;
        }
        if (value === CHAR_RIGHT_SQUARE_BRACKET) {
          push({
            type: "text",
            value: "\\" + value
          });
          continue;
        }
        if (value === CHAR_LEFT_SQUARE_BRACKET) {
          brackets++;
          let next;
          while (index < length && (next = advance())) {
            value += next;
            if (next === CHAR_LEFT_SQUARE_BRACKET) {
              brackets++;
              continue;
            }
            if (next === CHAR_BACKSLASH) {
              value += advance();
              continue;
            }
            if (next === CHAR_RIGHT_SQUARE_BRACKET) {
              brackets--;
              if (brackets === 0) {
                break;
              }
            }
          }
          push({
            type: "text",
            value
          });
          continue;
        }
        if (value === CHAR_LEFT_PARENTHESES) {
          block = push({
            type: "paren",
            nodes: []
          });
          stack.push(block);
          push({
            type: "text",
            value
          });
          continue;
        }
        if (value === CHAR_RIGHT_PARENTHESES) {
          if (block.type !== "paren") {
            push({
              type: "text",
              value
            });
            continue;
          }
          block = stack.pop();
          push({
            type: "text",
            value
          });
          block = stack[stack.length - 1];
          continue;
        }
        if (value === CHAR_DOUBLE_QUOTE || value === CHAR_SINGLE_QUOTE || value === CHAR_BACKTICK) {
          const open = value;
          let next;
          if (options.keepQuotes !== true) {
            value = "";
          }
          while (index < length && (next = advance())) {
            if (next === CHAR_BACKSLASH) {
              value += next + advance();
              continue;
            }
            if (next === open) {
              if (options.keepQuotes === true) value += next;
              break;
            }
            value += next;
          }
          push({
            type: "text",
            value
          });
          continue;
        }
        if (value === CHAR_LEFT_CURLY_BRACE) {
          depth++;
          const dollar = prev.value && prev.value.slice(-1) === "$" || block.dollar === true;
          const brace = {
            type: "brace",
            open: true,
            close: false,
            dollar,
            depth,
            commas: 0,
            ranges: 0,
            nodes: []
          };
          block = push(brace);
          stack.push(block);
          push({
            type: "open",
            value
          });
          continue;
        }
        if (value === CHAR_RIGHT_CURLY_BRACE) {
          if (block.type !== "brace") {
            push({
              type: "text",
              value
            });
            continue;
          }
          const type = "close";
          block = stack.pop();
          block.close = true;
          push({
            type,
            value
          });
          depth--;
          block = stack[stack.length - 1];
          continue;
        }
        if (value === CHAR_COMMA && depth > 0) {
          if (block.ranges > 0) {
            block.ranges = 0;
            const open = block.nodes.shift();
            block.nodes = [
              open,
              {
                type: "text",
                value: stringify(block)
              }
            ];
          }
          push({
            type: "comma",
            value
          });
          block.commas++;
          continue;
        }
        if (value === CHAR_DOT && depth > 0 && block.commas === 0) {
          const siblings = block.nodes;
          if (depth === 0 || siblings.length === 0) {
            push({
              type: "text",
              value
            });
            continue;
          }
          if (prev.type === "dot") {
            block.range = [];
            prev.value += value;
            prev.type = "range";
            if (block.nodes.length !== 3 && block.nodes.length !== 5) {
              block.invalid = true;
              block.ranges = 0;
              prev.type = "text";
              continue;
            }
            block.ranges++;
            block.args = [];
            continue;
          }
          if (prev.type === "range") {
            siblings.pop();
            const before = siblings[siblings.length - 1];
            before.value += prev.value + value;
            prev = before;
            block.ranges--;
            continue;
          }
          push({
            type: "dot",
            value
          });
          continue;
        }
        push({
          type: "text",
          value
        });
      }
      do {
        block = stack.pop();
        if (block.type !== "root") {
          block.nodes.forEach((node) => {
            if (!node.nodes) {
              if (node.type === "open") node.isOpen = true;
              if (node.type === "close") node.isClose = true;
              if (!node.nodes) node.type = "text";
              node.invalid = true;
            }
          });
          const parent = stack[stack.length - 1];
          const index2 = parent.nodes.indexOf(block);
          parent.nodes.splice(index2, 1, ...block.nodes);
        }
      } while (stack.length > 0);
      push({
        type: "eos"
      });
      return ast;
    }, "parse");
    module.exports = parse;
  }
});

// node_modules/braces/index.js
var require_braces = __commonJS({
  "node_modules/braces/index.js"(exports, module) {
    "use strict";
    var stringify = require_stringify();
    var compile = require_compile();
    var expand = require_expand();
    var parse = require_parse2();
    var braces = /* @__PURE__ */ __name((input, options = {}) => {
      let output = [];
      if (Array.isArray(input)) {
        for (const pattern of input) {
          const result = braces.create(pattern, options);
          if (Array.isArray(result)) {
            output.push(...result);
          } else {
            output.push(result);
          }
        }
      } else {
        output = [].concat(braces.create(input, options));
      }
      if (options && options.expand === true && options.nodupes === true) {
        output = [
          ...new Set(output)
        ];
      }
      return output;
    }, "braces");
    braces.parse = (input, options = {}) => parse(input, options);
    braces.stringify = (input, options = {}) => {
      if (typeof input === "string") {
        return stringify(braces.parse(input, options), options);
      }
      return stringify(input, options);
    };
    braces.compile = (input, options = {}) => {
      if (typeof input === "string") {
        input = braces.parse(input, options);
      }
      return compile(input, options);
    };
    braces.expand = (input, options = {}) => {
      if (typeof input === "string") {
        input = braces.parse(input, options);
      }
      let result = expand(input, options);
      if (options.noempty === true) {
        result = result.filter(Boolean);
      }
      if (options.nodupes === true) {
        result = [
          ...new Set(result)
        ];
      }
      return result;
    };
    braces.create = (input, options = {}) => {
      if (input === "" || input.length < 3) {
        return [
          input
        ];
      }
      return options.expand !== true ? braces.compile(input, options) : braces.expand(input, options);
    };
    module.exports = braces;
  }
});

// node_modules/binary-extensions/binary-extensions.json
var require_binary_extensions = __commonJS({
  "node_modules/binary-extensions/binary-extensions.json"(exports, module) {
    module.exports = [
      "3dm",
      "3ds",
      "3g2",
      "3gp",
      "7z",
      "a",
      "aac",
      "adp",
      "afdesign",
      "afphoto",
      "afpub",
      "ai",
      "aif",
      "aiff",
      "alz",
      "ape",
      "apk",
      "appimage",
      "ar",
      "arj",
      "asf",
      "au",
      "avi",
      "bak",
      "baml",
      "bh",
      "bin",
      "bk",
      "bmp",
      "btif",
      "bz2",
      "bzip2",
      "cab",
      "caf",
      "cgm",
      "class",
      "cmx",
      "cpio",
      "cr2",
      "cur",
      "dat",
      "dcm",
      "deb",
      "dex",
      "djvu",
      "dll",
      "dmg",
      "dng",
      "doc",
      "docm",
      "docx",
      "dot",
      "dotm",
      "dra",
      "DS_Store",
      "dsk",
      "dts",
      "dtshd",
      "dvb",
      "dwg",
      "dxf",
      "ecelp4800",
      "ecelp7470",
      "ecelp9600",
      "egg",
      "eol",
      "eot",
      "epub",
      "exe",
      "f4v",
      "fbs",
      "fh",
      "fla",
      "flac",
      "flatpak",
      "fli",
      "flv",
      "fpx",
      "fst",
      "fvt",
      "g3",
      "gh",
      "gif",
      "graffle",
      "gz",
      "gzip",
      "h261",
      "h263",
      "h264",
      "icns",
      "ico",
      "ief",
      "img",
      "ipa",
      "iso",
      "jar",
      "jpeg",
      "jpg",
      "jpgv",
      "jpm",
      "jxr",
      "key",
      "ktx",
      "lha",
      "lib",
      "lvp",
      "lz",
      "lzh",
      "lzma",
      "lzo",
      "m3u",
      "m4a",
      "m4v",
      "mar",
      "mdi",
      "mht",
      "mid",
      "midi",
      "mj2",
      "mka",
      "mkv",
      "mmr",
      "mng",
      "mobi",
      "mov",
      "movie",
      "mp3",
      "mp4",
      "mp4a",
      "mpeg",
      "mpg",
      "mpga",
      "mxu",
      "nef",
      "npx",
      "numbers",
      "nupkg",
      "o",
      "odp",
      "ods",
      "odt",
      "oga",
      "ogg",
      "ogv",
      "otf",
      "ott",
      "pages",
      "pbm",
      "pcx",
      "pdb",
      "pdf",
      "pea",
      "pgm",
      "pic",
      "png",
      "pnm",
      "pot",
      "potm",
      "potx",
      "ppa",
      "ppam",
      "ppm",
      "pps",
      "ppsm",
      "ppsx",
      "ppt",
      "pptm",
      "pptx",
      "psd",
      "pya",
      "pyc",
      "pyo",
      "pyv",
      "qt",
      "rar",
      "ras",
      "raw",
      "resources",
      "rgb",
      "rip",
      "rlc",
      "rmf",
      "rmvb",
      "rpm",
      "rtf",
      "rz",
      "s3m",
      "s7z",
      "scpt",
      "sgi",
      "shar",
      "snap",
      "sil",
      "sketch",
      "slk",
      "smv",
      "snk",
      "so",
      "stl",
      "suo",
      "sub",
      "swf",
      "tar",
      "tbz",
      "tbz2",
      "tga",
      "tgz",
      "thmx",
      "tif",
      "tiff",
      "tlz",
      "ttc",
      "ttf",
      "txz",
      "udf",
      "uvh",
      "uvi",
      "uvm",
      "uvp",
      "uvs",
      "uvu",
      "viv",
      "vob",
      "war",
      "wav",
      "wax",
      "wbmp",
      "wdp",
      "weba",
      "webm",
      "webp",
      "whl",
      "wim",
      "wm",
      "wma",
      "wmv",
      "wmx",
      "woff",
      "woff2",
      "wrm",
      "wvx",
      "xbm",
      "xif",
      "xla",
      "xlam",
      "xls",
      "xlsb",
      "xlsm",
      "xlsx",
      "xlt",
      "xltm",
      "xltx",
      "xm",
      "xmind",
      "xpi",
      "xpm",
      "xwd",
      "xz",
      "z",
      "zip",
      "zipx"
    ];
  }
});

// node_modules/binary-extensions/index.js
var require_binary_extensions2 = __commonJS({
  "node_modules/binary-extensions/index.js"(exports, module) {
    "use strict";
    module.exports = require_binary_extensions();
  }
});

// node_modules/is-binary-path/index.js
var require_is_binary_path = __commonJS({
  "node_modules/is-binary-path/index.js"(exports, module) {
    "use strict";
    var path4 = __require("path");
    var binaryExtensions = require_binary_extensions2();
    var extensions = new Set(binaryExtensions);
    module.exports = (filePath) => extensions.has(path4.extname(filePath).slice(1).toLowerCase());
  }
});

// node_modules/chokidar/lib/constants.js
var require_constants3 = __commonJS({
  "node_modules/chokidar/lib/constants.js"(exports) {
    "use strict";
    var { sep } = __require("path");
    var { platform } = process;
    var os = __require("os");
    exports.EV_ALL = "all";
    exports.EV_READY = "ready";
    exports.EV_ADD = "add";
    exports.EV_CHANGE = "change";
    exports.EV_ADD_DIR = "addDir";
    exports.EV_UNLINK = "unlink";
    exports.EV_UNLINK_DIR = "unlinkDir";
    exports.EV_RAW = "raw";
    exports.EV_ERROR = "error";
    exports.STR_DATA = "data";
    exports.STR_END = "end";
    exports.STR_CLOSE = "close";
    exports.FSEVENT_CREATED = "created";
    exports.FSEVENT_MODIFIED = "modified";
    exports.FSEVENT_DELETED = "deleted";
    exports.FSEVENT_MOVED = "moved";
    exports.FSEVENT_CLONED = "cloned";
    exports.FSEVENT_UNKNOWN = "unknown";
    exports.FSEVENT_FLAG_MUST_SCAN_SUBDIRS = 1;
    exports.FSEVENT_TYPE_FILE = "file";
    exports.FSEVENT_TYPE_DIRECTORY = "directory";
    exports.FSEVENT_TYPE_SYMLINK = "symlink";
    exports.KEY_LISTENERS = "listeners";
    exports.KEY_ERR = "errHandlers";
    exports.KEY_RAW = "rawEmitters";
    exports.HANDLER_KEYS = [
      exports.KEY_LISTENERS,
      exports.KEY_ERR,
      exports.KEY_RAW
    ];
    exports.DOT_SLASH = `.${sep}`;
    exports.BACK_SLASH_RE = /\\/g;
    exports.DOUBLE_SLASH_RE = /\/\//;
    exports.SLASH_OR_BACK_SLASH_RE = /[/\\]/;
    exports.DOT_RE = /\..*\.(sw[px])$|~$|\.subl.*\.tmp/;
    exports.REPLACER_RE = /^\.[/\\]/;
    exports.SLASH = "/";
    exports.SLASH_SLASH = "//";
    exports.BRACE_START = "{";
    exports.BANG = "!";
    exports.ONE_DOT = ".";
    exports.TWO_DOTS = "..";
    exports.STAR = "*";
    exports.GLOBSTAR = "**";
    exports.ROOT_GLOBSTAR = "/**/*";
    exports.SLASH_GLOBSTAR = "/**";
    exports.DIR_SUFFIX = "Dir";
    exports.ANYMATCH_OPTS = {
      dot: true
    };
    exports.STRING_TYPE = "string";
    exports.FUNCTION_TYPE = "function";
    exports.EMPTY_STR = "";
    exports.EMPTY_FN = () => {
    };
    exports.IDENTITY_FN = (val) => val;
    exports.isWindows = platform === "win32";
    exports.isMacos = platform === "darwin";
    exports.isLinux = platform === "linux";
    exports.isIBMi = os.type() === "OS400";
  }
});

// node_modules/chokidar/lib/nodefs-handler.js
var require_nodefs_handler = __commonJS({
  "node_modules/chokidar/lib/nodefs-handler.js"(exports, module) {
    "use strict";
    var fs2 = __require("fs");
    var sysPath = __require("path");
    var { promisify: promisify3 } = __require("util");
    var isBinaryPath = require_is_binary_path();
    var { isWindows, isLinux, EMPTY_FN, EMPTY_STR, KEY_LISTENERS, KEY_ERR, KEY_RAW, HANDLER_KEYS, EV_CHANGE, EV_ADD, EV_ADD_DIR, EV_ERROR, STR_DATA, STR_END, BRACE_START, STAR } = require_constants3();
    var THROTTLE_MODE_WATCH = "watch";
    var open = promisify3(fs2.open);
    var stat = promisify3(fs2.stat);
    var lstat = promisify3(fs2.lstat);
    var close = promisify3(fs2.close);
    var fsrealpath = promisify3(fs2.realpath);
    var statMethods = {
      lstat,
      stat
    };
    var foreach = /* @__PURE__ */ __name((val, fn) => {
      if (val instanceof Set) {
        val.forEach(fn);
      } else {
        fn(val);
      }
    }, "foreach");
    var addAndConvert = /* @__PURE__ */ __name((main, prop, item) => {
      let container = main[prop];
      if (!(container instanceof Set)) {
        main[prop] = container = /* @__PURE__ */ new Set([
          container
        ]);
      }
      container.add(item);
    }, "addAndConvert");
    var clearItem = /* @__PURE__ */ __name((cont) => (key) => {
      const set = cont[key];
      if (set instanceof Set) {
        set.clear();
      } else {
        delete cont[key];
      }
    }, "clearItem");
    var delFromSet = /* @__PURE__ */ __name((main, prop, item) => {
      const container = main[prop];
      if (container instanceof Set) {
        container.delete(item);
      } else if (container === item) {
        delete main[prop];
      }
    }, "delFromSet");
    var isEmptySet = /* @__PURE__ */ __name((val) => val instanceof Set ? val.size === 0 : !val, "isEmptySet");
    var FsWatchInstances = /* @__PURE__ */ new Map();
    function createFsWatchInstance(path4, options, listener, errHandler, emitRaw) {
      const handleEvent = /* @__PURE__ */ __name((rawEvent, evPath) => {
        listener(path4);
        emitRaw(rawEvent, evPath, {
          watchedPath: path4
        });
        if (evPath && path4 !== evPath) {
          fsWatchBroadcast(sysPath.resolve(path4, evPath), KEY_LISTENERS, sysPath.join(path4, evPath));
        }
      }, "handleEvent");
      try {
        return fs2.watch(path4, options, handleEvent);
      } catch (error) {
        errHandler(error);
      }
    }
    __name(createFsWatchInstance, "createFsWatchInstance");
    var fsWatchBroadcast = /* @__PURE__ */ __name((fullPath, type, val1, val2, val3) => {
      const cont = FsWatchInstances.get(fullPath);
      if (!cont) return;
      foreach(cont[type], (listener) => {
        listener(val1, val2, val3);
      });
    }, "fsWatchBroadcast");
    var setFsWatchListener = /* @__PURE__ */ __name((path4, fullPath, options, handlers) => {
      const { listener, errHandler, rawEmitter } = handlers;
      let cont = FsWatchInstances.get(fullPath);
      let watcher;
      if (!options.persistent) {
        watcher = createFsWatchInstance(path4, options, listener, errHandler, rawEmitter);
        return watcher.close.bind(watcher);
      }
      if (cont) {
        addAndConvert(cont, KEY_LISTENERS, listener);
        addAndConvert(cont, KEY_ERR, errHandler);
        addAndConvert(cont, KEY_RAW, rawEmitter);
      } else {
        watcher = createFsWatchInstance(path4, options, fsWatchBroadcast.bind(null, fullPath, KEY_LISTENERS), errHandler, fsWatchBroadcast.bind(null, fullPath, KEY_RAW));
        if (!watcher) return;
        watcher.on(EV_ERROR, (error) => __async(null, null, function* () {
          const broadcastErr = fsWatchBroadcast.bind(null, fullPath, KEY_ERR);
          cont.watcherUnusable = true;
          if (isWindows && error.code === "EPERM") {
            try {
              const fd = yield open(path4, "r");
              yield close(fd);
              broadcastErr(error);
            } catch (err) {
            }
          } else {
            broadcastErr(error);
          }
        }));
        cont = {
          listeners: listener,
          errHandlers: errHandler,
          rawEmitters: rawEmitter,
          watcher
        };
        FsWatchInstances.set(fullPath, cont);
      }
      return () => {
        delFromSet(cont, KEY_LISTENERS, listener);
        delFromSet(cont, KEY_ERR, errHandler);
        delFromSet(cont, KEY_RAW, rawEmitter);
        if (isEmptySet(cont.listeners)) {
          cont.watcher.close();
          FsWatchInstances.delete(fullPath);
          HANDLER_KEYS.forEach(clearItem(cont));
          cont.watcher = void 0;
          Object.freeze(cont);
        }
      };
    }, "setFsWatchListener");
    var FsWatchFileInstances = /* @__PURE__ */ new Map();
    var setFsWatchFileListener = /* @__PURE__ */ __name((path4, fullPath, options, handlers) => {
      const { listener, rawEmitter } = handlers;
      let cont = FsWatchFileInstances.get(fullPath);
      let listeners = /* @__PURE__ */ new Set();
      let rawEmitters = /* @__PURE__ */ new Set();
      const copts = cont && cont.options;
      if (copts && (copts.persistent < options.persistent || copts.interval > options.interval)) {
        listeners = cont.listeners;
        rawEmitters = cont.rawEmitters;
        fs2.unwatchFile(fullPath);
        cont = void 0;
      }
      if (cont) {
        addAndConvert(cont, KEY_LISTENERS, listener);
        addAndConvert(cont, KEY_RAW, rawEmitter);
      } else {
        cont = {
          listeners: listener,
          rawEmitters: rawEmitter,
          options,
          watcher: fs2.watchFile(fullPath, options, (curr, prev) => {
            foreach(cont.rawEmitters, (rawEmitter2) => {
              rawEmitter2(EV_CHANGE, fullPath, {
                curr,
                prev
              });
            });
            const currmtime = curr.mtimeMs;
            if (curr.size !== prev.size || currmtime > prev.mtimeMs || currmtime === 0) {
              foreach(cont.listeners, (listener2) => listener2(path4, curr));
            }
          })
        };
        FsWatchFileInstances.set(fullPath, cont);
      }
      return () => {
        delFromSet(cont, KEY_LISTENERS, listener);
        delFromSet(cont, KEY_RAW, rawEmitter);
        if (isEmptySet(cont.listeners)) {
          FsWatchFileInstances.delete(fullPath);
          fs2.unwatchFile(fullPath);
          cont.options = cont.watcher = void 0;
          Object.freeze(cont);
        }
      };
    }, "setFsWatchFileListener");
    var _a;
    var NodeFsHandler = (_a = class {
      /**
      * @param {import("../index").FSWatcher} fsW
      */
      constructor(fsW) {
        this.fsw = fsW;
        this._boundHandleError = (error) => fsW._handleError(error);
      }
      /**
      * Watch file for changes with fs_watchFile or fs_watch.
      * @param {String} path to file or dir
      * @param {Function} listener on fs change
      * @returns {Function} closer for the watcher instance
      */
      _watchWithNodeFs(path4, listener) {
        const opts = this.fsw.options;
        const directory = sysPath.dirname(path4);
        const basename = sysPath.basename(path4);
        const parent = this.fsw._getWatchedDir(directory);
        parent.add(basename);
        const absolutePath = sysPath.resolve(path4);
        const options = {
          persistent: opts.persistent
        };
        if (!listener) listener = EMPTY_FN;
        let closer;
        if (opts.usePolling) {
          options.interval = opts.enableBinaryInterval && isBinaryPath(basename) ? opts.binaryInterval : opts.interval;
          closer = setFsWatchFileListener(path4, absolutePath, options, {
            listener,
            rawEmitter: this.fsw._emitRaw
          });
        } else {
          closer = setFsWatchListener(path4, absolutePath, options, {
            listener,
            errHandler: this._boundHandleError,
            rawEmitter: this.fsw._emitRaw
          });
        }
        return closer;
      }
      /**
      * Watch a file and emit add event if warranted.
      * @param {Path} file Path
      * @param {fs.Stats} stats result of fs_stat
      * @param {Boolean} initialAdd was the file added at watch instantiation?
      * @returns {Function} closer for the watcher instance
      */
      _handleFile(file, stats, initialAdd) {
        if (this.fsw.closed) {
          return;
        }
        const dirname2 = sysPath.dirname(file);
        const basename = sysPath.basename(file);
        const parent = this.fsw._getWatchedDir(dirname2);
        let prevStats = stats;
        if (parent.has(basename)) return;
        const listener = /* @__PURE__ */ __name((path4, newStats) => __async(this, null, function* () {
          if (!this.fsw._throttle(THROTTLE_MODE_WATCH, file, 5)) return;
          if (!newStats || newStats.mtimeMs === 0) {
            try {
              const newStats2 = yield stat(file);
              if (this.fsw.closed) return;
              const at = newStats2.atimeMs;
              const mt = newStats2.mtimeMs;
              if (!at || at <= mt || mt !== prevStats.mtimeMs) {
                this.fsw._emit(EV_CHANGE, file, newStats2);
              }
              if (isLinux && prevStats.ino !== newStats2.ino) {
                this.fsw._closeFile(path4);
                prevStats = newStats2;
                this.fsw._addPathCloser(path4, this._watchWithNodeFs(file, listener));
              } else {
                prevStats = newStats2;
              }
            } catch (error) {
              this.fsw._remove(dirname2, basename);
            }
          } else if (parent.has(basename)) {
            const at = newStats.atimeMs;
            const mt = newStats.mtimeMs;
            if (!at || at <= mt || mt !== prevStats.mtimeMs) {
              this.fsw._emit(EV_CHANGE, file, newStats);
            }
            prevStats = newStats;
          }
        }), "listener");
        const closer = this._watchWithNodeFs(file, listener);
        if (!(initialAdd && this.fsw.options.ignoreInitial) && this.fsw._isntIgnored(file)) {
          if (!this.fsw._throttle(EV_ADD, file, 0)) return;
          this.fsw._emit(EV_ADD, file, stats);
        }
        return closer;
      }
      /**
      * Handle symlinks encountered while reading a dir.
      * @param {Object} entry returned by readdirp
      * @param {String} directory path of dir being read
      * @param {String} path of this item
      * @param {String} item basename of this item
      * @returns {Promise<Boolean>} true if no more processing is needed for this entry.
      */
      _handleSymlink(entry, directory, path4, item) {
        return __async(this, null, function* () {
          if (this.fsw.closed) {
            return;
          }
          const full = entry.fullPath;
          const dir = this.fsw._getWatchedDir(directory);
          if (!this.fsw.options.followSymlinks) {
            this.fsw._incrReadyCount();
            let linkPath;
            try {
              linkPath = yield fsrealpath(path4);
            } catch (e) {
              this.fsw._emitReady();
              return true;
            }
            if (this.fsw.closed) return;
            if (dir.has(item)) {
              if (this.fsw._symlinkPaths.get(full) !== linkPath) {
                this.fsw._symlinkPaths.set(full, linkPath);
                this.fsw._emit(EV_CHANGE, path4, entry.stats);
              }
            } else {
              dir.add(item);
              this.fsw._symlinkPaths.set(full, linkPath);
              this.fsw._emit(EV_ADD, path4, entry.stats);
            }
            this.fsw._emitReady();
            return true;
          }
          if (this.fsw._symlinkPaths.has(full)) {
            return true;
          }
          this.fsw._symlinkPaths.set(full, true);
        });
      }
      _handleRead(directory, initialAdd, wh, target, dir, depth, throttler) {
        directory = sysPath.join(directory, EMPTY_STR);
        if (!wh.hasGlob) {
          throttler = this.fsw._throttle("readdir", directory, 1e3);
          if (!throttler) return;
        }
        const previous = this.fsw._getWatchedDir(wh.path);
        const current = /* @__PURE__ */ new Set();
        let stream = this.fsw._readdirp(directory, {
          fileFilter: /* @__PURE__ */ __name((entry) => wh.filterPath(entry), "fileFilter"),
          directoryFilter: /* @__PURE__ */ __name((entry) => wh.filterDir(entry), "directoryFilter"),
          depth: 0
        }).on(STR_DATA, (entry) => __async(this, null, function* () {
          if (this.fsw.closed) {
            stream = void 0;
            return;
          }
          const item = entry.path;
          let path4 = sysPath.join(directory, item);
          current.add(item);
          if (entry.stats.isSymbolicLink() && (yield this._handleSymlink(entry, directory, path4, item))) {
            return;
          }
          if (this.fsw.closed) {
            stream = void 0;
            return;
          }
          if (item === target || !target && !previous.has(item)) {
            this.fsw._incrReadyCount();
            path4 = sysPath.join(dir, sysPath.relative(dir, path4));
            this._addToNodeFs(path4, initialAdd, wh, depth + 1);
          }
        })).on(EV_ERROR, this._boundHandleError);
        return new Promise((resolve) => stream.once(STR_END, () => {
          if (this.fsw.closed) {
            stream = void 0;
            return;
          }
          const wasThrottled = throttler ? throttler.clear() : false;
          resolve();
          previous.getChildren().filter((item) => {
            return item !== directory && !current.has(item) && // in case of intersecting globs;
            // a path may have been filtered out of this readdir, but
            // shouldn't be removed because it matches a different glob
            (!wh.hasGlob || wh.filterPath({
              fullPath: sysPath.resolve(directory, item)
            }));
          }).forEach((item) => {
            this.fsw._remove(directory, item);
          });
          stream = void 0;
          if (wasThrottled) this._handleRead(directory, false, wh, target, dir, depth, throttler);
        }));
      }
      /**
      * Read directory to add / remove files from `@watched` list and re-read it on change.
      * @param {String} dir fs path
      * @param {fs.Stats} stats
      * @param {Boolean} initialAdd
      * @param {Number} depth relative to user-supplied path
      * @param {String} target child path targeted for watch
      * @param {Object} wh Common watch helpers for this path
      * @param {String} realpath
      * @returns {Promise<Function>} closer for the watcher instance.
      */
      _handleDir(dir, stats, initialAdd, depth, target, wh, realpath) {
        return __async(this, null, function* () {
          const parentDir = this.fsw._getWatchedDir(sysPath.dirname(dir));
          const tracked = parentDir.has(sysPath.basename(dir));
          if (!(initialAdd && this.fsw.options.ignoreInitial) && !target && !tracked) {
            if (!wh.hasGlob || wh.globFilter(dir)) this.fsw._emit(EV_ADD_DIR, dir, stats);
          }
          parentDir.add(sysPath.basename(dir));
          this.fsw._getWatchedDir(dir);
          let throttler;
          let closer;
          const oDepth = this.fsw.options.depth;
          if ((oDepth == null || depth <= oDepth) && !this.fsw._symlinkPaths.has(realpath)) {
            if (!target) {
              yield this._handleRead(dir, initialAdd, wh, target, dir, depth, throttler);
              if (this.fsw.closed) return;
            }
            closer = this._watchWithNodeFs(dir, (dirPath, stats2) => {
              if (stats2 && stats2.mtimeMs === 0) return;
              this._handleRead(dirPath, false, wh, target, dir, depth, throttler);
            });
          }
          return closer;
        });
      }
      /**
      * Handle added file, directory, or glob pattern.
      * Delegates call to _handleFile / _handleDir after checks.
      * @param {String} path to file or ir
      * @param {Boolean} initialAdd was the file added at watch instantiation?
      * @param {Object} priorWh depth relative to user-supplied path
      * @param {Number} depth Child path actually targeted for watch
      * @param {String=} target Child path actually targeted for watch
      * @returns {Promise}
      */
      _addToNodeFs(path4, initialAdd, priorWh, depth, target) {
        return __async(this, null, function* () {
          const ready = this.fsw._emitReady;
          if (this.fsw._isIgnored(path4) || this.fsw.closed) {
            ready();
            return false;
          }
          const wh = this.fsw._getWatchHelpers(path4, depth);
          if (!wh.hasGlob && priorWh) {
            wh.hasGlob = priorWh.hasGlob;
            wh.globFilter = priorWh.globFilter;
            wh.filterPath = (entry) => priorWh.filterPath(entry);
            wh.filterDir = (entry) => priorWh.filterDir(entry);
          }
          try {
            const stats = yield statMethods[wh.statMethod](wh.watchPath);
            if (this.fsw.closed) return;
            if (this.fsw._isIgnored(wh.watchPath, stats)) {
              ready();
              return false;
            }
            const follow = this.fsw.options.followSymlinks && !path4.includes(STAR) && !path4.includes(BRACE_START);
            let closer;
            if (stats.isDirectory()) {
              const absPath = sysPath.resolve(path4);
              const targetPath = follow ? yield fsrealpath(path4) : path4;
              if (this.fsw.closed) return;
              closer = yield this._handleDir(wh.watchPath, stats, initialAdd, depth, target, wh, targetPath);
              if (this.fsw.closed) return;
              if (absPath !== targetPath && targetPath !== void 0) {
                this.fsw._symlinkPaths.set(absPath, targetPath);
              }
            } else if (stats.isSymbolicLink()) {
              const targetPath = follow ? yield fsrealpath(path4) : path4;
              if (this.fsw.closed) return;
              const parent = sysPath.dirname(wh.watchPath);
              this.fsw._getWatchedDir(parent).add(wh.watchPath);
              this.fsw._emit(EV_ADD, wh.watchPath, stats);
              closer = yield this._handleDir(parent, stats, initialAdd, depth, path4, wh, targetPath);
              if (this.fsw.closed) return;
              if (targetPath !== void 0) {
                this.fsw._symlinkPaths.set(sysPath.resolve(path4), targetPath);
              }
            } else {
              closer = this._handleFile(wh.watchPath, stats, initialAdd);
            }
            ready();
            this.fsw._addPathCloser(path4, closer);
            return false;
          } catch (error) {
            if (this.fsw._handleError(error)) {
              ready();
              return path4;
            }
          }
        });
      }
    }, __name(_a, "NodeFsHandler"), _a);
    module.exports = NodeFsHandler;
  }
});

// node_modules/fsevents/fsevents.node
var fsevents_default;
var init_fsevents = __esm({
  "node_modules/fsevents/fsevents.node"() {
    fsevents_default = "./fsevents-X6WP4TKM.node";
  }
});

// node-file:/Users/magicdreamer/Documents/Coding/Compill/Valerya/libs/cli/node_modules/fsevents/fsevents.node
var require_fsevents = __commonJS({
  "node-file:/Users/magicdreamer/Documents/Coding/Compill/Valerya/libs/cli/node_modules/fsevents/fsevents.node"(exports, module) {
    "use strict";
    init_fsevents();
    try {
      module.exports = __require(fsevents_default);
    } catch (e) {
    }
  }
});

// node_modules/fsevents/fsevents.js
var require_fsevents2 = __commonJS({
  "node_modules/fsevents/fsevents.js"(exports) {
    "use strict";
    if (process.platform !== "darwin") {
      throw new Error(`Module 'fsevents' is not compatible with platform '${process.platform}'`);
    }
    var Native = require_fsevents();
    var events = Native.constants;
    function watch(path4, since, handler) {
      if (typeof path4 !== "string") {
        throw new TypeError(`fsevents argument 1 must be a string and not a ${typeof path4}`);
      }
      if ("function" === typeof since && "undefined" === typeof handler) {
        handler = since;
        since = Native.flags.SinceNow;
      }
      if (typeof since !== "number") {
        throw new TypeError(`fsevents argument 2 must be a number and not a ${typeof since}`);
      }
      if (typeof handler !== "function") {
        throw new TypeError(`fsevents argument 3 must be a function and not a ${typeof handler}`);
      }
      let instance = Native.start(Native.global, path4, since, handler);
      if (!instance) throw new Error(`could not watch: ${path4}`);
      return () => {
        const result = instance ? Promise.resolve(instance).then(Native.stop) : Promise.resolve(void 0);
        instance = void 0;
        return result;
      };
    }
    __name(watch, "watch");
    function getInfo(path4, flags) {
      return {
        path: path4,
        flags,
        event: getEventType(flags),
        type: getFileType(flags),
        changes: getFileChanges(flags)
      };
    }
    __name(getInfo, "getInfo");
    function getFileType(flags) {
      if (events.ItemIsFile & flags) return "file";
      if (events.ItemIsDir & flags) return "directory";
      if (events.MustScanSubDirs & flags) return "directory";
      if (events.ItemIsSymlink & flags) return "symlink";
    }
    __name(getFileType, "getFileType");
    function anyIsTrue(obj) {
      for (let key in obj) {
        if (obj[key]) return true;
      }
      return false;
    }
    __name(anyIsTrue, "anyIsTrue");
    function getEventType(flags) {
      if (events.ItemRemoved & flags) return "deleted";
      if (events.ItemRenamed & flags) return "moved";
      if (events.ItemCreated & flags) return "created";
      if (events.ItemModified & flags) return "modified";
      if (events.RootChanged & flags) return "root-changed";
      if (events.ItemCloned & flags) return "cloned";
      if (anyIsTrue(flags)) return "modified";
      return "unknown";
    }
    __name(getEventType, "getEventType");
    function getFileChanges(flags) {
      return {
        inode: !!(events.ItemInodeMetaMod & flags),
        finder: !!(events.ItemFinderInfoMod & flags),
        access: !!(events.ItemChangeOwner & flags),
        xattrs: !!(events.ItemXattrMod & flags)
      };
    }
    __name(getFileChanges, "getFileChanges");
    exports.watch = watch;
    exports.getInfo = getInfo;
    exports.constants = events;
  }
});

// node_modules/chokidar/lib/fsevents-handler.js
var require_fsevents_handler = __commonJS({
  "node_modules/chokidar/lib/fsevents-handler.js"(exports, module) {
    "use strict";
    var fs2 = __require("fs");
    var sysPath = __require("path");
    var { promisify: promisify3 } = __require("util");
    var fsevents;
    try {
      fsevents = require_fsevents2();
    } catch (error) {
      if (process.env.CHOKIDAR_PRINT_FSEVENTS_REQUIRE_ERROR) console.error(error);
    }
    if (fsevents) {
      const mtch = process.version.match(/v(\d+)\.(\d+)/);
      if (mtch && mtch[1] && mtch[2]) {
        const maj = Number.parseInt(mtch[1], 10);
        const min = Number.parseInt(mtch[2], 10);
        if (maj === 8 && min < 16) {
          fsevents = void 0;
        }
      }
    }
    var {
      EV_ADD,
      EV_CHANGE,
      EV_ADD_DIR,
      EV_UNLINK,
      EV_ERROR,
      STR_DATA,
      STR_END,
      FSEVENT_CREATED,
      FSEVENT_MODIFIED,
      FSEVENT_DELETED,
      FSEVENT_MOVED,
      // FSEVENT_CLONED,
      FSEVENT_UNKNOWN,
      FSEVENT_FLAG_MUST_SCAN_SUBDIRS,
      FSEVENT_TYPE_FILE,
      FSEVENT_TYPE_DIRECTORY,
      FSEVENT_TYPE_SYMLINK,
      ROOT_GLOBSTAR,
      DIR_SUFFIX,
      DOT_SLASH,
      FUNCTION_TYPE,
      EMPTY_FN,
      IDENTITY_FN
    } = require_constants3();
    var Depth = /* @__PURE__ */ __name((value) => isNaN(value) ? {} : {
      depth: value
    }, "Depth");
    var stat = promisify3(fs2.stat);
    var lstat = promisify3(fs2.lstat);
    var realpath = promisify3(fs2.realpath);
    var statMethods = {
      stat,
      lstat
    };
    var FSEventsWatchers = /* @__PURE__ */ new Map();
    var consolidateThreshhold = 10;
    var wrongEventFlags = /* @__PURE__ */ new Set([
      69888,
      70400,
      71424,
      72704,
      73472,
      131328,
      131840,
      262912
    ]);
    var createFSEventsInstance = /* @__PURE__ */ __name((path4, callback) => {
      const stop = fsevents.watch(path4, callback);
      return {
        stop
      };
    }, "createFSEventsInstance");
    function setFSEventsListener(path4, realPath, listener, rawEmitter) {
      let watchPath = sysPath.extname(realPath) ? sysPath.dirname(realPath) : realPath;
      const parentPath = sysPath.dirname(watchPath);
      let cont = FSEventsWatchers.get(watchPath);
      if (couldConsolidate(parentPath)) {
        watchPath = parentPath;
      }
      const resolvedPath = sysPath.resolve(path4);
      const hasSymlink = resolvedPath !== realPath;
      const filteredListener = /* @__PURE__ */ __name((fullPath, flags, info) => {
        if (hasSymlink) fullPath = fullPath.replace(realPath, resolvedPath);
        if (fullPath === resolvedPath || !fullPath.indexOf(resolvedPath + sysPath.sep)) listener(fullPath, flags, info);
      }, "filteredListener");
      let watchedParent = false;
      for (const watchedPath of FSEventsWatchers.keys()) {
        if (realPath.indexOf(sysPath.resolve(watchedPath) + sysPath.sep) === 0) {
          watchPath = watchedPath;
          cont = FSEventsWatchers.get(watchPath);
          watchedParent = true;
          break;
        }
      }
      if (cont || watchedParent) {
        cont.listeners.add(filteredListener);
      } else {
        cont = {
          listeners: /* @__PURE__ */ new Set([
            filteredListener
          ]),
          rawEmitter,
          watcher: createFSEventsInstance(watchPath, (fullPath, flags) => {
            if (!cont.listeners.size) return;
            if (flags & FSEVENT_FLAG_MUST_SCAN_SUBDIRS) return;
            const info = fsevents.getInfo(fullPath, flags);
            cont.listeners.forEach((list) => {
              list(fullPath, flags, info);
            });
            cont.rawEmitter(info.event, fullPath, info);
          })
        };
        FSEventsWatchers.set(watchPath, cont);
      }
      return () => {
        const lst = cont.listeners;
        lst.delete(filteredListener);
        if (!lst.size) {
          FSEventsWatchers.delete(watchPath);
          if (cont.watcher) return cont.watcher.stop().then(() => {
            cont.rawEmitter = cont.watcher = void 0;
            Object.freeze(cont);
          });
        }
      };
    }
    __name(setFSEventsListener, "setFSEventsListener");
    var couldConsolidate = /* @__PURE__ */ __name((path4) => {
      let count = 0;
      for (const watchPath of FSEventsWatchers.keys()) {
        if (watchPath.indexOf(path4) === 0) {
          count++;
          if (count >= consolidateThreshhold) {
            return true;
          }
        }
      }
      return false;
    }, "couldConsolidate");
    var canUse = /* @__PURE__ */ __name(() => fsevents && FSEventsWatchers.size < 128, "canUse");
    var calcDepth = /* @__PURE__ */ __name((path4, root) => {
      let i = 0;
      while (!path4.indexOf(root) && (path4 = sysPath.dirname(path4)) !== root) i++;
      return i;
    }, "calcDepth");
    var sameTypes = /* @__PURE__ */ __name((info, stats) => info.type === FSEVENT_TYPE_DIRECTORY && stats.isDirectory() || info.type === FSEVENT_TYPE_SYMLINK && stats.isSymbolicLink() || info.type === FSEVENT_TYPE_FILE && stats.isFile(), "sameTypes");
    var _a;
    var FsEventsHandler = (_a = class {
      /**
      * @param {import('../index').FSWatcher} fsw
      */
      constructor(fsw) {
        this.fsw = fsw;
      }
      checkIgnored(path4, stats) {
        const ipaths = this.fsw._ignoredPaths;
        if (this.fsw._isIgnored(path4, stats)) {
          ipaths.add(path4);
          if (stats && stats.isDirectory()) {
            ipaths.add(path4 + ROOT_GLOBSTAR);
          }
          return true;
        }
        ipaths.delete(path4);
        ipaths.delete(path4 + ROOT_GLOBSTAR);
      }
      addOrChange(path4, fullPath, realPath, parent, watchedDir, item, info, opts) {
        const event = watchedDir.has(item) ? EV_CHANGE : EV_ADD;
        this.handleEvent(event, path4, fullPath, realPath, parent, watchedDir, item, info, opts);
      }
      checkExists(path4, fullPath, realPath, parent, watchedDir, item, info, opts) {
        return __async(this, null, function* () {
          try {
            const stats = yield stat(path4);
            if (this.fsw.closed) return;
            if (sameTypes(info, stats)) {
              this.addOrChange(path4, fullPath, realPath, parent, watchedDir, item, info, opts);
            } else {
              this.handleEvent(EV_UNLINK, path4, fullPath, realPath, parent, watchedDir, item, info, opts);
            }
          } catch (error) {
            if (error.code === "EACCES") {
              this.addOrChange(path4, fullPath, realPath, parent, watchedDir, item, info, opts);
            } else {
              this.handleEvent(EV_UNLINK, path4, fullPath, realPath, parent, watchedDir, item, info, opts);
            }
          }
        });
      }
      handleEvent(event, path4, fullPath, realPath, parent, watchedDir, item, info, opts) {
        if (this.fsw.closed || this.checkIgnored(path4)) return;
        if (event === EV_UNLINK) {
          const isDirectory = info.type === FSEVENT_TYPE_DIRECTORY;
          if (isDirectory || watchedDir.has(item)) {
            this.fsw._remove(parent, item, isDirectory);
          }
        } else {
          if (event === EV_ADD) {
            if (info.type === FSEVENT_TYPE_DIRECTORY) this.fsw._getWatchedDir(path4);
            if (info.type === FSEVENT_TYPE_SYMLINK && opts.followSymlinks) {
              const curDepth = opts.depth === void 0 ? void 0 : calcDepth(fullPath, realPath) + 1;
              return this._addToFsEvents(path4, false, true, curDepth);
            }
            this.fsw._getWatchedDir(parent).add(item);
          }
          const eventName = info.type === FSEVENT_TYPE_DIRECTORY ? event + DIR_SUFFIX : event;
          this.fsw._emit(eventName, path4);
          if (eventName === EV_ADD_DIR) this._addToFsEvents(path4, false, true);
        }
      }
      /**
       * Handle symlinks encountered during directory scan
       * @param {String} watchPath  - file/dir path to be watched with fsevents
       * @param {String} realPath   - real path (in case of symlinks)
       * @param {Function} transform  - path transformer
       * @param {Function} globFilter - path filter in case a glob pattern was provided
       * @returns {Function} closer for the watcher instance
      */
      _watchWithFsEvents(watchPath, realPath, transform, globFilter) {
        if (this.fsw.closed || this.fsw._isIgnored(watchPath)) return;
        const opts = this.fsw.options;
        const watchCallback = /* @__PURE__ */ __name((fullPath, flags, info) => __async(this, null, function* () {
          if (this.fsw.closed) return;
          if (opts.depth !== void 0 && calcDepth(fullPath, realPath) > opts.depth) return;
          const path4 = transform(sysPath.join(watchPath, sysPath.relative(watchPath, fullPath)));
          if (globFilter && !globFilter(path4)) return;
          const parent = sysPath.dirname(path4);
          const item = sysPath.basename(path4);
          const watchedDir = this.fsw._getWatchedDir(info.type === FSEVENT_TYPE_DIRECTORY ? path4 : parent);
          if (wrongEventFlags.has(flags) || info.event === FSEVENT_UNKNOWN) {
            if (typeof opts.ignored === FUNCTION_TYPE) {
              let stats;
              try {
                stats = yield stat(path4);
              } catch (error) {
              }
              if (this.fsw.closed) return;
              if (this.checkIgnored(path4, stats)) return;
              if (sameTypes(info, stats)) {
                this.addOrChange(path4, fullPath, realPath, parent, watchedDir, item, info, opts);
              } else {
                this.handleEvent(EV_UNLINK, path4, fullPath, realPath, parent, watchedDir, item, info, opts);
              }
            } else {
              this.checkExists(path4, fullPath, realPath, parent, watchedDir, item, info, opts);
            }
          } else {
            switch (info.event) {
              case FSEVENT_CREATED:
              case FSEVENT_MODIFIED:
                return this.addOrChange(path4, fullPath, realPath, parent, watchedDir, item, info, opts);
              case FSEVENT_DELETED:
              case FSEVENT_MOVED:
                return this.checkExists(path4, fullPath, realPath, parent, watchedDir, item, info, opts);
            }
          }
        }), "watchCallback");
        const closer = setFSEventsListener(watchPath, realPath, watchCallback, this.fsw._emitRaw);
        this.fsw._emitReady();
        return closer;
      }
      /**
      * Handle symlinks encountered during directory scan
      * @param {String} linkPath path to symlink
      * @param {String} fullPath absolute path to the symlink
      * @param {Function} transform pre-existing path transformer
      * @param {Number} curDepth level of subdirectories traversed to where symlink is
      * @returns {Promise<void>}
      */
      _handleFsEventsSymlink(linkPath, fullPath, transform, curDepth) {
        return __async(this, null, function* () {
          if (this.fsw.closed || this.fsw._symlinkPaths.has(fullPath)) return;
          this.fsw._symlinkPaths.set(fullPath, true);
          this.fsw._incrReadyCount();
          try {
            const linkTarget = yield realpath(linkPath);
            if (this.fsw.closed) return;
            if (this.fsw._isIgnored(linkTarget)) {
              return this.fsw._emitReady();
            }
            this.fsw._incrReadyCount();
            this._addToFsEvents(linkTarget || linkPath, (path4) => {
              let aliasedPath = linkPath;
              if (linkTarget && linkTarget !== DOT_SLASH) {
                aliasedPath = path4.replace(linkTarget, linkPath);
              } else if (path4 !== DOT_SLASH) {
                aliasedPath = sysPath.join(linkPath, path4);
              }
              return transform(aliasedPath);
            }, false, curDepth);
          } catch (error) {
            if (this.fsw._handleError(error)) {
              return this.fsw._emitReady();
            }
          }
        });
      }
      /**
      *
      * @param {Path} newPath
      * @param {fs.Stats} stats
      */
      emitAdd(newPath, stats, processPath, opts, forceAdd) {
        const pp = processPath(newPath);
        const isDir = stats.isDirectory();
        const dirObj = this.fsw._getWatchedDir(sysPath.dirname(pp));
        const base = sysPath.basename(pp);
        if (isDir) this.fsw._getWatchedDir(pp);
        if (dirObj.has(base)) return;
        dirObj.add(base);
        if (!opts.ignoreInitial || forceAdd === true) {
          this.fsw._emit(isDir ? EV_ADD_DIR : EV_ADD, pp, stats);
        }
      }
      initWatch(realPath, path4, wh, processPath) {
        if (this.fsw.closed) return;
        const closer = this._watchWithFsEvents(wh.watchPath, sysPath.resolve(realPath || wh.watchPath), processPath, wh.globFilter);
        this.fsw._addPathCloser(path4, closer);
      }
      /**
      * Handle added path with fsevents
      * @param {String} path file/dir path or glob pattern
      * @param {Function|Boolean=} transform converts working path to what the user expects
      * @param {Boolean=} forceAdd ensure add is emitted
      * @param {Number=} priorDepth Level of subdirectories already traversed.
      * @returns {Promise<void>}
      */
      _addToFsEvents(path4, transform, forceAdd, priorDepth) {
        return __async(this, null, function* () {
          if (this.fsw.closed) {
            return;
          }
          const opts = this.fsw.options;
          const processPath = typeof transform === FUNCTION_TYPE ? transform : IDENTITY_FN;
          const wh = this.fsw._getWatchHelpers(path4);
          try {
            const stats = yield statMethods[wh.statMethod](wh.watchPath);
            if (this.fsw.closed) return;
            if (this.fsw._isIgnored(wh.watchPath, stats)) {
              throw null;
            }
            if (stats.isDirectory()) {
              if (!wh.globFilter) this.emitAdd(processPath(path4), stats, processPath, opts, forceAdd);
              if (priorDepth && priorDepth > opts.depth) return;
              this.fsw._readdirp(wh.watchPath, __spreadValues({
                fileFilter: /* @__PURE__ */ __name((entry) => wh.filterPath(entry), "fileFilter"),
                directoryFilter: /* @__PURE__ */ __name((entry) => wh.filterDir(entry), "directoryFilter")
              }, Depth(opts.depth - (priorDepth || 0)))).on(STR_DATA, (entry) => {
                if (this.fsw.closed) {
                  return;
                }
                if (entry.stats.isDirectory() && !wh.filterPath(entry)) return;
                const joinedPath = sysPath.join(wh.watchPath, entry.path);
                const { fullPath } = entry;
                if (wh.followSymlinks && entry.stats.isSymbolicLink()) {
                  const curDepth = opts.depth === void 0 ? void 0 : calcDepth(joinedPath, sysPath.resolve(wh.watchPath)) + 1;
                  this._handleFsEventsSymlink(joinedPath, fullPath, processPath, curDepth);
                } else {
                  this.emitAdd(joinedPath, entry.stats, processPath, opts, forceAdd);
                }
              }).on(EV_ERROR, EMPTY_FN).on(STR_END, () => {
                this.fsw._emitReady();
              });
            } else {
              this.emitAdd(wh.watchPath, stats, processPath, opts, forceAdd);
              this.fsw._emitReady();
            }
          } catch (error) {
            if (!error || this.fsw._handleError(error)) {
              this.fsw._emitReady();
              this.fsw._emitReady();
            }
          }
          if (opts.persistent && forceAdd !== true) {
            if (typeof transform === FUNCTION_TYPE) {
              this.initWatch(void 0, path4, wh, processPath);
            } else {
              let realPath;
              try {
                realPath = yield realpath(wh.watchPath);
              } catch (e) {
              }
              this.initWatch(realPath, path4, wh, processPath);
            }
          }
        });
      }
    }, __name(_a, "FsEventsHandler"), _a);
    module.exports = FsEventsHandler;
    module.exports.canUse = canUse;
  }
});

// node_modules/chokidar/index.js
var require_chokidar = __commonJS({
  "node_modules/chokidar/index.js"(exports) {
    "use strict";
    var { EventEmitter } = __require("events");
    var fs2 = __require("fs");
    var sysPath = __require("path");
    var { promisify: promisify3 } = __require("util");
    var readdirp = require_readdirp();
    var anymatch = require_anymatch().default;
    var globParent = require_glob_parent();
    var isGlob = require_is_glob();
    var braces = require_braces();
    var normalizePath = require_normalize_path();
    var NodeFsHandler = require_nodefs_handler();
    var FsEventsHandler = require_fsevents_handler();
    var { EV_ALL, EV_READY, EV_ADD, EV_CHANGE, EV_UNLINK, EV_ADD_DIR, EV_UNLINK_DIR, EV_RAW, EV_ERROR, STR_CLOSE, STR_END, BACK_SLASH_RE, DOUBLE_SLASH_RE, SLASH_OR_BACK_SLASH_RE, DOT_RE, REPLACER_RE, SLASH, SLASH_SLASH, BRACE_START, BANG, ONE_DOT, TWO_DOTS, GLOBSTAR, SLASH_GLOBSTAR, ANYMATCH_OPTS, STRING_TYPE, FUNCTION_TYPE, EMPTY_STR, EMPTY_FN, isWindows, isMacos, isIBMi } = require_constants3();
    var stat = promisify3(fs2.stat);
    var readdir = promisify3(fs2.readdir);
    var arrify = /* @__PURE__ */ __name((value = []) => Array.isArray(value) ? value : [
      value
    ], "arrify");
    var flatten = /* @__PURE__ */ __name((list, result = []) => {
      list.forEach((item) => {
        if (Array.isArray(item)) {
          flatten(item, result);
        } else {
          result.push(item);
        }
      });
      return result;
    }, "flatten");
    var unifyPaths = /* @__PURE__ */ __name((paths_) => {
      const paths = flatten(arrify(paths_));
      if (!paths.every((p) => typeof p === STRING_TYPE)) {
        throw new TypeError(`Non-string provided as watch path: ${paths}`);
      }
      return paths.map(normalizePathToUnix);
    }, "unifyPaths");
    var toUnix = /* @__PURE__ */ __name((string) => {
      let str = string.replace(BACK_SLASH_RE, SLASH);
      let prepend = false;
      if (str.startsWith(SLASH_SLASH)) {
        prepend = true;
      }
      while (str.match(DOUBLE_SLASH_RE)) {
        str = str.replace(DOUBLE_SLASH_RE, SLASH);
      }
      if (prepend) {
        str = SLASH + str;
      }
      return str;
    }, "toUnix");
    var normalizePathToUnix = /* @__PURE__ */ __name((path4) => toUnix(sysPath.normalize(toUnix(path4))), "normalizePathToUnix");
    var normalizeIgnored = /* @__PURE__ */ __name((cwd = EMPTY_STR) => (path4) => {
      if (typeof path4 !== STRING_TYPE) return path4;
      return normalizePathToUnix(sysPath.isAbsolute(path4) ? path4 : sysPath.join(cwd, path4));
    }, "normalizeIgnored");
    var getAbsolutePath = /* @__PURE__ */ __name((path4, cwd) => {
      if (sysPath.isAbsolute(path4)) {
        return path4;
      }
      if (path4.startsWith(BANG)) {
        return BANG + sysPath.join(cwd, path4.slice(1));
      }
      return sysPath.join(cwd, path4);
    }, "getAbsolutePath");
    var undef = /* @__PURE__ */ __name((opts, key) => opts[key] === void 0, "undef");
    var _a;
    var DirEntry = (_a = class {
      /**
      * @param {Path} dir
      * @param {Function} removeWatcher
      */
      constructor(dir, removeWatcher) {
        this.path = dir;
        this._removeWatcher = removeWatcher;
        this.items = /* @__PURE__ */ new Set();
      }
      add(item) {
        const { items } = this;
        if (!items) return;
        if (item !== ONE_DOT && item !== TWO_DOTS) items.add(item);
      }
      remove(item) {
        return __async(this, null, function* () {
          const { items } = this;
          if (!items) return;
          items.delete(item);
          if (items.size > 0) return;
          const dir = this.path;
          try {
            yield readdir(dir);
          } catch (err) {
            if (this._removeWatcher) {
              this._removeWatcher(sysPath.dirname(dir), sysPath.basename(dir));
            }
          }
        });
      }
      has(item) {
        const { items } = this;
        if (!items) return;
        return items.has(item);
      }
      /**
      * @returns {Array<String>}
      */
      getChildren() {
        const { items } = this;
        if (!items) return;
        return [
          ...items.values()
        ];
      }
      dispose() {
        this.items.clear();
        delete this.path;
        delete this._removeWatcher;
        delete this.items;
        Object.freeze(this);
      }
    }, __name(_a, "DirEntry"), _a);
    var STAT_METHOD_F = "stat";
    var STAT_METHOD_L = "lstat";
    var _a2;
    var WatchHelper = (_a2 = class {
      constructor(path4, watchPath, follow, fsw) {
        this.fsw = fsw;
        this.path = path4 = path4.replace(REPLACER_RE, EMPTY_STR);
        this.watchPath = watchPath;
        this.fullWatchPath = sysPath.resolve(watchPath);
        this.hasGlob = watchPath !== path4;
        if (path4 === EMPTY_STR) this.hasGlob = false;
        this.globSymlink = this.hasGlob && follow ? void 0 : false;
        this.globFilter = this.hasGlob ? anymatch(path4, void 0, ANYMATCH_OPTS) : false;
        this.dirParts = this.getDirParts(path4);
        this.dirParts.forEach((parts) => {
          if (parts.length > 1) parts.pop();
        });
        this.followSymlinks = follow;
        this.statMethod = follow ? STAT_METHOD_F : STAT_METHOD_L;
      }
      checkGlobSymlink(entry) {
        if (this.globSymlink === void 0) {
          this.globSymlink = entry.fullParentDir === this.fullWatchPath ? false : {
            realPath: entry.fullParentDir,
            linkPath: this.fullWatchPath
          };
        }
        if (this.globSymlink) {
          return entry.fullPath.replace(this.globSymlink.realPath, this.globSymlink.linkPath);
        }
        return entry.fullPath;
      }
      entryPath(entry) {
        return sysPath.join(this.watchPath, sysPath.relative(this.watchPath, this.checkGlobSymlink(entry)));
      }
      filterPath(entry) {
        const { stats } = entry;
        if (stats && stats.isSymbolicLink()) return this.filterDir(entry);
        const resolvedPath = this.entryPath(entry);
        const matchesGlob = this.hasGlob && typeof this.globFilter === FUNCTION_TYPE ? this.globFilter(resolvedPath) : true;
        return matchesGlob && this.fsw._isntIgnored(resolvedPath, stats) && this.fsw._hasReadPermissions(stats);
      }
      getDirParts(path4) {
        if (!this.hasGlob) return [];
        const parts = [];
        const expandedPath = path4.includes(BRACE_START) ? braces.expand(path4) : [
          path4
        ];
        expandedPath.forEach((path5) => {
          parts.push(sysPath.relative(this.watchPath, path5).split(SLASH_OR_BACK_SLASH_RE));
        });
        return parts;
      }
      filterDir(entry) {
        if (this.hasGlob) {
          const entryParts = this.getDirParts(this.checkGlobSymlink(entry));
          let globstar = false;
          this.unmatchedGlob = !this.dirParts.some((parts) => {
            return parts.every((part, i) => {
              if (part === GLOBSTAR) globstar = true;
              return globstar || !entryParts[0][i] || anymatch(part, entryParts[0][i], ANYMATCH_OPTS);
            });
          });
        }
        return !this.unmatchedGlob && this.fsw._isntIgnored(this.entryPath(entry), entry.stats);
      }
    }, __name(_a2, "WatchHelper"), _a2);
    var _a3;
    var FSWatcher = (_a3 = class extends EventEmitter {
      // Not indenting methods for history sake; for now.
      constructor(_opts) {
        super();
        const opts = {};
        if (_opts) Object.assign(opts, _opts);
        this._watched = /* @__PURE__ */ new Map();
        this._closers = /* @__PURE__ */ new Map();
        this._ignoredPaths = /* @__PURE__ */ new Set();
        this._throttled = /* @__PURE__ */ new Map();
        this._symlinkPaths = /* @__PURE__ */ new Map();
        this._streams = /* @__PURE__ */ new Set();
        this.closed = false;
        if (undef(opts, "persistent")) opts.persistent = true;
        if (undef(opts, "ignoreInitial")) opts.ignoreInitial = false;
        if (undef(opts, "ignorePermissionErrors")) opts.ignorePermissionErrors = false;
        if (undef(opts, "interval")) opts.interval = 100;
        if (undef(opts, "binaryInterval")) opts.binaryInterval = 300;
        if (undef(opts, "disableGlobbing")) opts.disableGlobbing = false;
        opts.enableBinaryInterval = opts.binaryInterval !== opts.interval;
        if (undef(opts, "useFsEvents")) opts.useFsEvents = !opts.usePolling;
        const canUseFsEvents = FsEventsHandler.canUse();
        if (!canUseFsEvents) opts.useFsEvents = false;
        if (undef(opts, "usePolling") && !opts.useFsEvents) {
          opts.usePolling = isMacos;
        }
        if (isIBMi) {
          opts.usePolling = true;
        }
        const envPoll = process.env.CHOKIDAR_USEPOLLING;
        if (envPoll !== void 0) {
          const envLower = envPoll.toLowerCase();
          if (envLower === "false" || envLower === "0") {
            opts.usePolling = false;
          } else if (envLower === "true" || envLower === "1") {
            opts.usePolling = true;
          } else {
            opts.usePolling = !!envLower;
          }
        }
        const envInterval = process.env.CHOKIDAR_INTERVAL;
        if (envInterval) {
          opts.interval = Number.parseInt(envInterval, 10);
        }
        if (undef(opts, "atomic")) opts.atomic = !opts.usePolling && !opts.useFsEvents;
        if (opts.atomic) this._pendingUnlinks = /* @__PURE__ */ new Map();
        if (undef(opts, "followSymlinks")) opts.followSymlinks = true;
        if (undef(opts, "awaitWriteFinish")) opts.awaitWriteFinish = false;
        if (opts.awaitWriteFinish === true) opts.awaitWriteFinish = {};
        const awf = opts.awaitWriteFinish;
        if (awf) {
          if (!awf.stabilityThreshold) awf.stabilityThreshold = 2e3;
          if (!awf.pollInterval) awf.pollInterval = 100;
          this._pendingWrites = /* @__PURE__ */ new Map();
        }
        if (opts.ignored) opts.ignored = arrify(opts.ignored);
        let readyCalls = 0;
        this._emitReady = () => {
          readyCalls++;
          if (readyCalls >= this._readyCount) {
            this._emitReady = EMPTY_FN;
            this._readyEmitted = true;
            process.nextTick(() => this.emit(EV_READY));
          }
        };
        this._emitRaw = (...args) => this.emit(EV_RAW, ...args);
        this._readyEmitted = false;
        this.options = opts;
        if (opts.useFsEvents) {
          this._fsEventsHandler = new FsEventsHandler(this);
        } else {
          this._nodeFsHandler = new NodeFsHandler(this);
        }
        Object.freeze(opts);
      }
      // Public methods
      /**
      * Adds paths to be watched on an existing FSWatcher instance
      * @param {Path|Array<Path>} paths_
      * @param {String=} _origAdd private; for handling non-existent paths to be watched
      * @param {Boolean=} _internal private; indicates a non-user add
      * @returns {FSWatcher} for chaining
      */
      add(paths_, _origAdd, _internal) {
        const { cwd, disableGlobbing } = this.options;
        this.closed = false;
        let paths = unifyPaths(paths_);
        if (cwd) {
          paths = paths.map((path4) => {
            const absPath = getAbsolutePath(path4, cwd);
            if (disableGlobbing || !isGlob(path4)) {
              return absPath;
            }
            return normalizePath(absPath);
          });
        }
        paths = paths.filter((path4) => {
          if (path4.startsWith(BANG)) {
            this._ignoredPaths.add(path4.slice(1));
            return false;
          }
          this._ignoredPaths.delete(path4);
          this._ignoredPaths.delete(path4 + SLASH_GLOBSTAR);
          this._userIgnored = void 0;
          return true;
        });
        if (this.options.useFsEvents && this._fsEventsHandler) {
          if (!this._readyCount) this._readyCount = paths.length;
          if (this.options.persistent) this._readyCount += paths.length;
          paths.forEach((path4) => this._fsEventsHandler._addToFsEvents(path4));
        } else {
          if (!this._readyCount) this._readyCount = 0;
          this._readyCount += paths.length;
          Promise.all(paths.map((path4) => __async(this, null, function* () {
            const res = yield this._nodeFsHandler._addToNodeFs(path4, !_internal, 0, 0, _origAdd);
            if (res) this._emitReady();
            return res;
          }))).then((results) => {
            if (this.closed) return;
            results.filter((item) => item).forEach((item) => {
              this.add(sysPath.dirname(item), sysPath.basename(_origAdd || item));
            });
          });
        }
        return this;
      }
      /**
       * Close watchers or start ignoring events from specified paths.
       * @param {Path|Array<Path>} paths_ - string or array of strings, file/directory paths and/or globs
       * @returns {FSWatcher} for chaining
      */
      unwatch(paths_) {
        if (this.closed) return this;
        const paths = unifyPaths(paths_);
        const { cwd } = this.options;
        paths.forEach((path4) => {
          if (!sysPath.isAbsolute(path4) && !this._closers.has(path4)) {
            if (cwd) path4 = sysPath.join(cwd, path4);
            path4 = sysPath.resolve(path4);
          }
          this._closePath(path4);
          this._ignoredPaths.add(path4);
          if (this._watched.has(path4)) {
            this._ignoredPaths.add(path4 + SLASH_GLOBSTAR);
          }
          this._userIgnored = void 0;
        });
        return this;
      }
      /**
       * Close watchers and remove all listeners from watched paths.
       * @returns {Promise<void>}.
      */
      close() {
        if (this.closed) return this._closePromise;
        this.closed = true;
        this.removeAllListeners();
        const closers = [];
        this._closers.forEach((closerList) => closerList.forEach((closer) => {
          const promise = closer();
          if (promise instanceof Promise) closers.push(promise);
        }));
        this._streams.forEach((stream) => stream.destroy());
        this._userIgnored = void 0;
        this._readyCount = 0;
        this._readyEmitted = false;
        this._watched.forEach((dirent) => dirent.dispose());
        [
          "closers",
          "watched",
          "streams",
          "symlinkPaths",
          "throttled"
        ].forEach((key) => {
          this[`_${key}`].clear();
        });
        this._closePromise = closers.length ? Promise.all(closers).then(() => void 0) : Promise.resolve();
        return this._closePromise;
      }
      /**
       * Expose list of watched paths
       * @returns {Object} for chaining
      */
      getWatched() {
        const watchList = {};
        this._watched.forEach((entry, dir) => {
          const key = this.options.cwd ? sysPath.relative(this.options.cwd, dir) : dir;
          watchList[key || ONE_DOT] = entry.getChildren().sort();
        });
        return watchList;
      }
      emitWithAll(event, args) {
        this.emit(...args);
        if (event !== EV_ERROR) this.emit(EV_ALL, ...args);
      }
      // Common helpers
      // --------------
      /**
      * Normalize and emit events.
      * Calling _emit DOES NOT MEAN emit() would be called!
      * @param {EventName} event Type of event
      * @param {Path} path File or directory path
      * @param {*=} val1 arguments to be passed with event
      * @param {*=} val2
      * @param {*=} val3
      * @returns the error if defined, otherwise the value of the FSWatcher instance's `closed` flag
      */
      _emit(event, path4, val1, val2, val3) {
        return __async(this, null, function* () {
          if (this.closed) return;
          const opts = this.options;
          if (isWindows) path4 = sysPath.normalize(path4);
          if (opts.cwd) path4 = sysPath.relative(opts.cwd, path4);
          const args = [
            event,
            path4
          ];
          if (val3 !== void 0) args.push(val1, val2, val3);
          else if (val2 !== void 0) args.push(val1, val2);
          else if (val1 !== void 0) args.push(val1);
          const awf = opts.awaitWriteFinish;
          let pw;
          if (awf && (pw = this._pendingWrites.get(path4))) {
            pw.lastChange = /* @__PURE__ */ new Date();
            return this;
          }
          if (opts.atomic) {
            if (event === EV_UNLINK) {
              this._pendingUnlinks.set(path4, args);
              setTimeout(() => {
                this._pendingUnlinks.forEach((entry, path5) => {
                  this.emit(...entry);
                  this.emit(EV_ALL, ...entry);
                  this._pendingUnlinks.delete(path5);
                });
              }, typeof opts.atomic === "number" ? opts.atomic : 100);
              return this;
            }
            if (event === EV_ADD && this._pendingUnlinks.has(path4)) {
              event = args[0] = EV_CHANGE;
              this._pendingUnlinks.delete(path4);
            }
          }
          if (awf && (event === EV_ADD || event === EV_CHANGE) && this._readyEmitted) {
            const awfEmit = /* @__PURE__ */ __name((err, stats) => {
              if (err) {
                event = args[0] = EV_ERROR;
                args[1] = err;
                this.emitWithAll(event, args);
              } else if (stats) {
                if (args.length > 2) {
                  args[2] = stats;
                } else {
                  args.push(stats);
                }
                this.emitWithAll(event, args);
              }
            }, "awfEmit");
            this._awaitWriteFinish(path4, awf.stabilityThreshold, event, awfEmit);
            return this;
          }
          if (event === EV_CHANGE) {
            const isThrottled = !this._throttle(EV_CHANGE, path4, 50);
            if (isThrottled) return this;
          }
          if (opts.alwaysStat && val1 === void 0 && (event === EV_ADD || event === EV_ADD_DIR || event === EV_CHANGE)) {
            const fullPath = opts.cwd ? sysPath.join(opts.cwd, path4) : path4;
            let stats;
            try {
              stats = yield stat(fullPath);
            } catch (err) {
            }
            if (!stats || this.closed) return;
            args.push(stats);
          }
          this.emitWithAll(event, args);
          return this;
        });
      }
      /**
      * Common handler for errors
      * @param {Error} error
      * @returns {Error|Boolean} The error if defined, otherwise the value of the FSWatcher instance's `closed` flag
      */
      _handleError(error) {
        const code = error && error.code;
        if (error && code !== "ENOENT" && code !== "ENOTDIR" && (!this.options.ignorePermissionErrors || code !== "EPERM" && code !== "EACCES")) {
          this.emit(EV_ERROR, error);
        }
        return error || this.closed;
      }
      /**
      * Helper utility for throttling
      * @param {ThrottleType} actionType type being throttled
      * @param {Path} path being acted upon
      * @param {Number} timeout duration of time to suppress duplicate actions
      * @returns {Object|false} tracking object or false if action should be suppressed
      */
      _throttle(actionType, path4, timeout) {
        if (!this._throttled.has(actionType)) {
          this._throttled.set(actionType, /* @__PURE__ */ new Map());
        }
        const action = this._throttled.get(actionType);
        const actionPath = action.get(path4);
        if (actionPath) {
          actionPath.count++;
          return false;
        }
        let timeoutObject;
        const clear = /* @__PURE__ */ __name(() => {
          const item = action.get(path4);
          const count = item ? item.count : 0;
          action.delete(path4);
          clearTimeout(timeoutObject);
          if (item) clearTimeout(item.timeoutObject);
          return count;
        }, "clear");
        timeoutObject = setTimeout(clear, timeout);
        const thr = {
          timeoutObject,
          clear,
          count: 0
        };
        action.set(path4, thr);
        return thr;
      }
      _incrReadyCount() {
        return this._readyCount++;
      }
      /**
      * Awaits write operation to finish.
      * Polls a newly created file for size variations. When files size does not change for 'threshold' milliseconds calls callback.
      * @param {Path} path being acted upon
      * @param {Number} threshold Time in milliseconds a file size must be fixed before acknowledging write OP is finished
      * @param {EventName} event
      * @param {Function} awfEmit Callback to be called when ready for event to be emitted.
      */
      _awaitWriteFinish(path4, threshold, event, awfEmit) {
        let timeoutHandler;
        let fullPath = path4;
        if (this.options.cwd && !sysPath.isAbsolute(path4)) {
          fullPath = sysPath.join(this.options.cwd, path4);
        }
        const now = /* @__PURE__ */ new Date();
        const awaitWriteFinish = /* @__PURE__ */ __name((prevStat) => {
          fs2.stat(fullPath, (err, curStat) => {
            if (err || !this._pendingWrites.has(path4)) {
              if (err && err.code !== "ENOENT") awfEmit(err);
              return;
            }
            const now2 = Number(/* @__PURE__ */ new Date());
            if (prevStat && curStat.size !== prevStat.size) {
              this._pendingWrites.get(path4).lastChange = now2;
            }
            const pw = this._pendingWrites.get(path4);
            const df = now2 - pw.lastChange;
            if (df >= threshold) {
              this._pendingWrites.delete(path4);
              awfEmit(void 0, curStat);
            } else {
              timeoutHandler = setTimeout(awaitWriteFinish, this.options.awaitWriteFinish.pollInterval, curStat);
            }
          });
        }, "awaitWriteFinish");
        if (!this._pendingWrites.has(path4)) {
          this._pendingWrites.set(path4, {
            lastChange: now,
            cancelWait: /* @__PURE__ */ __name(() => {
              this._pendingWrites.delete(path4);
              clearTimeout(timeoutHandler);
              return event;
            }, "cancelWait")
          });
          timeoutHandler = setTimeout(awaitWriteFinish, this.options.awaitWriteFinish.pollInterval);
        }
      }
      _getGlobIgnored() {
        return [
          ...this._ignoredPaths.values()
        ];
      }
      /**
      * Determines whether user has asked to ignore this path.
      * @param {Path} path filepath or dir
      * @param {fs.Stats=} stats result of fs.stat
      * @returns {Boolean}
      */
      _isIgnored(path4, stats) {
        if (this.options.atomic && DOT_RE.test(path4)) return true;
        if (!this._userIgnored) {
          const { cwd } = this.options;
          const ign = this.options.ignored;
          const ignored = ign && ign.map(normalizeIgnored(cwd));
          const paths = arrify(ignored).filter((path5) => typeof path5 === STRING_TYPE && !isGlob(path5)).map((path5) => path5 + SLASH_GLOBSTAR);
          const list = this._getGlobIgnored().map(normalizeIgnored(cwd)).concat(ignored, paths);
          this._userIgnored = anymatch(list, void 0, ANYMATCH_OPTS);
        }
        return this._userIgnored([
          path4,
          stats
        ]);
      }
      _isntIgnored(path4, stat2) {
        return !this._isIgnored(path4, stat2);
      }
      /**
      * Provides a set of common helpers and properties relating to symlink and glob handling.
      * @param {Path} path file, directory, or glob pattern being watched
      * @param {Number=} depth at any depth > 0, this isn't a glob
      * @returns {WatchHelper} object containing helpers for this path
      */
      _getWatchHelpers(path4, depth) {
        const watchPath = depth || this.options.disableGlobbing || !isGlob(path4) ? path4 : globParent(path4);
        const follow = this.options.followSymlinks;
        return new WatchHelper(path4, watchPath, follow, this);
      }
      // Directory helpers
      // -----------------
      /**
      * Provides directory tracking objects
      * @param {String} directory path of the directory
      * @returns {DirEntry} the directory's tracking object
      */
      _getWatchedDir(directory) {
        if (!this._boundRemove) this._boundRemove = this._remove.bind(this);
        const dir = sysPath.resolve(directory);
        if (!this._watched.has(dir)) this._watched.set(dir, new DirEntry(dir, this._boundRemove));
        return this._watched.get(dir);
      }
      // File helpers
      // ------------
      /**
       * Check for read permissions.
       * Based on this answer on SO: https://stackoverflow.com/a/11781404/1358405
       * @param {fs.Stats} stats - object, result of fs_stat
       * @returns {Boolean} indicates whether the file can be read
      */
      _hasReadPermissions(stats) {
        if (this.options.ignorePermissionErrors) return true;
        const md = stats && Number.parseInt(stats.mode, 10);
        const st = md & 511;
        const it = Number.parseInt(st.toString(8)[0], 10);
        return Boolean(4 & it);
      }
      /**
       * Handles emitting unlink events for
       * files and directories, and via recursion, for
       * files and directories within directories that are unlinked
       * @param {String} directory within which the following item is located
       * @param {String} item      base path of item/directory
       * @returns {void}
      */
      _remove(directory, item, isDirectory) {
        const path4 = sysPath.join(directory, item);
        const fullPath = sysPath.resolve(path4);
        isDirectory = isDirectory != null ? isDirectory : this._watched.has(path4) || this._watched.has(fullPath);
        if (!this._throttle("remove", path4, 100)) return;
        if (!isDirectory && !this.options.useFsEvents && this._watched.size === 1) {
          this.add(directory, item, true);
        }
        const wp = this._getWatchedDir(path4);
        const nestedDirectoryChildren = wp.getChildren();
        nestedDirectoryChildren.forEach((nested) => this._remove(path4, nested));
        const parent = this._getWatchedDir(directory);
        const wasTracked = parent.has(item);
        parent.remove(item);
        if (this._symlinkPaths.has(fullPath)) {
          this._symlinkPaths.delete(fullPath);
        }
        let relPath = path4;
        if (this.options.cwd) relPath = sysPath.relative(this.options.cwd, path4);
        if (this.options.awaitWriteFinish && this._pendingWrites.has(relPath)) {
          const event = this._pendingWrites.get(relPath).cancelWait();
          if (event === EV_ADD) return;
        }
        this._watched.delete(path4);
        this._watched.delete(fullPath);
        const eventName = isDirectory ? EV_UNLINK_DIR : EV_UNLINK;
        if (wasTracked && !this._isIgnored(path4)) this._emit(eventName, path4);
        if (!this.options.useFsEvents) {
          this._closePath(path4);
        }
      }
      /**
      * Closes all watchers for a path
      * @param {Path} path
      */
      _closePath(path4) {
        this._closeFile(path4);
        const dir = sysPath.dirname(path4);
        this._getWatchedDir(dir).remove(sysPath.basename(path4));
      }
      /**
      * Closes only file-specific watchers
      * @param {Path} path
      */
      _closeFile(path4) {
        const closers = this._closers.get(path4);
        if (!closers) return;
        closers.forEach((closer) => closer());
        this._closers.delete(path4);
      }
      /**
      *
      * @param {Path} path
      * @param {Function} closer
      */
      _addPathCloser(path4, closer) {
        if (!closer) return;
        let list = this._closers.get(path4);
        if (!list) {
          list = [];
          this._closers.set(path4, list);
        }
        list.push(closer);
      }
      _readdirp(root, opts) {
        if (this.closed) return;
        const options = __spreadValues({
          type: EV_ALL,
          alwaysStat: true,
          lstat: true
        }, opts);
        let stream = readdirp(root, options);
        this._streams.add(stream);
        stream.once(STR_CLOSE, () => {
          stream = void 0;
        });
        stream.once(STR_END, () => {
          if (stream) {
            this._streams.delete(stream);
            stream = void 0;
          }
        });
        return stream;
      }
    }, __name(_a3, "FSWatcher"), _a3);
    exports.FSWatcher = FSWatcher;
    var watch = /* @__PURE__ */ __name((paths, options) => {
      const watcher = new FSWatcher(options);
      watcher.add(paths);
      return watcher;
    }, "watch");
    exports.watch = watch;
  }
});

// node_modules/lodash.throttle/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.throttle/index.js"(exports, module) {
    "use strict";
    var FUNC_ERROR_TEXT = "Expected a function";
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    var now = /* @__PURE__ */ __name(function() {
      return root.Date.now();
    }, "now");
    function debounce(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      __name(invokeFunc, "invokeFunc");
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      __name(leadingEdge, "leadingEdge");
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
        return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
      }
      __name(remainingWait, "remainingWait");
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      __name(shouldInvoke, "shouldInvoke");
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      __name(timerExpired, "timerExpired");
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      __name(trailingEdge, "trailingEdge");
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      __name(cancel, "cancel");
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      __name(flush, "flush");
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      __name(debounced, "debounced");
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    __name(debounce, "debounce");
    function throttle2(func, wait, options) {
      var leading = true, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = "leading" in options ? !!options.leading : leading;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
      });
    }
    __name(throttle2, "throttle");
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    __name(isObject, "isObject");
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    __name(isObjectLike, "isObjectLike");
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    __name(isSymbol, "isSymbol");
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    __name(toNumber, "toNumber");
    module.exports = throttle2;
  }
});

// node_modules/escape-string-regexp/index.js
var require_escape_string_regexp = __commonJS({
  "node_modules/escape-string-regexp/index.js"(exports, module) {
    "use strict";
    var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
    module.exports = function(str) {
      if (typeof str !== "string") {
        throw new TypeError("Expected a string");
      }
      return str.replace(matchOperatorsRe, "\\$&");
    };
  }
});

// node_modules/log-symbols/node_modules/color-name/index.js
var require_color_name = __commonJS({
  "node_modules/log-symbols/node_modules/color-name/index.js"(exports, module) {
    "use strict";
    module.exports = {
      "aliceblue": [
        240,
        248,
        255
      ],
      "antiquewhite": [
        250,
        235,
        215
      ],
      "aqua": [
        0,
        255,
        255
      ],
      "aquamarine": [
        127,
        255,
        212
      ],
      "azure": [
        240,
        255,
        255
      ],
      "beige": [
        245,
        245,
        220
      ],
      "bisque": [
        255,
        228,
        196
      ],
      "black": [
        0,
        0,
        0
      ],
      "blanchedalmond": [
        255,
        235,
        205
      ],
      "blue": [
        0,
        0,
        255
      ],
      "blueviolet": [
        138,
        43,
        226
      ],
      "brown": [
        165,
        42,
        42
      ],
      "burlywood": [
        222,
        184,
        135
      ],
      "cadetblue": [
        95,
        158,
        160
      ],
      "chartreuse": [
        127,
        255,
        0
      ],
      "chocolate": [
        210,
        105,
        30
      ],
      "coral": [
        255,
        127,
        80
      ],
      "cornflowerblue": [
        100,
        149,
        237
      ],
      "cornsilk": [
        255,
        248,
        220
      ],
      "crimson": [
        220,
        20,
        60
      ],
      "cyan": [
        0,
        255,
        255
      ],
      "darkblue": [
        0,
        0,
        139
      ],
      "darkcyan": [
        0,
        139,
        139
      ],
      "darkgoldenrod": [
        184,
        134,
        11
      ],
      "darkgray": [
        169,
        169,
        169
      ],
      "darkgreen": [
        0,
        100,
        0
      ],
      "darkgrey": [
        169,
        169,
        169
      ],
      "darkkhaki": [
        189,
        183,
        107
      ],
      "darkmagenta": [
        139,
        0,
        139
      ],
      "darkolivegreen": [
        85,
        107,
        47
      ],
      "darkorange": [
        255,
        140,
        0
      ],
      "darkorchid": [
        153,
        50,
        204
      ],
      "darkred": [
        139,
        0,
        0
      ],
      "darksalmon": [
        233,
        150,
        122
      ],
      "darkseagreen": [
        143,
        188,
        143
      ],
      "darkslateblue": [
        72,
        61,
        139
      ],
      "darkslategray": [
        47,
        79,
        79
      ],
      "darkslategrey": [
        47,
        79,
        79
      ],
      "darkturquoise": [
        0,
        206,
        209
      ],
      "darkviolet": [
        148,
        0,
        211
      ],
      "deeppink": [
        255,
        20,
        147
      ],
      "deepskyblue": [
        0,
        191,
        255
      ],
      "dimgray": [
        105,
        105,
        105
      ],
      "dimgrey": [
        105,
        105,
        105
      ],
      "dodgerblue": [
        30,
        144,
        255
      ],
      "firebrick": [
        178,
        34,
        34
      ],
      "floralwhite": [
        255,
        250,
        240
      ],
      "forestgreen": [
        34,
        139,
        34
      ],
      "fuchsia": [
        255,
        0,
        255
      ],
      "gainsboro": [
        220,
        220,
        220
      ],
      "ghostwhite": [
        248,
        248,
        255
      ],
      "gold": [
        255,
        215,
        0
      ],
      "goldenrod": [
        218,
        165,
        32
      ],
      "gray": [
        128,
        128,
        128
      ],
      "green": [
        0,
        128,
        0
      ],
      "greenyellow": [
        173,
        255,
        47
      ],
      "grey": [
        128,
        128,
        128
      ],
      "honeydew": [
        240,
        255,
        240
      ],
      "hotpink": [
        255,
        105,
        180
      ],
      "indianred": [
        205,
        92,
        92
      ],
      "indigo": [
        75,
        0,
        130
      ],
      "ivory": [
        255,
        255,
        240
      ],
      "khaki": [
        240,
        230,
        140
      ],
      "lavender": [
        230,
        230,
        250
      ],
      "lavenderblush": [
        255,
        240,
        245
      ],
      "lawngreen": [
        124,
        252,
        0
      ],
      "lemonchiffon": [
        255,
        250,
        205
      ],
      "lightblue": [
        173,
        216,
        230
      ],
      "lightcoral": [
        240,
        128,
        128
      ],
      "lightcyan": [
        224,
        255,
        255
      ],
      "lightgoldenrodyellow": [
        250,
        250,
        210
      ],
      "lightgray": [
        211,
        211,
        211
      ],
      "lightgreen": [
        144,
        238,
        144
      ],
      "lightgrey": [
        211,
        211,
        211
      ],
      "lightpink": [
        255,
        182,
        193
      ],
      "lightsalmon": [
        255,
        160,
        122
      ],
      "lightseagreen": [
        32,
        178,
        170
      ],
      "lightskyblue": [
        135,
        206,
        250
      ],
      "lightslategray": [
        119,
        136,
        153
      ],
      "lightslategrey": [
        119,
        136,
        153
      ],
      "lightsteelblue": [
        176,
        196,
        222
      ],
      "lightyellow": [
        255,
        255,
        224
      ],
      "lime": [
        0,
        255,
        0
      ],
      "limegreen": [
        50,
        205,
        50
      ],
      "linen": [
        250,
        240,
        230
      ],
      "magenta": [
        255,
        0,
        255
      ],
      "maroon": [
        128,
        0,
        0
      ],
      "mediumaquamarine": [
        102,
        205,
        170
      ],
      "mediumblue": [
        0,
        0,
        205
      ],
      "mediumorchid": [
        186,
        85,
        211
      ],
      "mediumpurple": [
        147,
        112,
        219
      ],
      "mediumseagreen": [
        60,
        179,
        113
      ],
      "mediumslateblue": [
        123,
        104,
        238
      ],
      "mediumspringgreen": [
        0,
        250,
        154
      ],
      "mediumturquoise": [
        72,
        209,
        204
      ],
      "mediumvioletred": [
        199,
        21,
        133
      ],
      "midnightblue": [
        25,
        25,
        112
      ],
      "mintcream": [
        245,
        255,
        250
      ],
      "mistyrose": [
        255,
        228,
        225
      ],
      "moccasin": [
        255,
        228,
        181
      ],
      "navajowhite": [
        255,
        222,
        173
      ],
      "navy": [
        0,
        0,
        128
      ],
      "oldlace": [
        253,
        245,
        230
      ],
      "olive": [
        128,
        128,
        0
      ],
      "olivedrab": [
        107,
        142,
        35
      ],
      "orange": [
        255,
        165,
        0
      ],
      "orangered": [
        255,
        69,
        0
      ],
      "orchid": [
        218,
        112,
        214
      ],
      "palegoldenrod": [
        238,
        232,
        170
      ],
      "palegreen": [
        152,
        251,
        152
      ],
      "paleturquoise": [
        175,
        238,
        238
      ],
      "palevioletred": [
        219,
        112,
        147
      ],
      "papayawhip": [
        255,
        239,
        213
      ],
      "peachpuff": [
        255,
        218,
        185
      ],
      "peru": [
        205,
        133,
        63
      ],
      "pink": [
        255,
        192,
        203
      ],
      "plum": [
        221,
        160,
        221
      ],
      "powderblue": [
        176,
        224,
        230
      ],
      "purple": [
        128,
        0,
        128
      ],
      "rebeccapurple": [
        102,
        51,
        153
      ],
      "red": [
        255,
        0,
        0
      ],
      "rosybrown": [
        188,
        143,
        143
      ],
      "royalblue": [
        65,
        105,
        225
      ],
      "saddlebrown": [
        139,
        69,
        19
      ],
      "salmon": [
        250,
        128,
        114
      ],
      "sandybrown": [
        244,
        164,
        96
      ],
      "seagreen": [
        46,
        139,
        87
      ],
      "seashell": [
        255,
        245,
        238
      ],
      "sienna": [
        160,
        82,
        45
      ],
      "silver": [
        192,
        192,
        192
      ],
      "skyblue": [
        135,
        206,
        235
      ],
      "slateblue": [
        106,
        90,
        205
      ],
      "slategray": [
        112,
        128,
        144
      ],
      "slategrey": [
        112,
        128,
        144
      ],
      "snow": [
        255,
        250,
        250
      ],
      "springgreen": [
        0,
        255,
        127
      ],
      "steelblue": [
        70,
        130,
        180
      ],
      "tan": [
        210,
        180,
        140
      ],
      "teal": [
        0,
        128,
        128
      ],
      "thistle": [
        216,
        191,
        216
      ],
      "tomato": [
        255,
        99,
        71
      ],
      "turquoise": [
        64,
        224,
        208
      ],
      "violet": [
        238,
        130,
        238
      ],
      "wheat": [
        245,
        222,
        179
      ],
      "white": [
        255,
        255,
        255
      ],
      "whitesmoke": [
        245,
        245,
        245
      ],
      "yellow": [
        255,
        255,
        0
      ],
      "yellowgreen": [
        154,
        205,
        50
      ]
    };
  }
});

// node_modules/log-symbols/node_modules/color-convert/conversions.js
var require_conversions = __commonJS({
  "node_modules/log-symbols/node_modules/color-convert/conversions.js"(exports, module) {
    "use strict";
    var cssKeywords = require_color_name();
    var reverseKeywords = {};
    for (key in cssKeywords) {
      if (cssKeywords.hasOwnProperty(key)) {
        reverseKeywords[cssKeywords[key]] = key;
      }
    }
    var key;
    var convert = module.exports = {
      rgb: {
        channels: 3,
        labels: "rgb"
      },
      hsl: {
        channels: 3,
        labels: "hsl"
      },
      hsv: {
        channels: 3,
        labels: "hsv"
      },
      hwb: {
        channels: 3,
        labels: "hwb"
      },
      cmyk: {
        channels: 4,
        labels: "cmyk"
      },
      xyz: {
        channels: 3,
        labels: "xyz"
      },
      lab: {
        channels: 3,
        labels: "lab"
      },
      lch: {
        channels: 3,
        labels: "lch"
      },
      hex: {
        channels: 1,
        labels: [
          "hex"
        ]
      },
      keyword: {
        channels: 1,
        labels: [
          "keyword"
        ]
      },
      ansi16: {
        channels: 1,
        labels: [
          "ansi16"
        ]
      },
      ansi256: {
        channels: 1,
        labels: [
          "ansi256"
        ]
      },
      hcg: {
        channels: 3,
        labels: [
          "h",
          "c",
          "g"
        ]
      },
      apple: {
        channels: 3,
        labels: [
          "r16",
          "g16",
          "b16"
        ]
      },
      gray: {
        channels: 1,
        labels: [
          "gray"
        ]
      }
    };
    for (model in convert) {
      if (convert.hasOwnProperty(model)) {
        if (!("channels" in convert[model])) {
          throw new Error("missing channels property: " + model);
        }
        if (!("labels" in convert[model])) {
          throw new Error("missing channel labels property: " + model);
        }
        if (convert[model].labels.length !== convert[model].channels) {
          throw new Error("channel and label counts mismatch: " + model);
        }
        channels = convert[model].channels;
        labels = convert[model].labels;
        delete convert[model].channels;
        delete convert[model].labels;
        Object.defineProperty(convert[model], "channels", {
          value: channels
        });
        Object.defineProperty(convert[model], "labels", {
          value: labels
        });
      }
    }
    var channels;
    var labels;
    var model;
    convert.rgb.hsl = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var min = Math.min(r, g, b);
      var max = Math.max(r, g, b);
      var delta = max - min;
      var h;
      var s;
      var l;
      if (max === min) {
        h = 0;
      } else if (r === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r) / delta;
      } else if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      l = (min + max) / 2;
      if (max === min) {
        s = 0;
      } else if (l <= 0.5) {
        s = delta / (max + min);
      } else {
        s = delta / (2 - max - min);
      }
      return [
        h,
        s * 100,
        l * 100
      ];
    };
    convert.rgb.hsv = function(rgb) {
      var rdif;
      var gdif;
      var bdif;
      var h;
      var s;
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var v = Math.max(r, g, b);
      var diff = v - Math.min(r, g, b);
      var diffc = /* @__PURE__ */ __name(function(c) {
        return (v - c) / 6 / diff + 1 / 2;
      }, "diffc");
      if (diff === 0) {
        h = s = 0;
      } else {
        s = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r === v) {
          h = bdif - gdif;
        } else if (g === v) {
          h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
          h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }
      return [
        h * 360,
        s * 100,
        v * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      var r = rgb[0];
      var g = rgb[1];
      var b = rgb[2];
      var h = convert.rgb.hsl(rgb)[0];
      var w = 1 / 255 * Math.min(r, Math.min(g, b));
      b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
      return [
        h,
        w * 100,
        b * 100
      ];
    };
    convert.rgb.cmyk = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var c;
      var m;
      var y;
      var k;
      k = Math.min(1 - r, 1 - g, 1 - b);
      c = (1 - r - k) / (1 - k) || 0;
      m = (1 - g - k) / (1 - k) || 0;
      y = (1 - b - k) / (1 - k) || 0;
      return [
        c * 100,
        m * 100,
        y * 100,
        k * 100
      ];
    };
    function comparativeDistance(x, y) {
      return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2);
    }
    __name(comparativeDistance, "comparativeDistance");
    convert.rgb.keyword = function(rgb) {
      var reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      var currentClosestDistance = Infinity;
      var currentClosestKeyword;
      for (var keyword in cssKeywords) {
        if (cssKeywords.hasOwnProperty(keyword)) {
          var value = cssKeywords[keyword];
          var distance = comparativeDistance(rgb, value);
          if (distance < currentClosestDistance) {
            currentClosestDistance = distance;
            currentClosestKeyword = keyword;
          }
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
      g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
      b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
      var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
      var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
      var z = r * 0.0193 + g * 0.1192 + b * 0.9505;
      return [
        x * 100,
        y * 100,
        z * 100
      ];
    };
    convert.rgb.lab = function(rgb) {
      var xyz = convert.rgb.xyz(rgb);
      var x = xyz[0];
      var y = xyz[1];
      var z = xyz[2];
      var l;
      var a;
      var b;
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
      l = 116 * y - 16;
      a = 500 * (x - y);
      b = 200 * (y - z);
      return [
        l,
        a,
        b
      ];
    };
    convert.hsl.rgb = function(hsl) {
      var h = hsl[0] / 360;
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var t1;
      var t2;
      var t3;
      var rgb;
      var val;
      if (s === 0) {
        val = l * 255;
        return [
          val,
          val,
          val
        ];
      }
      if (l < 0.5) {
        t2 = l * (1 + s);
      } else {
        t2 = l + s - l * s;
      }
      t1 = 2 * l - t2;
      rgb = [
        0,
        0,
        0
      ];
      for (var i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i] = val * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      var h = hsl[0];
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var smin = s;
      var lmin = Math.max(l, 0.01);
      var sv;
      var v;
      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      v = (l + s) / 2;
      sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
      return [
        h,
        sv * 100,
        v * 100
      ];
    };
    convert.hsv.rgb = function(hsv) {
      var h = hsv[0] / 60;
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var hi = Math.floor(h) % 6;
      var f = h - Math.floor(h);
      var p = 255 * v * (1 - s);
      var q = 255 * v * (1 - s * f);
      var t = 255 * v * (1 - s * (1 - f));
      v *= 255;
      switch (hi) {
        case 0:
          return [
            v,
            t,
            p
          ];
        case 1:
          return [
            q,
            v,
            p
          ];
        case 2:
          return [
            p,
            v,
            t
          ];
        case 3:
          return [
            p,
            q,
            v
          ];
        case 4:
          return [
            t,
            p,
            v
          ];
        case 5:
          return [
            v,
            p,
            q
          ];
      }
    };
    convert.hsv.hsl = function(hsv) {
      var h = hsv[0];
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var vmin = Math.max(v, 0.01);
      var lmin;
      var sl;
      var l;
      l = (2 - s) * v;
      lmin = (2 - s) * vmin;
      sl = s * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l /= 2;
      return [
        h,
        sl * 100,
        l * 100
      ];
    };
    convert.hwb.rgb = function(hwb) {
      var h = hwb[0] / 360;
      var wh = hwb[1] / 100;
      var bl = hwb[2] / 100;
      var ratio = wh + bl;
      var i;
      var v;
      var f;
      var n;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      i = Math.floor(6 * h);
      v = 1 - bl;
      f = 6 * h - i;
      if ((i & 1) !== 0) {
        f = 1 - f;
      }
      n = wh + f * (v - wh);
      var r;
      var g;
      var b;
      switch (i) {
        default:
        case 6:
        case 0:
          r = v;
          g = n;
          b = wh;
          break;
        case 1:
          r = n;
          g = v;
          b = wh;
          break;
        case 2:
          r = wh;
          g = v;
          b = n;
          break;
        case 3:
          r = wh;
          g = n;
          b = v;
          break;
        case 4:
          r = n;
          g = wh;
          b = v;
          break;
        case 5:
          r = v;
          g = wh;
          b = n;
          break;
      }
      return [
        r * 255,
        g * 255,
        b * 255
      ];
    };
    convert.cmyk.rgb = function(cmyk) {
      var c = cmyk[0] / 100;
      var m = cmyk[1] / 100;
      var y = cmyk[2] / 100;
      var k = cmyk[3] / 100;
      var r;
      var g;
      var b;
      r = 1 - Math.min(1, c * (1 - k) + k);
      g = 1 - Math.min(1, m * (1 - k) + k);
      b = 1 - Math.min(1, y * (1 - k) + k);
      return [
        r * 255,
        g * 255,
        b * 255
      ];
    };
    convert.xyz.rgb = function(xyz) {
      var x = xyz[0] / 100;
      var y = xyz[1] / 100;
      var z = xyz[2] / 100;
      var r;
      var g;
      var b;
      r = x * 3.2406 + y * -1.5372 + z * -0.4986;
      g = x * -0.9689 + y * 1.8758 + z * 0.0415;
      b = x * 0.0557 + y * -0.204 + z * 1.057;
      r = r > 31308e-7 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : r * 12.92;
      g = g > 31308e-7 ? 1.055 * Math.pow(g, 1 / 2.4) - 0.055 : g * 12.92;
      b = b > 31308e-7 ? 1.055 * Math.pow(b, 1 / 2.4) - 0.055 : b * 12.92;
      r = Math.min(Math.max(0, r), 1);
      g = Math.min(Math.max(0, g), 1);
      b = Math.min(Math.max(0, b), 1);
      return [
        r * 255,
        g * 255,
        b * 255
      ];
    };
    convert.xyz.lab = function(xyz) {
      var x = xyz[0];
      var y = xyz[1];
      var z = xyz[2];
      var l;
      var a;
      var b;
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
      l = 116 * y - 16;
      a = 500 * (x - y);
      b = 200 * (y - z);
      return [
        l,
        a,
        b
      ];
    };
    convert.lab.xyz = function(lab) {
      var l = lab[0];
      var a = lab[1];
      var b = lab[2];
      var x;
      var y;
      var z;
      y = (l + 16) / 116;
      x = a / 500 + y;
      z = y - b / 200;
      var y2 = Math.pow(y, 3);
      var x2 = Math.pow(x, 3);
      var z2 = Math.pow(z, 3);
      y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
      x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
      z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
      x *= 95.047;
      y *= 100;
      z *= 108.883;
      return [
        x,
        y,
        z
      ];
    };
    convert.lab.lch = function(lab) {
      var l = lab[0];
      var a = lab[1];
      var b = lab[2];
      var hr;
      var h;
      var c;
      hr = Math.atan2(b, a);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      c = Math.sqrt(a * a + b * b);
      return [
        l,
        c,
        h
      ];
    };
    convert.lch.lab = function(lch) {
      var l = lch[0];
      var c = lch[1];
      var h = lch[2];
      var a;
      var b;
      var hr;
      hr = h / 360 * 2 * Math.PI;
      a = c * Math.cos(hr);
      b = c * Math.sin(hr);
      return [
        l,
        a,
        b
      ];
    };
    convert.rgb.ansi16 = function(args) {
      var r = args[0];
      var g = args[1];
      var b = args[2];
      var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2];
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args) {
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };
    convert.rgb.ansi256 = function(args) {
      var r = args[0];
      var g = args[1];
      var b = args[2];
      if (r === g && g === b) {
        if (r < 8) {
          return 16;
        }
        if (r > 248) {
          return 231;
        }
        return Math.round((r - 8) / 247 * 24) + 232;
      }
      var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args) {
      var color = args % 10;
      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [
          color,
          color,
          color
        ];
      }
      var mult = (~~(args > 50) + 1) * 0.5;
      var r = (color & 1) * mult * 255;
      var g = (color >> 1 & 1) * mult * 255;
      var b = (color >> 2 & 1) * mult * 255;
      return [
        r,
        g,
        b
      ];
    };
    convert.ansi256.rgb = function(args) {
      if (args >= 232) {
        var c = (args - 232) * 10 + 8;
        return [
          c,
          c,
          c
        ];
      }
      args -= 16;
      var rem;
      var r = Math.floor(args / 36) / 5 * 255;
      var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
      var b = rem % 6 / 5 * 255;
      return [
        r,
        g,
        b
      ];
    };
    convert.rgb.hex = function(args) {
      var integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
      var string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.hex.rgb = function(args) {
      var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [
          0,
          0,
          0
        ];
      }
      var colorString = match[0];
      if (match[0].length === 3) {
        colorString = colorString.split("").map(function(char) {
          return char + char;
        }).join("");
      }
      var integer = parseInt(colorString, 16);
      var r = integer >> 16 & 255;
      var g = integer >> 8 & 255;
      var b = integer & 255;
      return [
        r,
        g,
        b
      ];
    };
    convert.rgb.hcg = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var max = Math.max(Math.max(r, g), b);
      var min = Math.min(Math.min(r, g), b);
      var chroma = max - min;
      var grayscale;
      var hue;
      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r) {
        hue = (g - b) / chroma % 6;
      } else if (max === g) {
        hue = 2 + (b - r) / chroma;
      } else {
        hue = 4 + (r - g) / chroma + 4;
      }
      hue /= 6;
      hue %= 1;
      return [
        hue * 360,
        chroma * 100,
        grayscale * 100
      ];
    };
    convert.hsl.hcg = function(hsl) {
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var c = 1;
      var f = 0;
      if (l < 0.5) {
        c = 2 * s * l;
      } else {
        c = 2 * s * (1 - l);
      }
      if (c < 1) {
        f = (l - 0.5 * c) / (1 - c);
      }
      return [
        hsl[0],
        c * 100,
        f * 100
      ];
    };
    convert.hsv.hcg = function(hsv) {
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var c = s * v;
      var f = 0;
      if (c < 1) {
        f = (v - c) / (1 - c);
      }
      return [
        hsv[0],
        c * 100,
        f * 100
      ];
    };
    convert.hcg.rgb = function(hcg) {
      var h = hcg[0] / 360;
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      if (c === 0) {
        return [
          g * 255,
          g * 255,
          g * 255
        ];
      }
      var pure = [
        0,
        0,
        0
      ];
      var hi = h % 1 * 6;
      var v = hi % 1;
      var w = 1 - v;
      var mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
      }
      mg = (1 - c) * g;
      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      var v = c + g * (1 - c);
      var f = 0;
      if (v > 0) {
        f = c / v;
      }
      return [
        hcg[0],
        f * 100,
        v * 100
      ];
    };
    convert.hcg.hsl = function(hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      var l = g * (1 - c) + 0.5 * c;
      var s = 0;
      if (l > 0 && l < 0.5) {
        s = c / (2 * l);
      } else if (l >= 0.5 && l < 1) {
        s = c / (2 * (1 - l));
      }
      return [
        hcg[0],
        s * 100,
        l * 100
      ];
    };
    convert.hcg.hwb = function(hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      var v = c + g * (1 - c);
      return [
        hcg[0],
        (v - c) * 100,
        (1 - v) * 100
      ];
    };
    convert.hwb.hcg = function(hwb) {
      var w = hwb[1] / 100;
      var b = hwb[2] / 100;
      var v = 1 - b;
      var c = v - w;
      var g = 0;
      if (c < 1) {
        g = (v - c) / (1 - c);
      }
      return [
        hwb[0],
        c * 100,
        g * 100
      ];
    };
    convert.apple.rgb = function(apple) {
      return [
        apple[0] / 65535 * 255,
        apple[1] / 65535 * 255,
        apple[2] / 65535 * 255
      ];
    };
    convert.rgb.apple = function(rgb) {
      return [
        rgb[0] / 255 * 65535,
        rgb[1] / 255 * 65535,
        rgb[2] / 255 * 65535
      ];
    };
    convert.gray.rgb = function(args) {
      return [
        args[0] / 100 * 255,
        args[0] / 100 * 255,
        args[0] / 100 * 255
      ];
    };
    convert.gray.hsl = convert.gray.hsv = function(args) {
      return [
        0,
        0,
        args[0]
      ];
    };
    convert.gray.hwb = function(gray) {
      return [
        0,
        100,
        gray[0]
      ];
    };
    convert.gray.cmyk = function(gray) {
      return [
        0,
        0,
        0,
        gray[0]
      ];
    };
    convert.gray.lab = function(gray) {
      return [
        gray[0],
        0,
        0
      ];
    };
    convert.gray.hex = function(gray) {
      var val = Math.round(gray[0] / 100 * 255) & 255;
      var integer = (val << 16) + (val << 8) + val;
      var string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.rgb.gray = function(rgb) {
      var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [
        val / 255 * 100
      ];
    };
  }
});

// node_modules/log-symbols/node_modules/color-convert/route.js
var require_route = __commonJS({
  "node_modules/log-symbols/node_modules/color-convert/route.js"(exports, module) {
    "use strict";
    var conversions = require_conversions();
    function buildGraph() {
      var graph = {};
      var models = Object.keys(conversions);
      for (var len = models.length, i = 0; i < len; i++) {
        graph[models[i]] = {
          // http://jsperf.com/1-vs-infinity
          // micro-opt, but this is simple.
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    __name(buildGraph, "buildGraph");
    function deriveBFS(fromModel) {
      var graph = buildGraph();
      var queue = [
        fromModel
      ];
      graph[fromModel].distance = 0;
      while (queue.length) {
        var current = queue.pop();
        var adjacents = Object.keys(conversions[current]);
        for (var len = adjacents.length, i = 0; i < len; i++) {
          var adjacent = adjacents[i];
          var node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    __name(deriveBFS, "deriveBFS");
    function link(from, to) {
      return function(args) {
        return to(from(args));
      };
    }
    __name(link, "link");
    function wrapConversion(toModel, graph) {
      var path4 = [
        graph[toModel].parent,
        toModel
      ];
      var fn = conversions[graph[toModel].parent][toModel];
      var cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path4.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path4;
      return fn;
    }
    __name(wrapConversion, "wrapConversion");
    module.exports = function(fromModel) {
      var graph = deriveBFS(fromModel);
      var conversion = {};
      var models = Object.keys(graph);
      for (var len = models.length, i = 0; i < len; i++) {
        var toModel = models[i];
        var node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
  }
});

// node_modules/log-symbols/node_modules/color-convert/index.js
var require_color_convert = __commonJS({
  "node_modules/log-symbols/node_modules/color-convert/index.js"(exports, module) {
    "use strict";
    var conversions = require_conversions();
    var route = require_route();
    var convert = {};
    var models = Object.keys(conversions);
    function wrapRaw(fn) {
      var wrappedFn = /* @__PURE__ */ __name(function(args) {
        if (args === void 0 || args === null) {
          return args;
        }
        if (arguments.length > 1) {
          args = Array.prototype.slice.call(arguments);
        }
        return fn(args);
      }, "wrappedFn");
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    __name(wrapRaw, "wrapRaw");
    function wrapRounded(fn) {
      var wrappedFn = /* @__PURE__ */ __name(function(args) {
        if (args === void 0 || args === null) {
          return args;
        }
        if (arguments.length > 1) {
          args = Array.prototype.slice.call(arguments);
        }
        var result = fn(args);
        if (typeof result === "object") {
          for (var len = result.length, i = 0; i < len; i++) {
            result[i] = Math.round(result[i]);
          }
        }
        return result;
      }, "wrappedFn");
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    __name(wrapRounded, "wrapRounded");
    models.forEach(function(fromModel) {
      convert[fromModel] = {};
      Object.defineProperty(convert[fromModel], "channels", {
        value: conversions[fromModel].channels
      });
      Object.defineProperty(convert[fromModel], "labels", {
        value: conversions[fromModel].labels
      });
      var routes = route(fromModel);
      var routeModels = Object.keys(routes);
      routeModels.forEach(function(toModel) {
        var fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
      });
    });
    module.exports = convert;
  }
});

// node_modules/log-symbols/node_modules/ansi-styles/index.js
var require_ansi_styles = __commonJS({
  "node_modules/log-symbols/node_modules/ansi-styles/index.js"(exports, module) {
    "use strict";
    var colorConvert = require_color_convert();
    var wrapAnsi16 = /* @__PURE__ */ __name((fn, offset) => function() {
      const code = fn.apply(colorConvert, arguments);
      return `\x1B[${code + offset}m`;
    }, "wrapAnsi16");
    var wrapAnsi256 = /* @__PURE__ */ __name((fn, offset) => function() {
      const code = fn.apply(colorConvert, arguments);
      return `\x1B[${38 + offset};5;${code}m`;
    }, "wrapAnsi256");
    var wrapAnsi16m = /* @__PURE__ */ __name((fn, offset) => function() {
      const rgb = fn.apply(colorConvert, arguments);
      return `\x1B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
    }, "wrapAnsi16m");
    function assembleStyles() {
      const codes = /* @__PURE__ */ new Map();
      const styles = {
        modifier: {
          reset: [
            0,
            0
          ],
          // 21 isn't widely supported and 22 does the same thing
          bold: [
            1,
            22
          ],
          dim: [
            2,
            22
          ],
          italic: [
            3,
            23
          ],
          underline: [
            4,
            24
          ],
          inverse: [
            7,
            27
          ],
          hidden: [
            8,
            28
          ],
          strikethrough: [
            9,
            29
          ]
        },
        color: {
          black: [
            30,
            39
          ],
          red: [
            31,
            39
          ],
          green: [
            32,
            39
          ],
          yellow: [
            33,
            39
          ],
          blue: [
            34,
            39
          ],
          magenta: [
            35,
            39
          ],
          cyan: [
            36,
            39
          ],
          white: [
            37,
            39
          ],
          gray: [
            90,
            39
          ],
          // Bright color
          redBright: [
            91,
            39
          ],
          greenBright: [
            92,
            39
          ],
          yellowBright: [
            93,
            39
          ],
          blueBright: [
            94,
            39
          ],
          magentaBright: [
            95,
            39
          ],
          cyanBright: [
            96,
            39
          ],
          whiteBright: [
            97,
            39
          ]
        },
        bgColor: {
          bgBlack: [
            40,
            49
          ],
          bgRed: [
            41,
            49
          ],
          bgGreen: [
            42,
            49
          ],
          bgYellow: [
            43,
            49
          ],
          bgBlue: [
            44,
            49
          ],
          bgMagenta: [
            45,
            49
          ],
          bgCyan: [
            46,
            49
          ],
          bgWhite: [
            47,
            49
          ],
          // Bright color
          bgBlackBright: [
            100,
            49
          ],
          bgRedBright: [
            101,
            49
          ],
          bgGreenBright: [
            102,
            49
          ],
          bgYellowBright: [
            103,
            49
          ],
          bgBlueBright: [
            104,
            49
          ],
          bgMagentaBright: [
            105,
            49
          ],
          bgCyanBright: [
            106,
            49
          ],
          bgWhiteBright: [
            107,
            49
          ]
        }
      };
      styles.color.grey = styles.color.gray;
      for (const groupName of Object.keys(styles)) {
        const group = styles[groupName];
        for (const styleName of Object.keys(group)) {
          const style = group[styleName];
          styles[styleName] = {
            open: `\x1B[${style[0]}m`,
            close: `\x1B[${style[1]}m`
          };
          group[styleName] = styles[styleName];
          codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles, groupName, {
          value: group,
          enumerable: false
        });
        Object.defineProperty(styles, "codes", {
          value: codes,
          enumerable: false
        });
      }
      const ansi2ansi = /* @__PURE__ */ __name((n) => n, "ansi2ansi");
      const rgb2rgb = /* @__PURE__ */ __name((r, g, b) => [
        r,
        g,
        b
      ], "rgb2rgb");
      styles.color.close = "\x1B[39m";
      styles.bgColor.close = "\x1B[49m";
      styles.color.ansi = {
        ansi: wrapAnsi16(ansi2ansi, 0)
      };
      styles.color.ansi256 = {
        ansi256: wrapAnsi256(ansi2ansi, 0)
      };
      styles.color.ansi16m = {
        rgb: wrapAnsi16m(rgb2rgb, 0)
      };
      styles.bgColor.ansi = {
        ansi: wrapAnsi16(ansi2ansi, 10)
      };
      styles.bgColor.ansi256 = {
        ansi256: wrapAnsi256(ansi2ansi, 10)
      };
      styles.bgColor.ansi16m = {
        rgb: wrapAnsi16m(rgb2rgb, 10)
      };
      for (let key of Object.keys(colorConvert)) {
        if (typeof colorConvert[key] !== "object") {
          continue;
        }
        const suite = colorConvert[key];
        if (key === "ansi16") {
          key = "ansi";
        }
        if ("ansi16" in suite) {
          styles.color.ansi[key] = wrapAnsi16(suite.ansi16, 0);
          styles.bgColor.ansi[key] = wrapAnsi16(suite.ansi16, 10);
        }
        if ("ansi256" in suite) {
          styles.color.ansi256[key] = wrapAnsi256(suite.ansi256, 0);
          styles.bgColor.ansi256[key] = wrapAnsi256(suite.ansi256, 10);
        }
        if ("rgb" in suite) {
          styles.color.ansi16m[key] = wrapAnsi16m(suite.rgb, 0);
          styles.bgColor.ansi16m[key] = wrapAnsi16m(suite.rgb, 10);
        }
      }
      return styles;
    }
    __name(assembleStyles, "assembleStyles");
    Object.defineProperty(module, "exports", {
      enumerable: true,
      get: assembleStyles
    });
  }
});

// node_modules/log-symbols/node_modules/has-flag/index.js
var require_has_flag = __commonJS({
  "node_modules/log-symbols/node_modules/has-flag/index.js"(exports, module) {
    "use strict";
    module.exports = (flag, argv) => {
      argv = argv || process.argv;
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const pos = argv.indexOf(prefix + flag);
      const terminatorPos = argv.indexOf("--");
      return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
    };
  }
});

// node_modules/log-symbols/node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "node_modules/log-symbols/node_modules/supports-color/index.js"(exports, module) {
    "use strict";
    var os = __require("os");
    var hasFlag = require_has_flag();
    var env = process.env;
    var forceColor;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false")) {
      forceColor = false;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = true;
    }
    if ("FORCE_COLOR" in env) {
      forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    __name(translateLevel, "translateLevel");
    function supportsColor(stream) {
      if (forceColor === false) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (stream && !stream.isTTY && forceColor !== true) {
        return 0;
      }
      const min = forceColor ? 1 : 0;
      if (process.platform === "win32") {
        const osRelease = os.release().split(".");
        if (Number(process.versions.node.split(".")[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if ([
          "TRAVIS",
          "CIRCLECI",
          "APPVEYOR",
          "GITLAB_CI"
        ].some((sign) => sign in env) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      if (env.TERM === "dumb") {
        return min;
      }
      return min;
    }
    __name(supportsColor, "supportsColor");
    function getSupportLevel(stream) {
      const level = supportsColor(stream);
      return translateLevel(level);
    }
    __name(getSupportLevel, "getSupportLevel");
    module.exports = {
      supportsColor: getSupportLevel,
      stdout: getSupportLevel(process.stdout),
      stderr: getSupportLevel(process.stderr)
    };
  }
});

// node_modules/log-symbols/node_modules/chalk/templates.js
var require_templates = __commonJS({
  "node_modules/log-symbols/node_modules/chalk/templates.js"(exports, module) {
    "use strict";
    var TEMPLATE_REGEX = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
    var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
    var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
    var ESCAPE_REGEX = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi;
    var ESCAPES = /* @__PURE__ */ new Map([
      [
        "n",
        "\n"
      ],
      [
        "r",
        "\r"
      ],
      [
        "t",
        "	"
      ],
      [
        "b",
        "\b"
      ],
      [
        "f",
        "\f"
      ],
      [
        "v",
        "\v"
      ],
      [
        "0",
        "\0"
      ],
      [
        "\\",
        "\\"
      ],
      [
        "e",
        "\x1B"
      ],
      [
        "a",
        "\x07"
      ]
    ]);
    function unescape(c) {
      if (c[0] === "u" && c.length === 5 || c[0] === "x" && c.length === 3) {
        return String.fromCharCode(parseInt(c.slice(1), 16));
      }
      return ESCAPES.get(c) || c;
    }
    __name(unescape, "unescape");
    function parseArguments(name, args) {
      const results = [];
      const chunks = args.trim().split(/\s*,\s*/g);
      let matches;
      for (const chunk of chunks) {
        if (!isNaN(chunk)) {
          results.push(Number(chunk));
        } else if (matches = chunk.match(STRING_REGEX)) {
          results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, chr) => escape ? unescape(escape) : chr));
        } else {
          throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
        }
      }
      return results;
    }
    __name(parseArguments, "parseArguments");
    function parseStyle(style) {
      STYLE_REGEX.lastIndex = 0;
      const results = [];
      let matches;
      while ((matches = STYLE_REGEX.exec(style)) !== null) {
        const name = matches[1];
        if (matches[2]) {
          const args = parseArguments(name, matches[2]);
          results.push([
            name
          ].concat(args));
        } else {
          results.push([
            name
          ]);
        }
      }
      return results;
    }
    __name(parseStyle, "parseStyle");
    function buildStyle(chalk, styles) {
      const enabled = {};
      for (const layer of styles) {
        for (const style of layer.styles) {
          enabled[style[0]] = layer.inverse ? null : style.slice(1);
        }
      }
      let current = chalk;
      for (const styleName of Object.keys(enabled)) {
        if (Array.isArray(enabled[styleName])) {
          if (!(styleName in current)) {
            throw new Error(`Unknown Chalk style: ${styleName}`);
          }
          if (enabled[styleName].length > 0) {
            current = current[styleName].apply(current, enabled[styleName]);
          } else {
            current = current[styleName];
          }
        }
      }
      return current;
    }
    __name(buildStyle, "buildStyle");
    module.exports = (chalk, tmp) => {
      const styles = [];
      const chunks = [];
      let chunk = [];
      tmp.replace(TEMPLATE_REGEX, (m, escapeChar, inverse, style, close, chr) => {
        if (escapeChar) {
          chunk.push(unescape(escapeChar));
        } else if (style) {
          const str = chunk.join("");
          chunk = [];
          chunks.push(styles.length === 0 ? str : buildStyle(chalk, styles)(str));
          styles.push({
            inverse,
            styles: parseStyle(style)
          });
        } else if (close) {
          if (styles.length === 0) {
            throw new Error("Found extraneous } in Chalk template literal");
          }
          chunks.push(buildStyle(chalk, styles)(chunk.join("")));
          chunk = [];
          styles.pop();
        } else {
          chunk.push(chr);
        }
      });
      chunks.push(chunk.join(""));
      if (styles.length > 0) {
        const errMsg = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? "" : "s"} (\`}\`)`;
        throw new Error(errMsg);
      }
      return chunks.join("");
    };
  }
});

// node_modules/log-symbols/node_modules/chalk/index.js
var require_chalk = __commonJS({
  "node_modules/log-symbols/node_modules/chalk/index.js"(exports, module) {
    "use strict";
    var escapeStringRegexp = require_escape_string_regexp();
    var ansiStyles = require_ansi_styles();
    var stdoutColor = require_supports_color().stdout;
    var template = require_templates();
    var isSimpleWindowsTerm = process.platform === "win32" && !(process.env.TERM || "").toLowerCase().startsWith("xterm");
    var levelMapping = [
      "ansi",
      "ansi",
      "ansi256",
      "ansi16m"
    ];
    var skipModels = /* @__PURE__ */ new Set([
      "gray"
    ]);
    var styles = /* @__PURE__ */ Object.create(null);
    function applyOptions(obj, options) {
      options = options || {};
      const scLevel = stdoutColor ? stdoutColor.level : 0;
      obj.level = options.level === void 0 ? scLevel : options.level;
      obj.enabled = "enabled" in options ? options.enabled : obj.level > 0;
    }
    __name(applyOptions, "applyOptions");
    function Chalk(options) {
      if (!this || !(this instanceof Chalk) || this.template) {
        const chalk = {};
        applyOptions(chalk, options);
        chalk.template = function() {
          const args = [].slice.call(arguments);
          return chalkTag.apply(null, [
            chalk.template
          ].concat(args));
        };
        Object.setPrototypeOf(chalk, Chalk.prototype);
        Object.setPrototypeOf(chalk.template, chalk);
        chalk.template.constructor = Chalk;
        return chalk.template;
      }
      applyOptions(this, options);
    }
    __name(Chalk, "Chalk");
    if (isSimpleWindowsTerm) {
      ansiStyles.blue.open = "\x1B[94m";
    }
    for (const key of Object.keys(ansiStyles)) {
      ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), "g");
      styles[key] = {
        get() {
          const codes = ansiStyles[key];
          return build.call(this, this._styles ? this._styles.concat(codes) : [
            codes
          ], this._empty, key);
        }
      };
    }
    styles.visible = {
      get() {
        return build.call(this, this._styles || [], true, "visible");
      }
    };
    ansiStyles.color.closeRe = new RegExp(escapeStringRegexp(ansiStyles.color.close), "g");
    for (const model of Object.keys(ansiStyles.color.ansi)) {
      if (skipModels.has(model)) {
        continue;
      }
      styles[model] = {
        get() {
          const level = this.level;
          return function() {
            const open = ansiStyles.color[levelMapping[level]][model].apply(null, arguments);
            const codes = {
              open,
              close: ansiStyles.color.close,
              closeRe: ansiStyles.color.closeRe
            };
            return build.call(this, this._styles ? this._styles.concat(codes) : [
              codes
            ], this._empty, model);
          };
        }
      };
    }
    ansiStyles.bgColor.closeRe = new RegExp(escapeStringRegexp(ansiStyles.bgColor.close), "g");
    for (const model of Object.keys(ansiStyles.bgColor.ansi)) {
      if (skipModels.has(model)) {
        continue;
      }
      const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
      styles[bgModel] = {
        get() {
          const level = this.level;
          return function() {
            const open = ansiStyles.bgColor[levelMapping[level]][model].apply(null, arguments);
            const codes = {
              open,
              close: ansiStyles.bgColor.close,
              closeRe: ansiStyles.bgColor.closeRe
            };
            return build.call(this, this._styles ? this._styles.concat(codes) : [
              codes
            ], this._empty, model);
          };
        }
      };
    }
    var proto = Object.defineProperties(() => {
    }, styles);
    function build(_styles, _empty, key) {
      const builder = /* @__PURE__ */ __name(function() {
        return applyStyle.apply(builder, arguments);
      }, "builder");
      builder._styles = _styles;
      builder._empty = _empty;
      const self2 = this;
      Object.defineProperty(builder, "level", {
        enumerable: true,
        get() {
          return self2.level;
        },
        set(level) {
          self2.level = level;
        }
      });
      Object.defineProperty(builder, "enabled", {
        enumerable: true,
        get() {
          return self2.enabled;
        },
        set(enabled) {
          self2.enabled = enabled;
        }
      });
      builder.hasGrey = this.hasGrey || key === "gray" || key === "grey";
      builder.__proto__ = proto;
      return builder;
    }
    __name(build, "build");
    function applyStyle() {
      const args = arguments;
      const argsLen = args.length;
      let str = String(arguments[0]);
      if (argsLen === 0) {
        return "";
      }
      if (argsLen > 1) {
        for (let a = 1; a < argsLen; a++) {
          str += " " + args[a];
        }
      }
      if (!this.enabled || this.level <= 0 || !str) {
        return this._empty ? "" : str;
      }
      const originalDim = ansiStyles.dim.open;
      if (isSimpleWindowsTerm && this.hasGrey) {
        ansiStyles.dim.open = "";
      }
      for (const code of this._styles.slice().reverse()) {
        str = code.open + str.replace(code.closeRe, code.open) + code.close;
        str = str.replace(/\r?\n/g, `${code.close}$&${code.open}`);
      }
      ansiStyles.dim.open = originalDim;
      return str;
    }
    __name(applyStyle, "applyStyle");
    function chalkTag(chalk, strings) {
      if (!Array.isArray(strings)) {
        return [].slice.call(arguments, 1).join(" ");
      }
      const args = [].slice.call(arguments, 2);
      const parts = [
        strings.raw[0]
      ];
      for (let i = 1; i < strings.length; i++) {
        parts.push(String(args[i - 1]).replace(/[{}\\]/g, "\\$&"));
        parts.push(String(strings.raw[i]));
      }
      return template(chalk, parts.join(""));
    }
    __name(chalkTag, "chalkTag");
    Object.defineProperties(Chalk.prototype, styles);
    module.exports = Chalk();
    module.exports.supportsColor = stdoutColor;
    module.exports.default = module.exports;
  }
});

// node_modules/log-symbols/index.js
var require_log_symbols = __commonJS({
  "node_modules/log-symbols/index.js"(exports, module) {
    "use strict";
    var chalk = require_chalk();
    var isSupported = process.platform !== "win32" || process.env.CI || process.env.TERM === "xterm-256color";
    var main = {
      info: chalk.blue("\u2139"),
      success: chalk.green("\u2714"),
      warning: chalk.yellow("\u26A0"),
      error: chalk.red("\u2716")
    };
    var fallbacks = {
      info: chalk.blue("i"),
      success: chalk.green("\u221A"),
      warning: chalk.yellow("\u203C"),
      error: chalk.red("\xD7")
    };
    module.exports = isSupported ? main : fallbacks;
  }
});

// node_modules/color-name/index.js
var require_color_name2 = __commonJS({
  "node_modules/color-name/index.js"(exports, module) {
    "use strict";
    module.exports = {
      "aliceblue": [
        240,
        248,
        255
      ],
      "antiquewhite": [
        250,
        235,
        215
      ],
      "aqua": [
        0,
        255,
        255
      ],
      "aquamarine": [
        127,
        255,
        212
      ],
      "azure": [
        240,
        255,
        255
      ],
      "beige": [
        245,
        245,
        220
      ],
      "bisque": [
        255,
        228,
        196
      ],
      "black": [
        0,
        0,
        0
      ],
      "blanchedalmond": [
        255,
        235,
        205
      ],
      "blue": [
        0,
        0,
        255
      ],
      "blueviolet": [
        138,
        43,
        226
      ],
      "brown": [
        165,
        42,
        42
      ],
      "burlywood": [
        222,
        184,
        135
      ],
      "cadetblue": [
        95,
        158,
        160
      ],
      "chartreuse": [
        127,
        255,
        0
      ],
      "chocolate": [
        210,
        105,
        30
      ],
      "coral": [
        255,
        127,
        80
      ],
      "cornflowerblue": [
        100,
        149,
        237
      ],
      "cornsilk": [
        255,
        248,
        220
      ],
      "crimson": [
        220,
        20,
        60
      ],
      "cyan": [
        0,
        255,
        255
      ],
      "darkblue": [
        0,
        0,
        139
      ],
      "darkcyan": [
        0,
        139,
        139
      ],
      "darkgoldenrod": [
        184,
        134,
        11
      ],
      "darkgray": [
        169,
        169,
        169
      ],
      "darkgreen": [
        0,
        100,
        0
      ],
      "darkgrey": [
        169,
        169,
        169
      ],
      "darkkhaki": [
        189,
        183,
        107
      ],
      "darkmagenta": [
        139,
        0,
        139
      ],
      "darkolivegreen": [
        85,
        107,
        47
      ],
      "darkorange": [
        255,
        140,
        0
      ],
      "darkorchid": [
        153,
        50,
        204
      ],
      "darkred": [
        139,
        0,
        0
      ],
      "darksalmon": [
        233,
        150,
        122
      ],
      "darkseagreen": [
        143,
        188,
        143
      ],
      "darkslateblue": [
        72,
        61,
        139
      ],
      "darkslategray": [
        47,
        79,
        79
      ],
      "darkslategrey": [
        47,
        79,
        79
      ],
      "darkturquoise": [
        0,
        206,
        209
      ],
      "darkviolet": [
        148,
        0,
        211
      ],
      "deeppink": [
        255,
        20,
        147
      ],
      "deepskyblue": [
        0,
        191,
        255
      ],
      "dimgray": [
        105,
        105,
        105
      ],
      "dimgrey": [
        105,
        105,
        105
      ],
      "dodgerblue": [
        30,
        144,
        255
      ],
      "firebrick": [
        178,
        34,
        34
      ],
      "floralwhite": [
        255,
        250,
        240
      ],
      "forestgreen": [
        34,
        139,
        34
      ],
      "fuchsia": [
        255,
        0,
        255
      ],
      "gainsboro": [
        220,
        220,
        220
      ],
      "ghostwhite": [
        248,
        248,
        255
      ],
      "gold": [
        255,
        215,
        0
      ],
      "goldenrod": [
        218,
        165,
        32
      ],
      "gray": [
        128,
        128,
        128
      ],
      "green": [
        0,
        128,
        0
      ],
      "greenyellow": [
        173,
        255,
        47
      ],
      "grey": [
        128,
        128,
        128
      ],
      "honeydew": [
        240,
        255,
        240
      ],
      "hotpink": [
        255,
        105,
        180
      ],
      "indianred": [
        205,
        92,
        92
      ],
      "indigo": [
        75,
        0,
        130
      ],
      "ivory": [
        255,
        255,
        240
      ],
      "khaki": [
        240,
        230,
        140
      ],
      "lavender": [
        230,
        230,
        250
      ],
      "lavenderblush": [
        255,
        240,
        245
      ],
      "lawngreen": [
        124,
        252,
        0
      ],
      "lemonchiffon": [
        255,
        250,
        205
      ],
      "lightblue": [
        173,
        216,
        230
      ],
      "lightcoral": [
        240,
        128,
        128
      ],
      "lightcyan": [
        224,
        255,
        255
      ],
      "lightgoldenrodyellow": [
        250,
        250,
        210
      ],
      "lightgray": [
        211,
        211,
        211
      ],
      "lightgreen": [
        144,
        238,
        144
      ],
      "lightgrey": [
        211,
        211,
        211
      ],
      "lightpink": [
        255,
        182,
        193
      ],
      "lightsalmon": [
        255,
        160,
        122
      ],
      "lightseagreen": [
        32,
        178,
        170
      ],
      "lightskyblue": [
        135,
        206,
        250
      ],
      "lightslategray": [
        119,
        136,
        153
      ],
      "lightslategrey": [
        119,
        136,
        153
      ],
      "lightsteelblue": [
        176,
        196,
        222
      ],
      "lightyellow": [
        255,
        255,
        224
      ],
      "lime": [
        0,
        255,
        0
      ],
      "limegreen": [
        50,
        205,
        50
      ],
      "linen": [
        250,
        240,
        230
      ],
      "magenta": [
        255,
        0,
        255
      ],
      "maroon": [
        128,
        0,
        0
      ],
      "mediumaquamarine": [
        102,
        205,
        170
      ],
      "mediumblue": [
        0,
        0,
        205
      ],
      "mediumorchid": [
        186,
        85,
        211
      ],
      "mediumpurple": [
        147,
        112,
        219
      ],
      "mediumseagreen": [
        60,
        179,
        113
      ],
      "mediumslateblue": [
        123,
        104,
        238
      ],
      "mediumspringgreen": [
        0,
        250,
        154
      ],
      "mediumturquoise": [
        72,
        209,
        204
      ],
      "mediumvioletred": [
        199,
        21,
        133
      ],
      "midnightblue": [
        25,
        25,
        112
      ],
      "mintcream": [
        245,
        255,
        250
      ],
      "mistyrose": [
        255,
        228,
        225
      ],
      "moccasin": [
        255,
        228,
        181
      ],
      "navajowhite": [
        255,
        222,
        173
      ],
      "navy": [
        0,
        0,
        128
      ],
      "oldlace": [
        253,
        245,
        230
      ],
      "olive": [
        128,
        128,
        0
      ],
      "olivedrab": [
        107,
        142,
        35
      ],
      "orange": [
        255,
        165,
        0
      ],
      "orangered": [
        255,
        69,
        0
      ],
      "orchid": [
        218,
        112,
        214
      ],
      "palegoldenrod": [
        238,
        232,
        170
      ],
      "palegreen": [
        152,
        251,
        152
      ],
      "paleturquoise": [
        175,
        238,
        238
      ],
      "palevioletred": [
        219,
        112,
        147
      ],
      "papayawhip": [
        255,
        239,
        213
      ],
      "peachpuff": [
        255,
        218,
        185
      ],
      "peru": [
        205,
        133,
        63
      ],
      "pink": [
        255,
        192,
        203
      ],
      "plum": [
        221,
        160,
        221
      ],
      "powderblue": [
        176,
        224,
        230
      ],
      "purple": [
        128,
        0,
        128
      ],
      "rebeccapurple": [
        102,
        51,
        153
      ],
      "red": [
        255,
        0,
        0
      ],
      "rosybrown": [
        188,
        143,
        143
      ],
      "royalblue": [
        65,
        105,
        225
      ],
      "saddlebrown": [
        139,
        69,
        19
      ],
      "salmon": [
        250,
        128,
        114
      ],
      "sandybrown": [
        244,
        164,
        96
      ],
      "seagreen": [
        46,
        139,
        87
      ],
      "seashell": [
        255,
        245,
        238
      ],
      "sienna": [
        160,
        82,
        45
      ],
      "silver": [
        192,
        192,
        192
      ],
      "skyblue": [
        135,
        206,
        235
      ],
      "slateblue": [
        106,
        90,
        205
      ],
      "slategray": [
        112,
        128,
        144
      ],
      "slategrey": [
        112,
        128,
        144
      ],
      "snow": [
        255,
        250,
        250
      ],
      "springgreen": [
        0,
        255,
        127
      ],
      "steelblue": [
        70,
        130,
        180
      ],
      "tan": [
        210,
        180,
        140
      ],
      "teal": [
        0,
        128,
        128
      ],
      "thistle": [
        216,
        191,
        216
      ],
      "tomato": [
        255,
        99,
        71
      ],
      "turquoise": [
        64,
        224,
        208
      ],
      "violet": [
        238,
        130,
        238
      ],
      "wheat": [
        245,
        222,
        179
      ],
      "white": [
        255,
        255,
        255
      ],
      "whitesmoke": [
        245,
        245,
        245
      ],
      "yellow": [
        255,
        255,
        0
      ],
      "yellowgreen": [
        154,
        205,
        50
      ]
    };
  }
});

// node_modules/color-convert/conversions.js
var require_conversions2 = __commonJS({
  "node_modules/color-convert/conversions.js"(exports, module) {
    "use strict";
    var cssKeywords = require_color_name2();
    var reverseKeywords = {};
    for (const key of Object.keys(cssKeywords)) {
      reverseKeywords[cssKeywords[key]] = key;
    }
    var convert = {
      rgb: {
        channels: 3,
        labels: "rgb"
      },
      hsl: {
        channels: 3,
        labels: "hsl"
      },
      hsv: {
        channels: 3,
        labels: "hsv"
      },
      hwb: {
        channels: 3,
        labels: "hwb"
      },
      cmyk: {
        channels: 4,
        labels: "cmyk"
      },
      xyz: {
        channels: 3,
        labels: "xyz"
      },
      lab: {
        channels: 3,
        labels: "lab"
      },
      lch: {
        channels: 3,
        labels: "lch"
      },
      hex: {
        channels: 1,
        labels: [
          "hex"
        ]
      },
      keyword: {
        channels: 1,
        labels: [
          "keyword"
        ]
      },
      ansi16: {
        channels: 1,
        labels: [
          "ansi16"
        ]
      },
      ansi256: {
        channels: 1,
        labels: [
          "ansi256"
        ]
      },
      hcg: {
        channels: 3,
        labels: [
          "h",
          "c",
          "g"
        ]
      },
      apple: {
        channels: 3,
        labels: [
          "r16",
          "g16",
          "b16"
        ]
      },
      gray: {
        channels: 1,
        labels: [
          "gray"
        ]
      }
    };
    module.exports = convert;
    for (const model of Object.keys(convert)) {
      if (!("channels" in convert[model])) {
        throw new Error("missing channels property: " + model);
      }
      if (!("labels" in convert[model])) {
        throw new Error("missing channel labels property: " + model);
      }
      if (convert[model].labels.length !== convert[model].channels) {
        throw new Error("channel and label counts mismatch: " + model);
      }
      const { channels, labels } = convert[model];
      delete convert[model].channels;
      delete convert[model].labels;
      Object.defineProperty(convert[model], "channels", {
        value: channels
      });
      Object.defineProperty(convert[model], "labels", {
        value: labels
      });
    }
    convert.rgb.hsl = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const min = Math.min(r, g, b);
      const max = Math.max(r, g, b);
      const delta = max - min;
      let h;
      let s;
      if (max === min) {
        h = 0;
      } else if (r === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r) / delta;
      } else if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      const l = (min + max) / 2;
      if (max === min) {
        s = 0;
      } else if (l <= 0.5) {
        s = delta / (max + min);
      } else {
        s = delta / (2 - max - min);
      }
      return [
        h,
        s * 100,
        l * 100
      ];
    };
    convert.rgb.hsv = function(rgb) {
      let rdif;
      let gdif;
      let bdif;
      let h;
      let s;
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const v = Math.max(r, g, b);
      const diff = v - Math.min(r, g, b);
      const diffc = /* @__PURE__ */ __name(function(c) {
        return (v - c) / 6 / diff + 1 / 2;
      }, "diffc");
      if (diff === 0) {
        h = 0;
        s = 0;
      } else {
        s = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r === v) {
          h = bdif - gdif;
        } else if (g === v) {
          h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
          h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }
      return [
        h * 360,
        s * 100,
        v * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      const r = rgb[0];
      const g = rgb[1];
      let b = rgb[2];
      const h = convert.rgb.hsl(rgb)[0];
      const w = 1 / 255 * Math.min(r, Math.min(g, b));
      b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
      return [
        h,
        w * 100,
        b * 100
      ];
    };
    convert.rgb.cmyk = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const k = Math.min(1 - r, 1 - g, 1 - b);
      const c = (1 - r - k) / (1 - k) || 0;
      const m = (1 - g - k) / (1 - k) || 0;
      const y = (1 - b - k) / (1 - k) || 0;
      return [
        c * 100,
        m * 100,
        y * 100,
        k * 100
      ];
    };
    function comparativeDistance(x, y) {
      return __pow(x[0] - y[0], 2) + __pow(x[1] - y[1], 2) + __pow(x[2] - y[2], 2);
    }
    __name(comparativeDistance, "comparativeDistance");
    convert.rgb.keyword = function(rgb) {
      const reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      let currentClosestDistance = Infinity;
      let currentClosestKeyword;
      for (const keyword of Object.keys(cssKeywords)) {
        const value = cssKeywords[keyword];
        const distance = comparativeDistance(rgb, value);
        if (distance < currentClosestDistance) {
          currentClosestDistance = distance;
          currentClosestKeyword = keyword;
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      let r = rgb[0] / 255;
      let g = rgb[1] / 255;
      let b = rgb[2] / 255;
      r = r > 0.04045 ? __pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
      g = g > 0.04045 ? __pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
      b = b > 0.04045 ? __pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
      const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
      const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
      const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
      return [
        x * 100,
        y * 100,
        z * 100
      ];
    };
    convert.rgb.lab = function(rgb) {
      const xyz = convert.rgb.xyz(rgb);
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? __pow(x, 1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? __pow(y, 1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? __pow(z, 1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [
        l,
        a,
        b
      ];
    };
    convert.hsl.rgb = function(hsl) {
      const h = hsl[0] / 360;
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      let t2;
      let t3;
      let val;
      if (s === 0) {
        val = l * 255;
        return [
          val,
          val,
          val
        ];
      }
      if (l < 0.5) {
        t2 = l * (1 + s);
      } else {
        t2 = l + s - l * s;
      }
      const t1 = 2 * l - t2;
      const rgb = [
        0,
        0,
        0
      ];
      for (let i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i] = val * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      const h = hsl[0];
      let s = hsl[1] / 100;
      let l = hsl[2] / 100;
      let smin = s;
      const lmin = Math.max(l, 0.01);
      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      const v = (l + s) / 2;
      const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
      return [
        h,
        sv * 100,
        v * 100
      ];
    };
    convert.hsv.rgb = function(hsv) {
      const h = hsv[0] / 60;
      const s = hsv[1] / 100;
      let v = hsv[2] / 100;
      const hi = Math.floor(h) % 6;
      const f = h - Math.floor(h);
      const p = 255 * v * (1 - s);
      const q = 255 * v * (1 - s * f);
      const t = 255 * v * (1 - s * (1 - f));
      v *= 255;
      switch (hi) {
        case 0:
          return [
            v,
            t,
            p
          ];
        case 1:
          return [
            q,
            v,
            p
          ];
        case 2:
          return [
            p,
            v,
            t
          ];
        case 3:
          return [
            p,
            q,
            v
          ];
        case 4:
          return [
            t,
            p,
            v
          ];
        case 5:
          return [
            v,
            p,
            q
          ];
      }
    };
    convert.hsv.hsl = function(hsv) {
      const h = hsv[0];
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const vmin = Math.max(v, 0.01);
      let sl;
      let l;
      l = (2 - s) * v;
      const lmin = (2 - s) * vmin;
      sl = s * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l /= 2;
      return [
        h,
        sl * 100,
        l * 100
      ];
    };
    convert.hwb.rgb = function(hwb) {
      const h = hwb[0] / 360;
      let wh = hwb[1] / 100;
      let bl = hwb[2] / 100;
      const ratio = wh + bl;
      let f;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      const i = Math.floor(6 * h);
      const v = 1 - bl;
      f = 6 * h - i;
      if ((i & 1) !== 0) {
        f = 1 - f;
      }
      const n = wh + f * (v - wh);
      let r;
      let g;
      let b;
      switch (i) {
        default:
        case 6:
        case 0:
          r = v;
          g = n;
          b = wh;
          break;
        case 1:
          r = n;
          g = v;
          b = wh;
          break;
        case 2:
          r = wh;
          g = v;
          b = n;
          break;
        case 3:
          r = wh;
          g = n;
          b = v;
          break;
        case 4:
          r = n;
          g = wh;
          b = v;
          break;
        case 5:
          r = v;
          g = wh;
          b = n;
          break;
      }
      return [
        r * 255,
        g * 255,
        b * 255
      ];
    };
    convert.cmyk.rgb = function(cmyk) {
      const c = cmyk[0] / 100;
      const m = cmyk[1] / 100;
      const y = cmyk[2] / 100;
      const k = cmyk[3] / 100;
      const r = 1 - Math.min(1, c * (1 - k) + k);
      const g = 1 - Math.min(1, m * (1 - k) + k);
      const b = 1 - Math.min(1, y * (1 - k) + k);
      return [
        r * 255,
        g * 255,
        b * 255
      ];
    };
    convert.xyz.rgb = function(xyz) {
      const x = xyz[0] / 100;
      const y = xyz[1] / 100;
      const z = xyz[2] / 100;
      let r;
      let g;
      let b;
      r = x * 3.2406 + y * -1.5372 + z * -0.4986;
      g = x * -0.9689 + y * 1.8758 + z * 0.0415;
      b = x * 0.0557 + y * -0.204 + z * 1.057;
      r = r > 31308e-7 ? 1.055 * __pow(r, 1 / 2.4) - 0.055 : r * 12.92;
      g = g > 31308e-7 ? 1.055 * __pow(g, 1 / 2.4) - 0.055 : g * 12.92;
      b = b > 31308e-7 ? 1.055 * __pow(b, 1 / 2.4) - 0.055 : b * 12.92;
      r = Math.min(Math.max(0, r), 1);
      g = Math.min(Math.max(0, g), 1);
      b = Math.min(Math.max(0, b), 1);
      return [
        r * 255,
        g * 255,
        b * 255
      ];
    };
    convert.xyz.lab = function(xyz) {
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? __pow(x, 1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? __pow(y, 1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? __pow(z, 1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [
        l,
        a,
        b
      ];
    };
    convert.lab.xyz = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let x;
      let y;
      let z;
      y = (l + 16) / 116;
      x = a / 500 + y;
      z = y - b / 200;
      const y2 = __pow(y, 3);
      const x2 = __pow(x, 3);
      const z2 = __pow(z, 3);
      y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
      x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
      z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
      x *= 95.047;
      y *= 100;
      z *= 108.883;
      return [
        x,
        y,
        z
      ];
    };
    convert.lab.lch = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let h;
      const hr = Math.atan2(b, a);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      const c = Math.sqrt(a * a + b * b);
      return [
        l,
        c,
        h
      ];
    };
    convert.lch.lab = function(lch) {
      const l = lch[0];
      const c = lch[1];
      const h = lch[2];
      const hr = h / 360 * 2 * Math.PI;
      const a = c * Math.cos(hr);
      const b = c * Math.sin(hr);
      return [
        l,
        a,
        b
      ];
    };
    convert.rgb.ansi16 = function(args, saturation = null) {
      const [r, g, b] = args;
      let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args) {
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };
    convert.rgb.ansi256 = function(args) {
      const r = args[0];
      const g = args[1];
      const b = args[2];
      if (r === g && g === b) {
        if (r < 8) {
          return 16;
        }
        if (r > 248) {
          return 231;
        }
        return Math.round((r - 8) / 247 * 24) + 232;
      }
      const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args) {
      let color = args % 10;
      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [
          color,
          color,
          color
        ];
      }
      const mult = (~~(args > 50) + 1) * 0.5;
      const r = (color & 1) * mult * 255;
      const g = (color >> 1 & 1) * mult * 255;
      const b = (color >> 2 & 1) * mult * 255;
      return [
        r,
        g,
        b
      ];
    };
    convert.ansi256.rgb = function(args) {
      if (args >= 232) {
        const c = (args - 232) * 10 + 8;
        return [
          c,
          c,
          c
        ];
      }
      args -= 16;
      let rem;
      const r = Math.floor(args / 36) / 5 * 255;
      const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
      const b = rem % 6 / 5 * 255;
      return [
        r,
        g,
        b
      ];
    };
    convert.rgb.hex = function(args) {
      const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.hex.rgb = function(args) {
      const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [
          0,
          0,
          0
        ];
      }
      let colorString = match[0];
      if (match[0].length === 3) {
        colorString = colorString.split("").map((char) => {
          return char + char;
        }).join("");
      }
      const integer = parseInt(colorString, 16);
      const r = integer >> 16 & 255;
      const g = integer >> 8 & 255;
      const b = integer & 255;
      return [
        r,
        g,
        b
      ];
    };
    convert.rgb.hcg = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const max = Math.max(Math.max(r, g), b);
      const min = Math.min(Math.min(r, g), b);
      const chroma = max - min;
      let grayscale;
      let hue;
      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r) {
        hue = (g - b) / chroma % 6;
      } else if (max === g) {
        hue = 2 + (b - r) / chroma;
      } else {
        hue = 4 + (r - g) / chroma;
      }
      hue /= 6;
      hue %= 1;
      return [
        hue * 360,
        chroma * 100,
        grayscale * 100
      ];
    };
    convert.hsl.hcg = function(hsl) {
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
      let f = 0;
      if (c < 1) {
        f = (l - 0.5 * c) / (1 - c);
      }
      return [
        hsl[0],
        c * 100,
        f * 100
      ];
    };
    convert.hsv.hcg = function(hsv) {
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const c = s * v;
      let f = 0;
      if (c < 1) {
        f = (v - c) / (1 - c);
      }
      return [
        hsv[0],
        c * 100,
        f * 100
      ];
    };
    convert.hcg.rgb = function(hcg) {
      const h = hcg[0] / 360;
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      if (c === 0) {
        return [
          g * 255,
          g * 255,
          g * 255
        ];
      }
      const pure = [
        0,
        0,
        0
      ];
      const hi = h % 1 * 6;
      const v = hi % 1;
      const w = 1 - v;
      let mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
      }
      mg = (1 - c) * g;
      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      let f = 0;
      if (v > 0) {
        f = c / v;
      }
      return [
        hcg[0],
        f * 100,
        v * 100
      ];
    };
    convert.hcg.hsl = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const l = g * (1 - c) + 0.5 * c;
      let s = 0;
      if (l > 0 && l < 0.5) {
        s = c / (2 * l);
      } else if (l >= 0.5 && l < 1) {
        s = c / (2 * (1 - l));
      }
      return [
        hcg[0],
        s * 100,
        l * 100
      ];
    };
    convert.hcg.hwb = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      return [
        hcg[0],
        (v - c) * 100,
        (1 - v) * 100
      ];
    };
    convert.hwb.hcg = function(hwb) {
      const w = hwb[1] / 100;
      const b = hwb[2] / 100;
      const v = 1 - b;
      const c = v - w;
      let g = 0;
      if (c < 1) {
        g = (v - c) / (1 - c);
      }
      return [
        hwb[0],
        c * 100,
        g * 100
      ];
    };
    convert.apple.rgb = function(apple) {
      return [
        apple[0] / 65535 * 255,
        apple[1] / 65535 * 255,
        apple[2] / 65535 * 255
      ];
    };
    convert.rgb.apple = function(rgb) {
      return [
        rgb[0] / 255 * 65535,
        rgb[1] / 255 * 65535,
        rgb[2] / 255 * 65535
      ];
    };
    convert.gray.rgb = function(args) {
      return [
        args[0] / 100 * 255,
        args[0] / 100 * 255,
        args[0] / 100 * 255
      ];
    };
    convert.gray.hsl = function(args) {
      return [
        0,
        0,
        args[0]
      ];
    };
    convert.gray.hsv = convert.gray.hsl;
    convert.gray.hwb = function(gray) {
      return [
        0,
        100,
        gray[0]
      ];
    };
    convert.gray.cmyk = function(gray) {
      return [
        0,
        0,
        0,
        gray[0]
      ];
    };
    convert.gray.lab = function(gray) {
      return [
        gray[0],
        0,
        0
      ];
    };
    convert.gray.hex = function(gray) {
      const val = Math.round(gray[0] / 100 * 255) & 255;
      const integer = (val << 16) + (val << 8) + val;
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.rgb.gray = function(rgb) {
      const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [
        val / 255 * 100
      ];
    };
  }
});

// node_modules/color-convert/route.js
var require_route2 = __commonJS({
  "node_modules/color-convert/route.js"(exports, module) {
    "use strict";
    var conversions = require_conversions2();
    function buildGraph() {
      const graph = {};
      const models = Object.keys(conversions);
      for (let len = models.length, i = 0; i < len; i++) {
        graph[models[i]] = {
          // http://jsperf.com/1-vs-infinity
          // micro-opt, but this is simple.
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    __name(buildGraph, "buildGraph");
    function deriveBFS(fromModel) {
      const graph = buildGraph();
      const queue = [
        fromModel
      ];
      graph[fromModel].distance = 0;
      while (queue.length) {
        const current = queue.pop();
        const adjacents = Object.keys(conversions[current]);
        for (let len = adjacents.length, i = 0; i < len; i++) {
          const adjacent = adjacents[i];
          const node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    __name(deriveBFS, "deriveBFS");
    function link(from, to) {
      return function(args) {
        return to(from(args));
      };
    }
    __name(link, "link");
    function wrapConversion(toModel, graph) {
      const path4 = [
        graph[toModel].parent,
        toModel
      ];
      let fn = conversions[graph[toModel].parent][toModel];
      let cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path4.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path4;
      return fn;
    }
    __name(wrapConversion, "wrapConversion");
    module.exports = function(fromModel) {
      const graph = deriveBFS(fromModel);
      const conversion = {};
      const models = Object.keys(graph);
      for (let len = models.length, i = 0; i < len; i++) {
        const toModel = models[i];
        const node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
  }
});

// node_modules/color-convert/index.js
var require_color_convert2 = __commonJS({
  "node_modules/color-convert/index.js"(exports, module) {
    "use strict";
    var conversions = require_conversions2();
    var route = require_route2();
    var convert = {};
    var models = Object.keys(conversions);
    function wrapRaw(fn) {
      const wrappedFn = /* @__PURE__ */ __name(function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        return fn(args);
      }, "wrappedFn");
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    __name(wrapRaw, "wrapRaw");
    function wrapRounded(fn) {
      const wrappedFn = /* @__PURE__ */ __name(function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        const result = fn(args);
        if (typeof result === "object") {
          for (let len = result.length, i = 0; i < len; i++) {
            result[i] = Math.round(result[i]);
          }
        }
        return result;
      }, "wrappedFn");
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    __name(wrapRounded, "wrapRounded");
    models.forEach((fromModel) => {
      convert[fromModel] = {};
      Object.defineProperty(convert[fromModel], "channels", {
        value: conversions[fromModel].channels
      });
      Object.defineProperty(convert[fromModel], "labels", {
        value: conversions[fromModel].labels
      });
      const routes = route(fromModel);
      const routeModels = Object.keys(routes);
      routeModels.forEach((toModel) => {
        const fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
      });
    });
    module.exports = convert;
  }
});

// node_modules/ansi-styles/index.js
var require_ansi_styles2 = __commonJS({
  "node_modules/ansi-styles/index.js"(exports, module) {
    "use strict";
    var wrapAnsi16 = /* @__PURE__ */ __name((fn, offset) => (...args) => {
      const code = fn(...args);
      return `\x1B[${code + offset}m`;
    }, "wrapAnsi16");
    var wrapAnsi256 = /* @__PURE__ */ __name((fn, offset) => (...args) => {
      const code = fn(...args);
      return `\x1B[${38 + offset};5;${code}m`;
    }, "wrapAnsi256");
    var wrapAnsi16m = /* @__PURE__ */ __name((fn, offset) => (...args) => {
      const rgb = fn(...args);
      return `\x1B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
    }, "wrapAnsi16m");
    var ansi2ansi = /* @__PURE__ */ __name((n) => n, "ansi2ansi");
    var rgb2rgb = /* @__PURE__ */ __name((r, g, b) => [
      r,
      g,
      b
    ], "rgb2rgb");
    var setLazyProperty = /* @__PURE__ */ __name((object, property, get) => {
      Object.defineProperty(object, property, {
        get: /* @__PURE__ */ __name(() => {
          const value = get();
          Object.defineProperty(object, property, {
            value,
            enumerable: true,
            configurable: true
          });
          return value;
        }, "get"),
        enumerable: true,
        configurable: true
      });
    }, "setLazyProperty");
    var colorConvert;
    var makeDynamicStyles = /* @__PURE__ */ __name((wrap, targetSpace, identity, isBackground) => {
      if (colorConvert === void 0) {
        colorConvert = require_color_convert2();
      }
      const offset = isBackground ? 10 : 0;
      const styles = {};
      for (const [sourceSpace, suite] of Object.entries(colorConvert)) {
        const name = sourceSpace === "ansi16" ? "ansi" : sourceSpace;
        if (sourceSpace === targetSpace) {
          styles[name] = wrap(identity, offset);
        } else if (typeof suite === "object") {
          styles[name] = wrap(suite[targetSpace], offset);
        }
      }
      return styles;
    }, "makeDynamicStyles");
    function assembleStyles() {
      const codes = /* @__PURE__ */ new Map();
      const styles = {
        modifier: {
          reset: [
            0,
            0
          ],
          // 21 isn't widely supported and 22 does the same thing
          bold: [
            1,
            22
          ],
          dim: [
            2,
            22
          ],
          italic: [
            3,
            23
          ],
          underline: [
            4,
            24
          ],
          inverse: [
            7,
            27
          ],
          hidden: [
            8,
            28
          ],
          strikethrough: [
            9,
            29
          ]
        },
        color: {
          black: [
            30,
            39
          ],
          red: [
            31,
            39
          ],
          green: [
            32,
            39
          ],
          yellow: [
            33,
            39
          ],
          blue: [
            34,
            39
          ],
          magenta: [
            35,
            39
          ],
          cyan: [
            36,
            39
          ],
          white: [
            37,
            39
          ],
          // Bright color
          blackBright: [
            90,
            39
          ],
          redBright: [
            91,
            39
          ],
          greenBright: [
            92,
            39
          ],
          yellowBright: [
            93,
            39
          ],
          blueBright: [
            94,
            39
          ],
          magentaBright: [
            95,
            39
          ],
          cyanBright: [
            96,
            39
          ],
          whiteBright: [
            97,
            39
          ]
        },
        bgColor: {
          bgBlack: [
            40,
            49
          ],
          bgRed: [
            41,
            49
          ],
          bgGreen: [
            42,
            49
          ],
          bgYellow: [
            43,
            49
          ],
          bgBlue: [
            44,
            49
          ],
          bgMagenta: [
            45,
            49
          ],
          bgCyan: [
            46,
            49
          ],
          bgWhite: [
            47,
            49
          ],
          // Bright color
          bgBlackBright: [
            100,
            49
          ],
          bgRedBright: [
            101,
            49
          ],
          bgGreenBright: [
            102,
            49
          ],
          bgYellowBright: [
            103,
            49
          ],
          bgBlueBright: [
            104,
            49
          ],
          bgMagentaBright: [
            105,
            49
          ],
          bgCyanBright: [
            106,
            49
          ],
          bgWhiteBright: [
            107,
            49
          ]
        }
      };
      styles.color.gray = styles.color.blackBright;
      styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
      styles.color.grey = styles.color.blackBright;
      styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
      for (const [groupName, group] of Object.entries(styles)) {
        for (const [styleName, style] of Object.entries(group)) {
          styles[styleName] = {
            open: `\x1B[${style[0]}m`,
            close: `\x1B[${style[1]}m`
          };
          group[styleName] = styles[styleName];
          codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles, groupName, {
          value: group,
          enumerable: false
        });
      }
      Object.defineProperty(styles, "codes", {
        value: codes,
        enumerable: false
      });
      styles.color.close = "\x1B[39m";
      styles.bgColor.close = "\x1B[49m";
      setLazyProperty(styles.color, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, false));
      setLazyProperty(styles.color, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, false));
      setLazyProperty(styles.color, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, false));
      setLazyProperty(styles.bgColor, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, true));
      setLazyProperty(styles.bgColor, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, true));
      setLazyProperty(styles.bgColor, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, true));
      return styles;
    }
    __name(assembleStyles, "assembleStyles");
    Object.defineProperty(module, "exports", {
      enumerable: true,
      get: assembleStyles
    });
  }
});

// node_modules/has-flag/index.js
var require_has_flag2 = __commonJS({
  "node_modules/has-flag/index.js"(exports, module) {
    "use strict";
    module.exports = (flag, argv = process.argv) => {
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const position = argv.indexOf(prefix + flag);
      const terminatorPosition = argv.indexOf("--");
      return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
    };
  }
});

// node_modules/supports-color/index.js
var require_supports_color2 = __commonJS({
  "node_modules/supports-color/index.js"(exports, module) {
    "use strict";
    var os = __require("os");
    var tty = __require("tty");
    var hasFlag = require_has_flag2();
    var { env } = process;
    var forceColor;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
      forceColor = 0;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = 1;
    }
    if ("FORCE_COLOR" in env) {
      if (env.FORCE_COLOR === "true") {
        forceColor = 1;
      } else if (env.FORCE_COLOR === "false") {
        forceColor = 0;
      } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
      }
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    __name(translateLevel, "translateLevel");
    function supportsColor(haveStream, streamIsTTY) {
      if (forceColor === 0) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (haveStream && !streamIsTTY && forceColor === void 0) {
        return 0;
      }
      const min = forceColor || 0;
      if (env.TERM === "dumb") {
        return min;
      }
      if (process.platform === "win32") {
        const osRelease = os.release().split(".");
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if ([
          "TRAVIS",
          "CIRCLECI",
          "APPVEYOR",
          "GITLAB_CI",
          "GITHUB_ACTIONS",
          "BUILDKITE"
        ].some((sign) => sign in env) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      return min;
    }
    __name(supportsColor, "supportsColor");
    function getSupportLevel(stream) {
      const level = supportsColor(stream, stream && stream.isTTY);
      return translateLevel(level);
    }
    __name(getSupportLevel, "getSupportLevel");
    module.exports = {
      supportsColor: getSupportLevel,
      stdout: translateLevel(supportsColor(true, tty.isatty(1))),
      stderr: translateLevel(supportsColor(true, tty.isatty(2)))
    };
  }
});

// node_modules/chalk/source/util.js
var require_util = __commonJS({
  "node_modules/chalk/source/util.js"(exports, module) {
    "use strict";
    var stringReplaceAll = /* @__PURE__ */ __name((string, substring, replacer) => {
      let index = string.indexOf(substring);
      if (index === -1) {
        return string;
      }
      const substringLength = substring.length;
      let endIndex = 0;
      let returnValue = "";
      do {
        returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
        endIndex = index + substringLength;
        index = string.indexOf(substring, endIndex);
      } while (index !== -1);
      returnValue += string.substr(endIndex);
      return returnValue;
    }, "stringReplaceAll");
    var stringEncaseCRLFWithFirstIndex = /* @__PURE__ */ __name((string, prefix, postfix, index) => {
      let endIndex = 0;
      let returnValue = "";
      do {
        const gotCR = string[index - 1] === "\r";
        returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
        endIndex = index + 1;
        index = string.indexOf("\n", endIndex);
      } while (index !== -1);
      returnValue += string.substr(endIndex);
      return returnValue;
    }, "stringEncaseCRLFWithFirstIndex");
    module.exports = {
      stringReplaceAll,
      stringEncaseCRLFWithFirstIndex
    };
  }
});

// node_modules/chalk/source/templates.js
var require_templates2 = __commonJS({
  "node_modules/chalk/source/templates.js"(exports, module) {
    "use strict";
    var TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
    var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
    var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
    var ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.)|([^\\])/gi;
    var ESCAPES = /* @__PURE__ */ new Map([
      [
        "n",
        "\n"
      ],
      [
        "r",
        "\r"
      ],
      [
        "t",
        "	"
      ],
      [
        "b",
        "\b"
      ],
      [
        "f",
        "\f"
      ],
      [
        "v",
        "\v"
      ],
      [
        "0",
        "\0"
      ],
      [
        "\\",
        "\\"
      ],
      [
        "e",
        "\x1B"
      ],
      [
        "a",
        "\x07"
      ]
    ]);
    function unescape(c) {
      const u = c[0] === "u";
      const bracket = c[1] === "{";
      if (u && !bracket && c.length === 5 || c[0] === "x" && c.length === 3) {
        return String.fromCharCode(parseInt(c.slice(1), 16));
      }
      if (u && bracket) {
        return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
      }
      return ESCAPES.get(c) || c;
    }
    __name(unescape, "unescape");
    function parseArguments(name, arguments_) {
      const results = [];
      const chunks = arguments_.trim().split(/\s*,\s*/g);
      let matches;
      for (const chunk of chunks) {
        const number = Number(chunk);
        if (!Number.isNaN(number)) {
          results.push(number);
        } else if (matches = chunk.match(STRING_REGEX)) {
          results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, character) => escape ? unescape(escape) : character));
        } else {
          throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
        }
      }
      return results;
    }
    __name(parseArguments, "parseArguments");
    function parseStyle(style) {
      STYLE_REGEX.lastIndex = 0;
      const results = [];
      let matches;
      while ((matches = STYLE_REGEX.exec(style)) !== null) {
        const name = matches[1];
        if (matches[2]) {
          const args = parseArguments(name, matches[2]);
          results.push([
            name
          ].concat(args));
        } else {
          results.push([
            name
          ]);
        }
      }
      return results;
    }
    __name(parseStyle, "parseStyle");
    function buildStyle(chalk, styles) {
      const enabled = {};
      for (const layer of styles) {
        for (const style of layer.styles) {
          enabled[style[0]] = layer.inverse ? null : style.slice(1);
        }
      }
      let current = chalk;
      for (const [styleName, styles2] of Object.entries(enabled)) {
        if (!Array.isArray(styles2)) {
          continue;
        }
        if (!(styleName in current)) {
          throw new Error(`Unknown Chalk style: ${styleName}`);
        }
        current = styles2.length > 0 ? current[styleName](...styles2) : current[styleName];
      }
      return current;
    }
    __name(buildStyle, "buildStyle");
    module.exports = (chalk, temporary) => {
      const styles = [];
      const chunks = [];
      let chunk = [];
      temporary.replace(TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character) => {
        if (escapeCharacter) {
          chunk.push(unescape(escapeCharacter));
        } else if (style) {
          const string = chunk.join("");
          chunk = [];
          chunks.push(styles.length === 0 ? string : buildStyle(chalk, styles)(string));
          styles.push({
            inverse,
            styles: parseStyle(style)
          });
        } else if (close) {
          if (styles.length === 0) {
            throw new Error("Found extraneous } in Chalk template literal");
          }
          chunks.push(buildStyle(chalk, styles)(chunk.join("")));
          chunk = [];
          styles.pop();
        } else {
          chunk.push(character);
        }
      });
      chunks.push(chunk.join(""));
      if (styles.length > 0) {
        const errMsg = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? "" : "s"} (\`}\`)`;
        throw new Error(errMsg);
      }
      return chunks.join("");
    };
  }
});

// node_modules/chalk/source/index.js
var require_source = __commonJS({
  "node_modules/chalk/source/index.js"(exports, module) {
    "use strict";
    var ansiStyles = require_ansi_styles2();
    var { stdout: stdoutColor, stderr: stderrColor } = require_supports_color2();
    var { stringReplaceAll, stringEncaseCRLFWithFirstIndex } = require_util();
    var levelMapping = [
      "ansi",
      "ansi",
      "ansi256",
      "ansi16m"
    ];
    var styles = /* @__PURE__ */ Object.create(null);
    var applyOptions = /* @__PURE__ */ __name((object, options = {}) => {
      if (options.level > 3 || options.level < 0) {
        throw new Error("The `level` option should be an integer from 0 to 3");
      }
      const colorLevel = stdoutColor ? stdoutColor.level : 0;
      object.level = options.level === void 0 ? colorLevel : options.level;
    }, "applyOptions");
    var _a;
    var ChalkClass = (_a = class {
      constructor(options) {
        return chalkFactory(options);
      }
    }, __name(_a, "ChalkClass"), _a);
    var chalkFactory = /* @__PURE__ */ __name((options) => {
      const chalk2 = {};
      applyOptions(chalk2, options);
      chalk2.template = (...arguments_) => chalkTag(chalk2.template, ...arguments_);
      Object.setPrototypeOf(chalk2, Chalk.prototype);
      Object.setPrototypeOf(chalk2.template, chalk2);
      chalk2.template.constructor = () => {
        throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
      };
      chalk2.template.Instance = ChalkClass;
      return chalk2.template;
    }, "chalkFactory");
    function Chalk(options) {
      return chalkFactory(options);
    }
    __name(Chalk, "Chalk");
    for (const [styleName, style] of Object.entries(ansiStyles)) {
      styles[styleName] = {
        get() {
          const builder = createBuilder(this, createStyler(style.open, style.close, this._styler), this._isEmpty);
          Object.defineProperty(this, styleName, {
            value: builder
          });
          return builder;
        }
      };
    }
    styles.visible = {
      get() {
        const builder = createBuilder(this, this._styler, true);
        Object.defineProperty(this, "visible", {
          value: builder
        });
        return builder;
      }
    };
    var usedModels = [
      "rgb",
      "hex",
      "keyword",
      "hsl",
      "hsv",
      "hwb",
      "ansi",
      "ansi256"
    ];
    for (const model of usedModels) {
      styles[model] = {
        get() {
          const { level } = this;
          return function(...arguments_) {
            const styler = createStyler(ansiStyles.color[levelMapping[level]][model](...arguments_), ansiStyles.color.close, this._styler);
            return createBuilder(this, styler, this._isEmpty);
          };
        }
      };
    }
    for (const model of usedModels) {
      const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
      styles[bgModel] = {
        get() {
          const { level } = this;
          return function(...arguments_) {
            const styler = createStyler(ansiStyles.bgColor[levelMapping[level]][model](...arguments_), ansiStyles.bgColor.close, this._styler);
            return createBuilder(this, styler, this._isEmpty);
          };
        }
      };
    }
    var proto = Object.defineProperties(() => {
    }, __spreadProps(__spreadValues({}, styles), {
      level: {
        enumerable: true,
        get() {
          return this._generator.level;
        },
        set(level) {
          this._generator.level = level;
        }
      }
    }));
    var createStyler = /* @__PURE__ */ __name((open, close, parent) => {
      let openAll;
      let closeAll;
      if (parent === void 0) {
        openAll = open;
        closeAll = close;
      } else {
        openAll = parent.openAll + open;
        closeAll = close + parent.closeAll;
      }
      return {
        open,
        close,
        openAll,
        closeAll,
        parent
      };
    }, "createStyler");
    var createBuilder = /* @__PURE__ */ __name((self2, _styler, _isEmpty) => {
      const builder = /* @__PURE__ */ __name((...arguments_) => {
        return applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
      }, "builder");
      builder.__proto__ = proto;
      builder._generator = self2;
      builder._styler = _styler;
      builder._isEmpty = _isEmpty;
      return builder;
    }, "createBuilder");
    var applyStyle = /* @__PURE__ */ __name((self2, string) => {
      if (self2.level <= 0 || !string) {
        return self2._isEmpty ? "" : string;
      }
      let styler = self2._styler;
      if (styler === void 0) {
        return string;
      }
      const { openAll, closeAll } = styler;
      if (string.indexOf("\x1B") !== -1) {
        while (styler !== void 0) {
          string = stringReplaceAll(string, styler.close, styler.open);
          styler = styler.parent;
        }
      }
      const lfIndex = string.indexOf("\n");
      if (lfIndex !== -1) {
        string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
      }
      return openAll + string + closeAll;
    }, "applyStyle");
    var template;
    var chalkTag = /* @__PURE__ */ __name((chalk2, ...strings) => {
      const [firstString] = strings;
      if (!Array.isArray(firstString)) {
        return strings.join(" ");
      }
      const arguments_ = strings.slice(1);
      const parts = [
        firstString.raw[0]
      ];
      for (let i = 1; i < firstString.length; i++) {
        parts.push(String(arguments_[i - 1]).replace(/[{}\\]/g, "\\$&"), String(firstString.raw[i]));
      }
      if (template === void 0) {
        template = require_templates2();
      }
      return template(chalk2, parts.join(""));
    }, "chalkTag");
    Object.defineProperties(Chalk.prototype, styles);
    var chalk = Chalk();
    chalk.supportsColor = stdoutColor;
    chalk.stderr = Chalk({
      level: stderrColor ? stderrColor.level : 0
    });
    chalk.stderr.supportsColor = stderrColor;
    chalk.Level = {
      None: 0,
      Basic: 1,
      Ansi256: 2,
      TrueColor: 3,
      0: "None",
      1: "Basic",
      2: "Ansi256",
      3: "TrueColor"
    };
    module.exports = chalk;
  }
});

// node_modules/cli-check-node/index.js
var require_cli_check_node = __commonJS({
  "node_modules/cli-check-node/index.js"(exports, module) {
    "use strict";
    var currentNodeVersion = process.versions.node;
    var semver = currentNodeVersion.split(".");
    var major = semver[0];
    var sym = require_log_symbols();
    var chalk = require_source();
    module.exports = (requiredNodeVersion, options) => {
      const defaultOptions = {
        fail: true
      };
      const finalOptions = __spreadValues(__spreadValues({}, defaultOptions), options);
      const fail = `
${sym.error} ${chalk.red(`Node version issue!`)}

You are running Node version: ${chalk.red(currentNodeVersion)}
Required version of Node is: ${chalk.green(requiredNodeVersion)} or higher.

${sym.info} Please update your version of Node.js to run this program.
${sym.info} https://nodejs.org/en/download 
`;
      if (major < Math.abs(requiredNodeVersion)) {
        console.error(fail);
        finalOptions.fail && process.exit(1);
        return fail;
      }
    };
  }
});

// node_modules/cli-welcome/node_modules/color-name/index.js
var require_color_name3 = __commonJS({
  "node_modules/cli-welcome/node_modules/color-name/index.js"(exports, module) {
    "use strict";
    module.exports = {
      "aliceblue": [
        240,
        248,
        255
      ],
      "antiquewhite": [
        250,
        235,
        215
      ],
      "aqua": [
        0,
        255,
        255
      ],
      "aquamarine": [
        127,
        255,
        212
      ],
      "azure": [
        240,
        255,
        255
      ],
      "beige": [
        245,
        245,
        220
      ],
      "bisque": [
        255,
        228,
        196
      ],
      "black": [
        0,
        0,
        0
      ],
      "blanchedalmond": [
        255,
        235,
        205
      ],
      "blue": [
        0,
        0,
        255
      ],
      "blueviolet": [
        138,
        43,
        226
      ],
      "brown": [
        165,
        42,
        42
      ],
      "burlywood": [
        222,
        184,
        135
      ],
      "cadetblue": [
        95,
        158,
        160
      ],
      "chartreuse": [
        127,
        255,
        0
      ],
      "chocolate": [
        210,
        105,
        30
      ],
      "coral": [
        255,
        127,
        80
      ],
      "cornflowerblue": [
        100,
        149,
        237
      ],
      "cornsilk": [
        255,
        248,
        220
      ],
      "crimson": [
        220,
        20,
        60
      ],
      "cyan": [
        0,
        255,
        255
      ],
      "darkblue": [
        0,
        0,
        139
      ],
      "darkcyan": [
        0,
        139,
        139
      ],
      "darkgoldenrod": [
        184,
        134,
        11
      ],
      "darkgray": [
        169,
        169,
        169
      ],
      "darkgreen": [
        0,
        100,
        0
      ],
      "darkgrey": [
        169,
        169,
        169
      ],
      "darkkhaki": [
        189,
        183,
        107
      ],
      "darkmagenta": [
        139,
        0,
        139
      ],
      "darkolivegreen": [
        85,
        107,
        47
      ],
      "darkorange": [
        255,
        140,
        0
      ],
      "darkorchid": [
        153,
        50,
        204
      ],
      "darkred": [
        139,
        0,
        0
      ],
      "darksalmon": [
        233,
        150,
        122
      ],
      "darkseagreen": [
        143,
        188,
        143
      ],
      "darkslateblue": [
        72,
        61,
        139
      ],
      "darkslategray": [
        47,
        79,
        79
      ],
      "darkslategrey": [
        47,
        79,
        79
      ],
      "darkturquoise": [
        0,
        206,
        209
      ],
      "darkviolet": [
        148,
        0,
        211
      ],
      "deeppink": [
        255,
        20,
        147
      ],
      "deepskyblue": [
        0,
        191,
        255
      ],
      "dimgray": [
        105,
        105,
        105
      ],
      "dimgrey": [
        105,
        105,
        105
      ],
      "dodgerblue": [
        30,
        144,
        255
      ],
      "firebrick": [
        178,
        34,
        34
      ],
      "floralwhite": [
        255,
        250,
        240
      ],
      "forestgreen": [
        34,
        139,
        34
      ],
      "fuchsia": [
        255,
        0,
        255
      ],
      "gainsboro": [
        220,
        220,
        220
      ],
      "ghostwhite": [
        248,
        248,
        255
      ],
      "gold": [
        255,
        215,
        0
      ],
      "goldenrod": [
        218,
        165,
        32
      ],
      "gray": [
        128,
        128,
        128
      ],
      "green": [
        0,
        128,
        0
      ],
      "greenyellow": [
        173,
        255,
        47
      ],
      "grey": [
        128,
        128,
        128
      ],
      "honeydew": [
        240,
        255,
        240
      ],
      "hotpink": [
        255,
        105,
        180
      ],
      "indianred": [
        205,
        92,
        92
      ],
      "indigo": [
        75,
        0,
        130
      ],
      "ivory": [
        255,
        255,
        240
      ],
      "khaki": [
        240,
        230,
        140
      ],
      "lavender": [
        230,
        230,
        250
      ],
      "lavenderblush": [
        255,
        240,
        245
      ],
      "lawngreen": [
        124,
        252,
        0
      ],
      "lemonchiffon": [
        255,
        250,
        205
      ],
      "lightblue": [
        173,
        216,
        230
      ],
      "lightcoral": [
        240,
        128,
        128
      ],
      "lightcyan": [
        224,
        255,
        255
      ],
      "lightgoldenrodyellow": [
        250,
        250,
        210
      ],
      "lightgray": [
        211,
        211,
        211
      ],
      "lightgreen": [
        144,
        238,
        144
      ],
      "lightgrey": [
        211,
        211,
        211
      ],
      "lightpink": [
        255,
        182,
        193
      ],
      "lightsalmon": [
        255,
        160,
        122
      ],
      "lightseagreen": [
        32,
        178,
        170
      ],
      "lightskyblue": [
        135,
        206,
        250
      ],
      "lightslategray": [
        119,
        136,
        153
      ],
      "lightslategrey": [
        119,
        136,
        153
      ],
      "lightsteelblue": [
        176,
        196,
        222
      ],
      "lightyellow": [
        255,
        255,
        224
      ],
      "lime": [
        0,
        255,
        0
      ],
      "limegreen": [
        50,
        205,
        50
      ],
      "linen": [
        250,
        240,
        230
      ],
      "magenta": [
        255,
        0,
        255
      ],
      "maroon": [
        128,
        0,
        0
      ],
      "mediumaquamarine": [
        102,
        205,
        170
      ],
      "mediumblue": [
        0,
        0,
        205
      ],
      "mediumorchid": [
        186,
        85,
        211
      ],
      "mediumpurple": [
        147,
        112,
        219
      ],
      "mediumseagreen": [
        60,
        179,
        113
      ],
      "mediumslateblue": [
        123,
        104,
        238
      ],
      "mediumspringgreen": [
        0,
        250,
        154
      ],
      "mediumturquoise": [
        72,
        209,
        204
      ],
      "mediumvioletred": [
        199,
        21,
        133
      ],
      "midnightblue": [
        25,
        25,
        112
      ],
      "mintcream": [
        245,
        255,
        250
      ],
      "mistyrose": [
        255,
        228,
        225
      ],
      "moccasin": [
        255,
        228,
        181
      ],
      "navajowhite": [
        255,
        222,
        173
      ],
      "navy": [
        0,
        0,
        128
      ],
      "oldlace": [
        253,
        245,
        230
      ],
      "olive": [
        128,
        128,
        0
      ],
      "olivedrab": [
        107,
        142,
        35
      ],
      "orange": [
        255,
        165,
        0
      ],
      "orangered": [
        255,
        69,
        0
      ],
      "orchid": [
        218,
        112,
        214
      ],
      "palegoldenrod": [
        238,
        232,
        170
      ],
      "palegreen": [
        152,
        251,
        152
      ],
      "paleturquoise": [
        175,
        238,
        238
      ],
      "palevioletred": [
        219,
        112,
        147
      ],
      "papayawhip": [
        255,
        239,
        213
      ],
      "peachpuff": [
        255,
        218,
        185
      ],
      "peru": [
        205,
        133,
        63
      ],
      "pink": [
        255,
        192,
        203
      ],
      "plum": [
        221,
        160,
        221
      ],
      "powderblue": [
        176,
        224,
        230
      ],
      "purple": [
        128,
        0,
        128
      ],
      "rebeccapurple": [
        102,
        51,
        153
      ],
      "red": [
        255,
        0,
        0
      ],
      "rosybrown": [
        188,
        143,
        143
      ],
      "royalblue": [
        65,
        105,
        225
      ],
      "saddlebrown": [
        139,
        69,
        19
      ],
      "salmon": [
        250,
        128,
        114
      ],
      "sandybrown": [
        244,
        164,
        96
      ],
      "seagreen": [
        46,
        139,
        87
      ],
      "seashell": [
        255,
        245,
        238
      ],
      "sienna": [
        160,
        82,
        45
      ],
      "silver": [
        192,
        192,
        192
      ],
      "skyblue": [
        135,
        206,
        235
      ],
      "slateblue": [
        106,
        90,
        205
      ],
      "slategray": [
        112,
        128,
        144
      ],
      "slategrey": [
        112,
        128,
        144
      ],
      "snow": [
        255,
        250,
        250
      ],
      "springgreen": [
        0,
        255,
        127
      ],
      "steelblue": [
        70,
        130,
        180
      ],
      "tan": [
        210,
        180,
        140
      ],
      "teal": [
        0,
        128,
        128
      ],
      "thistle": [
        216,
        191,
        216
      ],
      "tomato": [
        255,
        99,
        71
      ],
      "turquoise": [
        64,
        224,
        208
      ],
      "violet": [
        238,
        130,
        238
      ],
      "wheat": [
        245,
        222,
        179
      ],
      "white": [
        255,
        255,
        255
      ],
      "whitesmoke": [
        245,
        245,
        245
      ],
      "yellow": [
        255,
        255,
        0
      ],
      "yellowgreen": [
        154,
        205,
        50
      ]
    };
  }
});

// node_modules/cli-welcome/node_modules/color-convert/conversions.js
var require_conversions3 = __commonJS({
  "node_modules/cli-welcome/node_modules/color-convert/conversions.js"(exports, module) {
    "use strict";
    var cssKeywords = require_color_name3();
    var reverseKeywords = {};
    for (key in cssKeywords) {
      if (cssKeywords.hasOwnProperty(key)) {
        reverseKeywords[cssKeywords[key]] = key;
      }
    }
    var key;
    var convert = module.exports = {
      rgb: {
        channels: 3,
        labels: "rgb"
      },
      hsl: {
        channels: 3,
        labels: "hsl"
      },
      hsv: {
        channels: 3,
        labels: "hsv"
      },
      hwb: {
        channels: 3,
        labels: "hwb"
      },
      cmyk: {
        channels: 4,
        labels: "cmyk"
      },
      xyz: {
        channels: 3,
        labels: "xyz"
      },
      lab: {
        channels: 3,
        labels: "lab"
      },
      lch: {
        channels: 3,
        labels: "lch"
      },
      hex: {
        channels: 1,
        labels: [
          "hex"
        ]
      },
      keyword: {
        channels: 1,
        labels: [
          "keyword"
        ]
      },
      ansi16: {
        channels: 1,
        labels: [
          "ansi16"
        ]
      },
      ansi256: {
        channels: 1,
        labels: [
          "ansi256"
        ]
      },
      hcg: {
        channels: 3,
        labels: [
          "h",
          "c",
          "g"
        ]
      },
      apple: {
        channels: 3,
        labels: [
          "r16",
          "g16",
          "b16"
        ]
      },
      gray: {
        channels: 1,
        labels: [
          "gray"
        ]
      }
    };
    for (model in convert) {
      if (convert.hasOwnProperty(model)) {
        if (!("channels" in convert[model])) {
          throw new Error("missing channels property: " + model);
        }
        if (!("labels" in convert[model])) {
          throw new Error("missing channel labels property: " + model);
        }
        if (convert[model].labels.length !== convert[model].channels) {
          throw new Error("channel and label counts mismatch: " + model);
        }
        channels = convert[model].channels;
        labels = convert[model].labels;
        delete convert[model].channels;
        delete convert[model].labels;
        Object.defineProperty(convert[model], "channels", {
          value: channels
        });
        Object.defineProperty(convert[model], "labels", {
          value: labels
        });
      }
    }
    var channels;
    var labels;
    var model;
    convert.rgb.hsl = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var min = Math.min(r, g, b);
      var max = Math.max(r, g, b);
      var delta = max - min;
      var h;
      var s;
      var l;
      if (max === min) {
        h = 0;
      } else if (r === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r) / delta;
      } else if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      l = (min + max) / 2;
      if (max === min) {
        s = 0;
      } else if (l <= 0.5) {
        s = delta / (max + min);
      } else {
        s = delta / (2 - max - min);
      }
      return [
        h,
        s * 100,
        l * 100
      ];
    };
    convert.rgb.hsv = function(rgb) {
      var rdif;
      var gdif;
      var bdif;
      var h;
      var s;
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var v = Math.max(r, g, b);
      var diff = v - Math.min(r, g, b);
      var diffc = /* @__PURE__ */ __name(function(c) {
        return (v - c) / 6 / diff + 1 / 2;
      }, "diffc");
      if (diff === 0) {
        h = s = 0;
      } else {
        s = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r === v) {
          h = bdif - gdif;
        } else if (g === v) {
          h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
          h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }
      return [
        h * 360,
        s * 100,
        v * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      var r = rgb[0];
      var g = rgb[1];
      var b = rgb[2];
      var h = convert.rgb.hsl(rgb)[0];
      var w = 1 / 255 * Math.min(r, Math.min(g, b));
      b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
      return [
        h,
        w * 100,
        b * 100
      ];
    };
    convert.rgb.cmyk = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var c;
      var m;
      var y;
      var k;
      k = Math.min(1 - r, 1 - g, 1 - b);
      c = (1 - r - k) / (1 - k) || 0;
      m = (1 - g - k) / (1 - k) || 0;
      y = (1 - b - k) / (1 - k) || 0;
      return [
        c * 100,
        m * 100,
        y * 100,
        k * 100
      ];
    };
    function comparativeDistance(x, y) {
      return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2);
    }
    __name(comparativeDistance, "comparativeDistance");
    convert.rgb.keyword = function(rgb) {
      var reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      var currentClosestDistance = Infinity;
      var currentClosestKeyword;
      for (var keyword in cssKeywords) {
        if (cssKeywords.hasOwnProperty(keyword)) {
          var value = cssKeywords[keyword];
          var distance = comparativeDistance(rgb, value);
          if (distance < currentClosestDistance) {
            currentClosestDistance = distance;
            currentClosestKeyword = keyword;
          }
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
      g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
      b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
      var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
      var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
      var z = r * 0.0193 + g * 0.1192 + b * 0.9505;
      return [
        x * 100,
        y * 100,
        z * 100
      ];
    };
    convert.rgb.lab = function(rgb) {
      var xyz = convert.rgb.xyz(rgb);
      var x = xyz[0];
      var y = xyz[1];
      var z = xyz[2];
      var l;
      var a;
      var b;
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
      l = 116 * y - 16;
      a = 500 * (x - y);
      b = 200 * (y - z);
      return [
        l,
        a,
        b
      ];
    };
    convert.hsl.rgb = function(hsl) {
      var h = hsl[0] / 360;
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var t1;
      var t2;
      var t3;
      var rgb;
      var val;
      if (s === 0) {
        val = l * 255;
        return [
          val,
          val,
          val
        ];
      }
      if (l < 0.5) {
        t2 = l * (1 + s);
      } else {
        t2 = l + s - l * s;
      }
      t1 = 2 * l - t2;
      rgb = [
        0,
        0,
        0
      ];
      for (var i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i] = val * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      var h = hsl[0];
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var smin = s;
      var lmin = Math.max(l, 0.01);
      var sv;
      var v;
      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      v = (l + s) / 2;
      sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
      return [
        h,
        sv * 100,
        v * 100
      ];
    };
    convert.hsv.rgb = function(hsv) {
      var h = hsv[0] / 60;
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var hi = Math.floor(h) % 6;
      var f = h - Math.floor(h);
      var p = 255 * v * (1 - s);
      var q = 255 * v * (1 - s * f);
      var t = 255 * v * (1 - s * (1 - f));
      v *= 255;
      switch (hi) {
        case 0:
          return [
            v,
            t,
            p
          ];
        case 1:
          return [
            q,
            v,
            p
          ];
        case 2:
          return [
            p,
            v,
            t
          ];
        case 3:
          return [
            p,
            q,
            v
          ];
        case 4:
          return [
            t,
            p,
            v
          ];
        case 5:
          return [
            v,
            p,
            q
          ];
      }
    };
    convert.hsv.hsl = function(hsv) {
      var h = hsv[0];
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var vmin = Math.max(v, 0.01);
      var lmin;
      var sl;
      var l;
      l = (2 - s) * v;
      lmin = (2 - s) * vmin;
      sl = s * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l /= 2;
      return [
        h,
        sl * 100,
        l * 100
      ];
    };
    convert.hwb.rgb = function(hwb) {
      var h = hwb[0] / 360;
      var wh = hwb[1] / 100;
      var bl = hwb[2] / 100;
      var ratio = wh + bl;
      var i;
      var v;
      var f;
      var n;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      i = Math.floor(6 * h);
      v = 1 - bl;
      f = 6 * h - i;
      if ((i & 1) !== 0) {
        f = 1 - f;
      }
      n = wh + f * (v - wh);
      var r;
      var g;
      var b;
      switch (i) {
        default:
        case 6:
        case 0:
          r = v;
          g = n;
          b = wh;
          break;
        case 1:
          r = n;
          g = v;
          b = wh;
          break;
        case 2:
          r = wh;
          g = v;
          b = n;
          break;
        case 3:
          r = wh;
          g = n;
          b = v;
          break;
        case 4:
          r = n;
          g = wh;
          b = v;
          break;
        case 5:
          r = v;
          g = wh;
          b = n;
          break;
      }
      return [
        r * 255,
        g * 255,
        b * 255
      ];
    };
    convert.cmyk.rgb = function(cmyk) {
      var c = cmyk[0] / 100;
      var m = cmyk[1] / 100;
      var y = cmyk[2] / 100;
      var k = cmyk[3] / 100;
      var r;
      var g;
      var b;
      r = 1 - Math.min(1, c * (1 - k) + k);
      g = 1 - Math.min(1, m * (1 - k) + k);
      b = 1 - Math.min(1, y * (1 - k) + k);
      return [
        r * 255,
        g * 255,
        b * 255
      ];
    };
    convert.xyz.rgb = function(xyz) {
      var x = xyz[0] / 100;
      var y = xyz[1] / 100;
      var z = xyz[2] / 100;
      var r;
      var g;
      var b;
      r = x * 3.2406 + y * -1.5372 + z * -0.4986;
      g = x * -0.9689 + y * 1.8758 + z * 0.0415;
      b = x * 0.0557 + y * -0.204 + z * 1.057;
      r = r > 31308e-7 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : r * 12.92;
      g = g > 31308e-7 ? 1.055 * Math.pow(g, 1 / 2.4) - 0.055 : g * 12.92;
      b = b > 31308e-7 ? 1.055 * Math.pow(b, 1 / 2.4) - 0.055 : b * 12.92;
      r = Math.min(Math.max(0, r), 1);
      g = Math.min(Math.max(0, g), 1);
      b = Math.min(Math.max(0, b), 1);
      return [
        r * 255,
        g * 255,
        b * 255
      ];
    };
    convert.xyz.lab = function(xyz) {
      var x = xyz[0];
      var y = xyz[1];
      var z = xyz[2];
      var l;
      var a;
      var b;
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
      l = 116 * y - 16;
      a = 500 * (x - y);
      b = 200 * (y - z);
      return [
        l,
        a,
        b
      ];
    };
    convert.lab.xyz = function(lab) {
      var l = lab[0];
      var a = lab[1];
      var b = lab[2];
      var x;
      var y;
      var z;
      y = (l + 16) / 116;
      x = a / 500 + y;
      z = y - b / 200;
      var y2 = Math.pow(y, 3);
      var x2 = Math.pow(x, 3);
      var z2 = Math.pow(z, 3);
      y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
      x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
      z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
      x *= 95.047;
      y *= 100;
      z *= 108.883;
      return [
        x,
        y,
        z
      ];
    };
    convert.lab.lch = function(lab) {
      var l = lab[0];
      var a = lab[1];
      var b = lab[2];
      var hr;
      var h;
      var c;
      hr = Math.atan2(b, a);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      c = Math.sqrt(a * a + b * b);
      return [
        l,
        c,
        h
      ];
    };
    convert.lch.lab = function(lch) {
      var l = lch[0];
      var c = lch[1];
      var h = lch[2];
      var a;
      var b;
      var hr;
      hr = h / 360 * 2 * Math.PI;
      a = c * Math.cos(hr);
      b = c * Math.sin(hr);
      return [
        l,
        a,
        b
      ];
    };
    convert.rgb.ansi16 = function(args) {
      var r = args[0];
      var g = args[1];
      var b = args[2];
      var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2];
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args) {
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };
    convert.rgb.ansi256 = function(args) {
      var r = args[0];
      var g = args[1];
      var b = args[2];
      if (r === g && g === b) {
        if (r < 8) {
          return 16;
        }
        if (r > 248) {
          return 231;
        }
        return Math.round((r - 8) / 247 * 24) + 232;
      }
      var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args) {
      var color = args % 10;
      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [
          color,
          color,
          color
        ];
      }
      var mult = (~~(args > 50) + 1) * 0.5;
      var r = (color & 1) * mult * 255;
      var g = (color >> 1 & 1) * mult * 255;
      var b = (color >> 2 & 1) * mult * 255;
      return [
        r,
        g,
        b
      ];
    };
    convert.ansi256.rgb = function(args) {
      if (args >= 232) {
        var c = (args - 232) * 10 + 8;
        return [
          c,
          c,
          c
        ];
      }
      args -= 16;
      var rem;
      var r = Math.floor(args / 36) / 5 * 255;
      var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
      var b = rem % 6 / 5 * 255;
      return [
        r,
        g,
        b
      ];
    };
    convert.rgb.hex = function(args) {
      var integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
      var string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.hex.rgb = function(args) {
      var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [
          0,
          0,
          0
        ];
      }
      var colorString = match[0];
      if (match[0].length === 3) {
        colorString = colorString.split("").map(function(char) {
          return char + char;
        }).join("");
      }
      var integer = parseInt(colorString, 16);
      var r = integer >> 16 & 255;
      var g = integer >> 8 & 255;
      var b = integer & 255;
      return [
        r,
        g,
        b
      ];
    };
    convert.rgb.hcg = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var max = Math.max(Math.max(r, g), b);
      var min = Math.min(Math.min(r, g), b);
      var chroma = max - min;
      var grayscale;
      var hue;
      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r) {
        hue = (g - b) / chroma % 6;
      } else if (max === g) {
        hue = 2 + (b - r) / chroma;
      } else {
        hue = 4 + (r - g) / chroma + 4;
      }
      hue /= 6;
      hue %= 1;
      return [
        hue * 360,
        chroma * 100,
        grayscale * 100
      ];
    };
    convert.hsl.hcg = function(hsl) {
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var c = 1;
      var f = 0;
      if (l < 0.5) {
        c = 2 * s * l;
      } else {
        c = 2 * s * (1 - l);
      }
      if (c < 1) {
        f = (l - 0.5 * c) / (1 - c);
      }
      return [
        hsl[0],
        c * 100,
        f * 100
      ];
    };
    convert.hsv.hcg = function(hsv) {
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var c = s * v;
      var f = 0;
      if (c < 1) {
        f = (v - c) / (1 - c);
      }
      return [
        hsv[0],
        c * 100,
        f * 100
      ];
    };
    convert.hcg.rgb = function(hcg) {
      var h = hcg[0] / 360;
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      if (c === 0) {
        return [
          g * 255,
          g * 255,
          g * 255
        ];
      }
      var pure = [
        0,
        0,
        0
      ];
      var hi = h % 1 * 6;
      var v = hi % 1;
      var w = 1 - v;
      var mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
      }
      mg = (1 - c) * g;
      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      var v = c + g * (1 - c);
      var f = 0;
      if (v > 0) {
        f = c / v;
      }
      return [
        hcg[0],
        f * 100,
        v * 100
      ];
    };
    convert.hcg.hsl = function(hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      var l = g * (1 - c) + 0.5 * c;
      var s = 0;
      if (l > 0 && l < 0.5) {
        s = c / (2 * l);
      } else if (l >= 0.5 && l < 1) {
        s = c / (2 * (1 - l));
      }
      return [
        hcg[0],
        s * 100,
        l * 100
      ];
    };
    convert.hcg.hwb = function(hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      var v = c + g * (1 - c);
      return [
        hcg[0],
        (v - c) * 100,
        (1 - v) * 100
      ];
    };
    convert.hwb.hcg = function(hwb) {
      var w = hwb[1] / 100;
      var b = hwb[2] / 100;
      var v = 1 - b;
      var c = v - w;
      var g = 0;
      if (c < 1) {
        g = (v - c) / (1 - c);
      }
      return [
        hwb[0],
        c * 100,
        g * 100
      ];
    };
    convert.apple.rgb = function(apple) {
      return [
        apple[0] / 65535 * 255,
        apple[1] / 65535 * 255,
        apple[2] / 65535 * 255
      ];
    };
    convert.rgb.apple = function(rgb) {
      return [
        rgb[0] / 255 * 65535,
        rgb[1] / 255 * 65535,
        rgb[2] / 255 * 65535
      ];
    };
    convert.gray.rgb = function(args) {
      return [
        args[0] / 100 * 255,
        args[0] / 100 * 255,
        args[0] / 100 * 255
      ];
    };
    convert.gray.hsl = convert.gray.hsv = function(args) {
      return [
        0,
        0,
        args[0]
      ];
    };
    convert.gray.hwb = function(gray) {
      return [
        0,
        100,
        gray[0]
      ];
    };
    convert.gray.cmyk = function(gray) {
      return [
        0,
        0,
        0,
        gray[0]
      ];
    };
    convert.gray.lab = function(gray) {
      return [
        gray[0],
        0,
        0
      ];
    };
    convert.gray.hex = function(gray) {
      var val = Math.round(gray[0] / 100 * 255) & 255;
      var integer = (val << 16) + (val << 8) + val;
      var string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.rgb.gray = function(rgb) {
      var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [
        val / 255 * 100
      ];
    };
  }
});

// node_modules/cli-welcome/node_modules/color-convert/route.js
var require_route3 = __commonJS({
  "node_modules/cli-welcome/node_modules/color-convert/route.js"(exports, module) {
    "use strict";
    var conversions = require_conversions3();
    function buildGraph() {
      var graph = {};
      var models = Object.keys(conversions);
      for (var len = models.length, i = 0; i < len; i++) {
        graph[models[i]] = {
          // http://jsperf.com/1-vs-infinity
          // micro-opt, but this is simple.
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    __name(buildGraph, "buildGraph");
    function deriveBFS(fromModel) {
      var graph = buildGraph();
      var queue = [
        fromModel
      ];
      graph[fromModel].distance = 0;
      while (queue.length) {
        var current = queue.pop();
        var adjacents = Object.keys(conversions[current]);
        for (var len = adjacents.length, i = 0; i < len; i++) {
          var adjacent = adjacents[i];
          var node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    __name(deriveBFS, "deriveBFS");
    function link(from, to) {
      return function(args) {
        return to(from(args));
      };
    }
    __name(link, "link");
    function wrapConversion(toModel, graph) {
      var path4 = [
        graph[toModel].parent,
        toModel
      ];
      var fn = conversions[graph[toModel].parent][toModel];
      var cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path4.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path4;
      return fn;
    }
    __name(wrapConversion, "wrapConversion");
    module.exports = function(fromModel) {
      var graph = deriveBFS(fromModel);
      var conversion = {};
      var models = Object.keys(graph);
      for (var len = models.length, i = 0; i < len; i++) {
        var toModel = models[i];
        var node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
  }
});

// node_modules/cli-welcome/node_modules/color-convert/index.js
var require_color_convert3 = __commonJS({
  "node_modules/cli-welcome/node_modules/color-convert/index.js"(exports, module) {
    "use strict";
    var conversions = require_conversions3();
    var route = require_route3();
    var convert = {};
    var models = Object.keys(conversions);
    function wrapRaw(fn) {
      var wrappedFn = /* @__PURE__ */ __name(function(args) {
        if (args === void 0 || args === null) {
          return args;
        }
        if (arguments.length > 1) {
          args = Array.prototype.slice.call(arguments);
        }
        return fn(args);
      }, "wrappedFn");
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    __name(wrapRaw, "wrapRaw");
    function wrapRounded(fn) {
      var wrappedFn = /* @__PURE__ */ __name(function(args) {
        if (args === void 0 || args === null) {
          return args;
        }
        if (arguments.length > 1) {
          args = Array.prototype.slice.call(arguments);
        }
        var result = fn(args);
        if (typeof result === "object") {
          for (var len = result.length, i = 0; i < len; i++) {
            result[i] = Math.round(result[i]);
          }
        }
        return result;
      }, "wrappedFn");
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    __name(wrapRounded, "wrapRounded");
    models.forEach(function(fromModel) {
      convert[fromModel] = {};
      Object.defineProperty(convert[fromModel], "channels", {
        value: conversions[fromModel].channels
      });
      Object.defineProperty(convert[fromModel], "labels", {
        value: conversions[fromModel].labels
      });
      var routes = route(fromModel);
      var routeModels = Object.keys(routes);
      routeModels.forEach(function(toModel) {
        var fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
      });
    });
    module.exports = convert;
  }
});

// node_modules/cli-welcome/node_modules/ansi-styles/index.js
var require_ansi_styles3 = __commonJS({
  "node_modules/cli-welcome/node_modules/ansi-styles/index.js"(exports, module) {
    "use strict";
    var colorConvert = require_color_convert3();
    var wrapAnsi16 = /* @__PURE__ */ __name((fn, offset) => function() {
      const code = fn.apply(colorConvert, arguments);
      return `\x1B[${code + offset}m`;
    }, "wrapAnsi16");
    var wrapAnsi256 = /* @__PURE__ */ __name((fn, offset) => function() {
      const code = fn.apply(colorConvert, arguments);
      return `\x1B[${38 + offset};5;${code}m`;
    }, "wrapAnsi256");
    var wrapAnsi16m = /* @__PURE__ */ __name((fn, offset) => function() {
      const rgb = fn.apply(colorConvert, arguments);
      return `\x1B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
    }, "wrapAnsi16m");
    function assembleStyles() {
      const codes = /* @__PURE__ */ new Map();
      const styles = {
        modifier: {
          reset: [
            0,
            0
          ],
          // 21 isn't widely supported and 22 does the same thing
          bold: [
            1,
            22
          ],
          dim: [
            2,
            22
          ],
          italic: [
            3,
            23
          ],
          underline: [
            4,
            24
          ],
          inverse: [
            7,
            27
          ],
          hidden: [
            8,
            28
          ],
          strikethrough: [
            9,
            29
          ]
        },
        color: {
          black: [
            30,
            39
          ],
          red: [
            31,
            39
          ],
          green: [
            32,
            39
          ],
          yellow: [
            33,
            39
          ],
          blue: [
            34,
            39
          ],
          magenta: [
            35,
            39
          ],
          cyan: [
            36,
            39
          ],
          white: [
            37,
            39
          ],
          gray: [
            90,
            39
          ],
          // Bright color
          redBright: [
            91,
            39
          ],
          greenBright: [
            92,
            39
          ],
          yellowBright: [
            93,
            39
          ],
          blueBright: [
            94,
            39
          ],
          magentaBright: [
            95,
            39
          ],
          cyanBright: [
            96,
            39
          ],
          whiteBright: [
            97,
            39
          ]
        },
        bgColor: {
          bgBlack: [
            40,
            49
          ],
          bgRed: [
            41,
            49
          ],
          bgGreen: [
            42,
            49
          ],
          bgYellow: [
            43,
            49
          ],
          bgBlue: [
            44,
            49
          ],
          bgMagenta: [
            45,
            49
          ],
          bgCyan: [
            46,
            49
          ],
          bgWhite: [
            47,
            49
          ],
          // Bright color
          bgBlackBright: [
            100,
            49
          ],
          bgRedBright: [
            101,
            49
          ],
          bgGreenBright: [
            102,
            49
          ],
          bgYellowBright: [
            103,
            49
          ],
          bgBlueBright: [
            104,
            49
          ],
          bgMagentaBright: [
            105,
            49
          ],
          bgCyanBright: [
            106,
            49
          ],
          bgWhiteBright: [
            107,
            49
          ]
        }
      };
      styles.color.grey = styles.color.gray;
      for (const groupName of Object.keys(styles)) {
        const group = styles[groupName];
        for (const styleName of Object.keys(group)) {
          const style = group[styleName];
          styles[styleName] = {
            open: `\x1B[${style[0]}m`,
            close: `\x1B[${style[1]}m`
          };
          group[styleName] = styles[styleName];
          codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles, groupName, {
          value: group,
          enumerable: false
        });
        Object.defineProperty(styles, "codes", {
          value: codes,
          enumerable: false
        });
      }
      const ansi2ansi = /* @__PURE__ */ __name((n) => n, "ansi2ansi");
      const rgb2rgb = /* @__PURE__ */ __name((r, g, b) => [
        r,
        g,
        b
      ], "rgb2rgb");
      styles.color.close = "\x1B[39m";
      styles.bgColor.close = "\x1B[49m";
      styles.color.ansi = {
        ansi: wrapAnsi16(ansi2ansi, 0)
      };
      styles.color.ansi256 = {
        ansi256: wrapAnsi256(ansi2ansi, 0)
      };
      styles.color.ansi16m = {
        rgb: wrapAnsi16m(rgb2rgb, 0)
      };
      styles.bgColor.ansi = {
        ansi: wrapAnsi16(ansi2ansi, 10)
      };
      styles.bgColor.ansi256 = {
        ansi256: wrapAnsi256(ansi2ansi, 10)
      };
      styles.bgColor.ansi16m = {
        rgb: wrapAnsi16m(rgb2rgb, 10)
      };
      for (let key of Object.keys(colorConvert)) {
        if (typeof colorConvert[key] !== "object") {
          continue;
        }
        const suite = colorConvert[key];
        if (key === "ansi16") {
          key = "ansi";
        }
        if ("ansi16" in suite) {
          styles.color.ansi[key] = wrapAnsi16(suite.ansi16, 0);
          styles.bgColor.ansi[key] = wrapAnsi16(suite.ansi16, 10);
        }
        if ("ansi256" in suite) {
          styles.color.ansi256[key] = wrapAnsi256(suite.ansi256, 0);
          styles.bgColor.ansi256[key] = wrapAnsi256(suite.ansi256, 10);
        }
        if ("rgb" in suite) {
          styles.color.ansi16m[key] = wrapAnsi16m(suite.rgb, 0);
          styles.bgColor.ansi16m[key] = wrapAnsi16m(suite.rgb, 10);
        }
      }
      return styles;
    }
    __name(assembleStyles, "assembleStyles");
    Object.defineProperty(module, "exports", {
      enumerable: true,
      get: assembleStyles
    });
  }
});

// node_modules/cli-welcome/node_modules/has-flag/index.js
var require_has_flag3 = __commonJS({
  "node_modules/cli-welcome/node_modules/has-flag/index.js"(exports, module) {
    "use strict";
    module.exports = (flag, argv) => {
      argv = argv || process.argv;
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const pos = argv.indexOf(prefix + flag);
      const terminatorPos = argv.indexOf("--");
      return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
    };
  }
});

// node_modules/cli-welcome/node_modules/supports-color/index.js
var require_supports_color3 = __commonJS({
  "node_modules/cli-welcome/node_modules/supports-color/index.js"(exports, module) {
    "use strict";
    var os = __require("os");
    var hasFlag = require_has_flag3();
    var env = process.env;
    var forceColor;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false")) {
      forceColor = false;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = true;
    }
    if ("FORCE_COLOR" in env) {
      forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    __name(translateLevel, "translateLevel");
    function supportsColor(stream) {
      if (forceColor === false) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (stream && !stream.isTTY && forceColor !== true) {
        return 0;
      }
      const min = forceColor ? 1 : 0;
      if (process.platform === "win32") {
        const osRelease = os.release().split(".");
        if (Number(process.versions.node.split(".")[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if ([
          "TRAVIS",
          "CIRCLECI",
          "APPVEYOR",
          "GITLAB_CI"
        ].some((sign) => sign in env) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      if (env.TERM === "dumb") {
        return min;
      }
      return min;
    }
    __name(supportsColor, "supportsColor");
    function getSupportLevel(stream) {
      const level = supportsColor(stream);
      return translateLevel(level);
    }
    __name(getSupportLevel, "getSupportLevel");
    module.exports = {
      supportsColor: getSupportLevel,
      stdout: getSupportLevel(process.stdout),
      stderr: getSupportLevel(process.stderr)
    };
  }
});

// node_modules/cli-welcome/node_modules/chalk/templates.js
var require_templates3 = __commonJS({
  "node_modules/cli-welcome/node_modules/chalk/templates.js"(exports, module) {
    "use strict";
    var TEMPLATE_REGEX = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
    var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
    var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
    var ESCAPE_REGEX = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi;
    var ESCAPES = /* @__PURE__ */ new Map([
      [
        "n",
        "\n"
      ],
      [
        "r",
        "\r"
      ],
      [
        "t",
        "	"
      ],
      [
        "b",
        "\b"
      ],
      [
        "f",
        "\f"
      ],
      [
        "v",
        "\v"
      ],
      [
        "0",
        "\0"
      ],
      [
        "\\",
        "\\"
      ],
      [
        "e",
        "\x1B"
      ],
      [
        "a",
        "\x07"
      ]
    ]);
    function unescape(c) {
      if (c[0] === "u" && c.length === 5 || c[0] === "x" && c.length === 3) {
        return String.fromCharCode(parseInt(c.slice(1), 16));
      }
      return ESCAPES.get(c) || c;
    }
    __name(unescape, "unescape");
    function parseArguments(name, args) {
      const results = [];
      const chunks = args.trim().split(/\s*,\s*/g);
      let matches;
      for (const chunk of chunks) {
        if (!isNaN(chunk)) {
          results.push(Number(chunk));
        } else if (matches = chunk.match(STRING_REGEX)) {
          results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, chr) => escape ? unescape(escape) : chr));
        } else {
          throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
        }
      }
      return results;
    }
    __name(parseArguments, "parseArguments");
    function parseStyle(style) {
      STYLE_REGEX.lastIndex = 0;
      const results = [];
      let matches;
      while ((matches = STYLE_REGEX.exec(style)) !== null) {
        const name = matches[1];
        if (matches[2]) {
          const args = parseArguments(name, matches[2]);
          results.push([
            name
          ].concat(args));
        } else {
          results.push([
            name
          ]);
        }
      }
      return results;
    }
    __name(parseStyle, "parseStyle");
    function buildStyle(chalk, styles) {
      const enabled = {};
      for (const layer of styles) {
        for (const style of layer.styles) {
          enabled[style[0]] = layer.inverse ? null : style.slice(1);
        }
      }
      let current = chalk;
      for (const styleName of Object.keys(enabled)) {
        if (Array.isArray(enabled[styleName])) {
          if (!(styleName in current)) {
            throw new Error(`Unknown Chalk style: ${styleName}`);
          }
          if (enabled[styleName].length > 0) {
            current = current[styleName].apply(current, enabled[styleName]);
          } else {
            current = current[styleName];
          }
        }
      }
      return current;
    }
    __name(buildStyle, "buildStyle");
    module.exports = (chalk, tmp) => {
      const styles = [];
      const chunks = [];
      let chunk = [];
      tmp.replace(TEMPLATE_REGEX, (m, escapeChar, inverse, style, close, chr) => {
        if (escapeChar) {
          chunk.push(unescape(escapeChar));
        } else if (style) {
          const str = chunk.join("");
          chunk = [];
          chunks.push(styles.length === 0 ? str : buildStyle(chalk, styles)(str));
          styles.push({
            inverse,
            styles: parseStyle(style)
          });
        } else if (close) {
          if (styles.length === 0) {
            throw new Error("Found extraneous } in Chalk template literal");
          }
          chunks.push(buildStyle(chalk, styles)(chunk.join("")));
          chunk = [];
          styles.pop();
        } else {
          chunk.push(chr);
        }
      });
      chunks.push(chunk.join(""));
      if (styles.length > 0) {
        const errMsg = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? "" : "s"} (\`}\`)`;
        throw new Error(errMsg);
      }
      return chunks.join("");
    };
  }
});

// node_modules/cli-welcome/node_modules/chalk/index.js
var require_chalk2 = __commonJS({
  "node_modules/cli-welcome/node_modules/chalk/index.js"(exports, module) {
    "use strict";
    var escapeStringRegexp = require_escape_string_regexp();
    var ansiStyles = require_ansi_styles3();
    var stdoutColor = require_supports_color3().stdout;
    var template = require_templates3();
    var isSimpleWindowsTerm = process.platform === "win32" && !(process.env.TERM || "").toLowerCase().startsWith("xterm");
    var levelMapping = [
      "ansi",
      "ansi",
      "ansi256",
      "ansi16m"
    ];
    var skipModels = /* @__PURE__ */ new Set([
      "gray"
    ]);
    var styles = /* @__PURE__ */ Object.create(null);
    function applyOptions(obj, options) {
      options = options || {};
      const scLevel = stdoutColor ? stdoutColor.level : 0;
      obj.level = options.level === void 0 ? scLevel : options.level;
      obj.enabled = "enabled" in options ? options.enabled : obj.level > 0;
    }
    __name(applyOptions, "applyOptions");
    function Chalk(options) {
      if (!this || !(this instanceof Chalk) || this.template) {
        const chalk = {};
        applyOptions(chalk, options);
        chalk.template = function() {
          const args = [].slice.call(arguments);
          return chalkTag.apply(null, [
            chalk.template
          ].concat(args));
        };
        Object.setPrototypeOf(chalk, Chalk.prototype);
        Object.setPrototypeOf(chalk.template, chalk);
        chalk.template.constructor = Chalk;
        return chalk.template;
      }
      applyOptions(this, options);
    }
    __name(Chalk, "Chalk");
    if (isSimpleWindowsTerm) {
      ansiStyles.blue.open = "\x1B[94m";
    }
    for (const key of Object.keys(ansiStyles)) {
      ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), "g");
      styles[key] = {
        get() {
          const codes = ansiStyles[key];
          return build.call(this, this._styles ? this._styles.concat(codes) : [
            codes
          ], this._empty, key);
        }
      };
    }
    styles.visible = {
      get() {
        return build.call(this, this._styles || [], true, "visible");
      }
    };
    ansiStyles.color.closeRe = new RegExp(escapeStringRegexp(ansiStyles.color.close), "g");
    for (const model of Object.keys(ansiStyles.color.ansi)) {
      if (skipModels.has(model)) {
        continue;
      }
      styles[model] = {
        get() {
          const level = this.level;
          return function() {
            const open = ansiStyles.color[levelMapping[level]][model].apply(null, arguments);
            const codes = {
              open,
              close: ansiStyles.color.close,
              closeRe: ansiStyles.color.closeRe
            };
            return build.call(this, this._styles ? this._styles.concat(codes) : [
              codes
            ], this._empty, model);
          };
        }
      };
    }
    ansiStyles.bgColor.closeRe = new RegExp(escapeStringRegexp(ansiStyles.bgColor.close), "g");
    for (const model of Object.keys(ansiStyles.bgColor.ansi)) {
      if (skipModels.has(model)) {
        continue;
      }
      const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
      styles[bgModel] = {
        get() {
          const level = this.level;
          return function() {
            const open = ansiStyles.bgColor[levelMapping[level]][model].apply(null, arguments);
            const codes = {
              open,
              close: ansiStyles.bgColor.close,
              closeRe: ansiStyles.bgColor.closeRe
            };
            return build.call(this, this._styles ? this._styles.concat(codes) : [
              codes
            ], this._empty, model);
          };
        }
      };
    }
    var proto = Object.defineProperties(() => {
    }, styles);
    function build(_styles, _empty, key) {
      const builder = /* @__PURE__ */ __name(function() {
        return applyStyle.apply(builder, arguments);
      }, "builder");
      builder._styles = _styles;
      builder._empty = _empty;
      const self2 = this;
      Object.defineProperty(builder, "level", {
        enumerable: true,
        get() {
          return self2.level;
        },
        set(level) {
          self2.level = level;
        }
      });
      Object.defineProperty(builder, "enabled", {
        enumerable: true,
        get() {
          return self2.enabled;
        },
        set(enabled) {
          self2.enabled = enabled;
        }
      });
      builder.hasGrey = this.hasGrey || key === "gray" || key === "grey";
      builder.__proto__ = proto;
      return builder;
    }
    __name(build, "build");
    function applyStyle() {
      const args = arguments;
      const argsLen = args.length;
      let str = String(arguments[0]);
      if (argsLen === 0) {
        return "";
      }
      if (argsLen > 1) {
        for (let a = 1; a < argsLen; a++) {
          str += " " + args[a];
        }
      }
      if (!this.enabled || this.level <= 0 || !str) {
        return this._empty ? "" : str;
      }
      const originalDim = ansiStyles.dim.open;
      if (isSimpleWindowsTerm && this.hasGrey) {
        ansiStyles.dim.open = "";
      }
      for (const code of this._styles.slice().reverse()) {
        str = code.open + str.replace(code.closeRe, code.open) + code.close;
        str = str.replace(/\r?\n/g, `${code.close}$&${code.open}`);
      }
      ansiStyles.dim.open = originalDim;
      return str;
    }
    __name(applyStyle, "applyStyle");
    function chalkTag(chalk, strings) {
      if (!Array.isArray(strings)) {
        return [].slice.call(arguments, 1).join(" ");
      }
      const args = [].slice.call(arguments, 2);
      const parts = [
        strings.raw[0]
      ];
      for (let i = 1; i < strings.length; i++) {
        parts.push(String(args[i - 1]).replace(/[{}\\]/g, "\\$&"));
        parts.push(String(strings.raw[i]));
      }
      return template(chalk, parts.join(""));
    }
    __name(chalkTag, "chalkTag");
    Object.defineProperties(Chalk.prototype, styles);
    module.exports = Chalk();
    module.exports.supportsColor = stdoutColor;
    module.exports.default = module.exports;
  }
});

// node_modules/clear-any-console/index.js
var require_clear_any_console = __commonJS({
  "node_modules/clear-any-console/index.js"(exports, module) {
    "use strict";
    module.exports = () => process.stdout.write(process.platform === "win32" ? "\x1B[2J\x1B[0f" : "\x1B[2J\x1B[3J\x1B[H");
  }
});

// node_modules/cli-welcome/index.js
var require_cli_welcome = __commonJS({
  "node_modules/cli-welcome/index.js"(exports, module) {
    "use strict";
    var chalk = require_chalk2();
    var dim = chalk.dim;
    var clearConsole = require_clear_any_console();
    module.exports = (options = {}) => {
      const defaultOptions = {
        title: "ADD A HEADING",
        tagLine: "",
        description: "",
        bgColor: "#ffffff",
        color: "#000000",
        bold: true,
        clear: true,
        version: ""
      };
      const opts = __spreadValues(__spreadValues({}, defaultOptions), options);
      const { title, tagLine, description, bgColor, color, bold, clear, version } = opts;
      const bg = bold ? chalk.hex(bgColor).inverse.bold : chalk.hex(bgColor).inverse;
      const clr = bold ? chalk.hex(color).bold : chalk.hex(color);
      clear && clearConsole();
      console.log();
      console.log(`${clr(`${bg(` ${title} `)}`)} v${version} ${dim(tagLine)}
${dim(description)}`);
      console.log();
    };
  }
});

// node_modules/import-lazy/index.js
var require_import_lazy = __commonJS({
  "node_modules/import-lazy/index.js"(exports, module) {
    "use strict";
    var lazy = /* @__PURE__ */ __name((mod, fn, id) => mod === void 0 ? fn(id) : mod, "lazy");
    module.exports = (fn) => {
      return (id) => {
        let mod;
        return function() {
          if (arguments.length === 0) {
            mod = lazy(mod, fn, id);
            return mod;
          }
          const ret = {};
          [].forEach.call(arguments, (prop) => {
            Object.defineProperty(ret, prop, {
              get: /* @__PURE__ */ __name(() => {
                mod = lazy(mod, fn, id);
                if (typeof mod[prop] === "function") {
                  return function() {
                    return mod[prop].apply(mod, arguments);
                  };
                }
                return mod[prop];
              }, "get")
            });
          });
          return ret;
        };
      };
    };
    module.exports.proxy = (fn) => {
      return (id) => {
        let mod;
        const handler = {
          get: /* @__PURE__ */ __name((target, property) => {
            mod = lazy(mod, fn, id);
            return Reflect.get(mod, property);
          }, "get"),
          apply: /* @__PURE__ */ __name((target, thisArg, argumentsList) => {
            mod = lazy(mod, fn, id);
            return Reflect.apply(mod, thisArg, argumentsList);
          }, "apply")
        };
        return new Proxy(() => {
        }, handler);
      };
    };
  }
});

// node_modules/update-notifier/index.js
var require_update_notifier = __commonJS({
  "node_modules/update-notifier/index.js"(exports, module) {
    "use strict";
    var { spawn } = __require("child_process");
    var path4 = __require("path");
    var { format } = __require("util");
    var importLazy = require_import_lazy()(__require);
    var configstore = importLazy("configstore");
    var chalk = importLazy("chalk");
    var semver = importLazy("semver");
    var semverDiff = importLazy("semver-diff");
    var latestVersion = importLazy("latest-version");
    var isNpm = importLazy("is-npm");
    var isInstalledGlobally = importLazy("is-installed-globally");
    var isYarnGlobal = importLazy("is-yarn-global");
    var hasYarn = importLazy("has-yarn");
    var boxen = importLazy("boxen");
    var xdgBasedir = importLazy("xdg-basedir");
    var isCi = importLazy("is-ci");
    var pupa = importLazy("pupa");
    var ONE_DAY = 1e3 * 60 * 60 * 24;
    var _a;
    var UpdateNotifier = (_a = class {
      constructor(options = {}) {
        this.options = options;
        options.pkg = options.pkg || {};
        options.distTag = options.distTag || "latest";
        options.pkg = {
          name: options.pkg.name || options.packageName,
          version: options.pkg.version || options.packageVersion
        };
        if (!options.pkg.name || !options.pkg.version) {
          throw new Error("pkg.name and pkg.version required");
        }
        this.packageName = options.pkg.name;
        this.packageVersion = options.pkg.version;
        this.updateCheckInterval = typeof options.updateCheckInterval === "number" ? options.updateCheckInterval : ONE_DAY;
        this.disabled = "NO_UPDATE_NOTIFIER" in process.env || process.env.NODE_ENV === "test" || process.argv.includes("--no-update-notifier") || isCi();
        this.shouldNotifyInNpmScript = options.shouldNotifyInNpmScript;
        if (!this.disabled) {
          try {
            const ConfigStore = configstore();
            this.config = new ConfigStore(`update-notifier-${this.packageName}`, {
              optOut: false,
              // Init with the current time so the first check is only
              // after the set interval, so not to bother users right away
              lastUpdateCheck: Date.now()
            });
          } catch (e) {
            const message = chalk().yellow(format(" %s update check failed ", options.pkg.name)) + format("\n Try running with %s or get access ", chalk().cyan("sudo")) + "\n to the local update config store via \n" + chalk().cyan(format(" sudo chown -R $USER:$(id -gn $USER) %s ", xdgBasedir().config));
            process.on("exit", () => {
              console.error(boxen()(message, {
                align: "center"
              }));
            });
          }
        }
      }
      check() {
        if (!this.config || this.config.get("optOut") || this.disabled) {
          return;
        }
        this.update = this.config.get("update");
        if (this.update) {
          this.update.current = this.packageVersion;
          this.config.delete("update");
        }
        if (Date.now() - this.config.get("lastUpdateCheck") < this.updateCheckInterval) {
          return;
        }
        spawn(process.execPath, [
          path4.join(__dirname, "check.js"),
          JSON.stringify(this.options)
        ], {
          detached: true,
          stdio: "ignore"
        }).unref();
      }
      fetchInfo() {
        return __async(this, null, function* () {
          const { distTag } = this.options;
          const latest = yield latestVersion()(this.packageName, {
            version: distTag
          });
          return {
            latest,
            current: this.packageVersion,
            type: semverDiff()(this.packageVersion, latest) || distTag,
            name: this.packageName
          };
        });
      }
      notify(options) {
        const suppressForNpm = !this.shouldNotifyInNpmScript && isNpm().isNpmOrYarn;
        if (!process.stdout.isTTY || suppressForNpm || !this.update || !semver().gt(this.update.latest, this.update.current)) {
          return this;
        }
        options = __spreadValues({
          isGlobal: isInstalledGlobally(),
          isYarnGlobal: isYarnGlobal()()
        }, options);
        let installCommand;
        if (options.isYarnGlobal) {
          installCommand = `yarn global add ${this.packageName}`;
        } else if (options.isGlobal) {
          installCommand = `npm i -g ${this.packageName}`;
        } else if (hasYarn()()) {
          installCommand = `yarn add ${this.packageName}`;
        } else {
          installCommand = `npm i ${this.packageName}`;
        }
        const defaultTemplate = "Update available " + chalk().dim("{currentVersion}") + chalk().reset(" \u2192 ") + chalk().green("{latestVersion}") + " \nRun " + chalk().cyan("{updateCommand}") + " to update";
        const template = options.message || defaultTemplate;
        options.boxenOptions = options.boxenOptions || {
          padding: 1,
          margin: 1,
          align: "center",
          borderColor: "yellow",
          borderStyle: "round"
        };
        const message = boxen()(pupa()(template, {
          packageName: this.packageName,
          currentVersion: this.update.current,
          latestVersion: this.update.latest,
          updateCommand: installCommand
        }), options.boxenOptions);
        if (options.defer === false) {
          console.error(message);
        } else {
          process.on("exit", () => {
            console.error(message);
          });
          process.on("SIGINT", () => {
            console.error("");
            process.exit();
          });
        }
        return this;
      }
    }, __name(_a, "UpdateNotifier"), _a);
    module.exports = (options) => {
      const updateNotifier2 = new UpdateNotifier(options);
      updateNotifier2.check();
      return updateNotifier2;
    };
    module.exports.UpdateNotifier = UpdateNotifier;
  }
});

// node_modules/cli-handle-error/index.js
var require_cli_handle_error = __commonJS({
  "node_modules/cli-handle-error/index.js"(exports, module) {
    "use strict";
    var sym = require_log_symbols();
    var { red, yellow } = require_source();
    module.exports = (heading = `ERROR: `, err, displayError = true, exit = true) => {
      if (err) {
        console.log();
        if (displayError) {
          console.log(`${sym.error} ${red(heading)}`);
          console.log(`${sym.error} ${red(`ERROR \u2192`)} ${err.name}`);
          console.log(`${sym.info} ${red(`REASON \u2192`)} ${err.message}`);
          console.log(`${sym.info} ${red(`ERROR STACK \u2193 
`)} ${err.stack}
`);
        } else {
          console.log(`${sym.warning}  ${yellow(heading)}
`);
        }
        if (exit) {
          process.exit(0);
        } else {
          return false;
        }
      }
    };
  }
});

// node_modules/cli-handle-unhandled/index.js
var require_cli_handle_unhandled = __commonJS({
  "node_modules/cli-handle-unhandled/index.js"(exports, module) {
    "use strict";
    var handleError = require_cli_handle_error();
    module.exports = () => {
      process.on("unhandledRejection", (err) => {
        handleError(`UNHANDLED ERROR`, err);
      });
    };
  }
});

// node_modules/ora/node_modules/chalk/source/util.js
var require_util2 = __commonJS({
  "node_modules/ora/node_modules/chalk/source/util.js"(exports, module) {
    "use strict";
    var stringReplaceAll = /* @__PURE__ */ __name((string, substring, replacer) => {
      let index = string.indexOf(substring);
      if (index === -1) {
        return string;
      }
      const substringLength = substring.length;
      let endIndex = 0;
      let returnValue = "";
      do {
        returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
        endIndex = index + substringLength;
        index = string.indexOf(substring, endIndex);
      } while (index !== -1);
      returnValue += string.substr(endIndex);
      return returnValue;
    }, "stringReplaceAll");
    var stringEncaseCRLFWithFirstIndex = /* @__PURE__ */ __name((string, prefix, postfix, index) => {
      let endIndex = 0;
      let returnValue = "";
      do {
        const gotCR = string[index - 1] === "\r";
        returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
        endIndex = index + 1;
        index = string.indexOf("\n", endIndex);
      } while (index !== -1);
      returnValue += string.substr(endIndex);
      return returnValue;
    }, "stringEncaseCRLFWithFirstIndex");
    module.exports = {
      stringReplaceAll,
      stringEncaseCRLFWithFirstIndex
    };
  }
});

// node_modules/ora/node_modules/chalk/source/templates.js
var require_templates4 = __commonJS({
  "node_modules/ora/node_modules/chalk/source/templates.js"(exports, module) {
    "use strict";
    var TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
    var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
    var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
    var ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;
    var ESCAPES = /* @__PURE__ */ new Map([
      [
        "n",
        "\n"
      ],
      [
        "r",
        "\r"
      ],
      [
        "t",
        "	"
      ],
      [
        "b",
        "\b"
      ],
      [
        "f",
        "\f"
      ],
      [
        "v",
        "\v"
      ],
      [
        "0",
        "\0"
      ],
      [
        "\\",
        "\\"
      ],
      [
        "e",
        "\x1B"
      ],
      [
        "a",
        "\x07"
      ]
    ]);
    function unescape(c) {
      const u = c[0] === "u";
      const bracket = c[1] === "{";
      if (u && !bracket && c.length === 5 || c[0] === "x" && c.length === 3) {
        return String.fromCharCode(parseInt(c.slice(1), 16));
      }
      if (u && bracket) {
        return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
      }
      return ESCAPES.get(c) || c;
    }
    __name(unescape, "unescape");
    function parseArguments(name, arguments_) {
      const results = [];
      const chunks = arguments_.trim().split(/\s*,\s*/g);
      let matches;
      for (const chunk of chunks) {
        const number = Number(chunk);
        if (!Number.isNaN(number)) {
          results.push(number);
        } else if (matches = chunk.match(STRING_REGEX)) {
          results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, character) => escape ? unescape(escape) : character));
        } else {
          throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
        }
      }
      return results;
    }
    __name(parseArguments, "parseArguments");
    function parseStyle(style) {
      STYLE_REGEX.lastIndex = 0;
      const results = [];
      let matches;
      while ((matches = STYLE_REGEX.exec(style)) !== null) {
        const name = matches[1];
        if (matches[2]) {
          const args = parseArguments(name, matches[2]);
          results.push([
            name
          ].concat(args));
        } else {
          results.push([
            name
          ]);
        }
      }
      return results;
    }
    __name(parseStyle, "parseStyle");
    function buildStyle(chalk, styles) {
      const enabled = {};
      for (const layer of styles) {
        for (const style of layer.styles) {
          enabled[style[0]] = layer.inverse ? null : style.slice(1);
        }
      }
      let current = chalk;
      for (const [styleName, styles2] of Object.entries(enabled)) {
        if (!Array.isArray(styles2)) {
          continue;
        }
        if (!(styleName in current)) {
          throw new Error(`Unknown Chalk style: ${styleName}`);
        }
        current = styles2.length > 0 ? current[styleName](...styles2) : current[styleName];
      }
      return current;
    }
    __name(buildStyle, "buildStyle");
    module.exports = (chalk, temporary) => {
      const styles = [];
      const chunks = [];
      let chunk = [];
      temporary.replace(TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character) => {
        if (escapeCharacter) {
          chunk.push(unescape(escapeCharacter));
        } else if (style) {
          const string = chunk.join("");
          chunk = [];
          chunks.push(styles.length === 0 ? string : buildStyle(chalk, styles)(string));
          styles.push({
            inverse,
            styles: parseStyle(style)
          });
        } else if (close) {
          if (styles.length === 0) {
            throw new Error("Found extraneous } in Chalk template literal");
          }
          chunks.push(buildStyle(chalk, styles)(chunk.join("")));
          chunk = [];
          styles.pop();
        } else {
          chunk.push(character);
        }
      });
      chunks.push(chunk.join(""));
      if (styles.length > 0) {
        const errMessage = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? "" : "s"} (\`}\`)`;
        throw new Error(errMessage);
      }
      return chunks.join("");
    };
  }
});

// node_modules/ora/node_modules/chalk/source/index.js
var require_source2 = __commonJS({
  "node_modules/ora/node_modules/chalk/source/index.js"(exports, module) {
    "use strict";
    var ansiStyles = require_ansi_styles2();
    var { stdout: stdoutColor, stderr: stderrColor } = require_supports_color2();
    var { stringReplaceAll, stringEncaseCRLFWithFirstIndex } = require_util2();
    var { isArray } = Array;
    var levelMapping = [
      "ansi",
      "ansi",
      "ansi256",
      "ansi16m"
    ];
    var styles = /* @__PURE__ */ Object.create(null);
    var applyOptions = /* @__PURE__ */ __name((object, options = {}) => {
      if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
        throw new Error("The `level` option should be an integer from 0 to 3");
      }
      const colorLevel = stdoutColor ? stdoutColor.level : 0;
      object.level = options.level === void 0 ? colorLevel : options.level;
    }, "applyOptions");
    var _a;
    var ChalkClass = (_a = class {
      constructor(options) {
        return chalkFactory(options);
      }
    }, __name(_a, "ChalkClass"), _a);
    var chalkFactory = /* @__PURE__ */ __name((options) => {
      const chalk2 = {};
      applyOptions(chalk2, options);
      chalk2.template = (...arguments_) => chalkTag(chalk2.template, ...arguments_);
      Object.setPrototypeOf(chalk2, Chalk.prototype);
      Object.setPrototypeOf(chalk2.template, chalk2);
      chalk2.template.constructor = () => {
        throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
      };
      chalk2.template.Instance = ChalkClass;
      return chalk2.template;
    }, "chalkFactory");
    function Chalk(options) {
      return chalkFactory(options);
    }
    __name(Chalk, "Chalk");
    for (const [styleName, style] of Object.entries(ansiStyles)) {
      styles[styleName] = {
        get() {
          const builder = createBuilder(this, createStyler(style.open, style.close, this._styler), this._isEmpty);
          Object.defineProperty(this, styleName, {
            value: builder
          });
          return builder;
        }
      };
    }
    styles.visible = {
      get() {
        const builder = createBuilder(this, this._styler, true);
        Object.defineProperty(this, "visible", {
          value: builder
        });
        return builder;
      }
    };
    var usedModels = [
      "rgb",
      "hex",
      "keyword",
      "hsl",
      "hsv",
      "hwb",
      "ansi",
      "ansi256"
    ];
    for (const model of usedModels) {
      styles[model] = {
        get() {
          const { level } = this;
          return function(...arguments_) {
            const styler = createStyler(ansiStyles.color[levelMapping[level]][model](...arguments_), ansiStyles.color.close, this._styler);
            return createBuilder(this, styler, this._isEmpty);
          };
        }
      };
    }
    for (const model of usedModels) {
      const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
      styles[bgModel] = {
        get() {
          const { level } = this;
          return function(...arguments_) {
            const styler = createStyler(ansiStyles.bgColor[levelMapping[level]][model](...arguments_), ansiStyles.bgColor.close, this._styler);
            return createBuilder(this, styler, this._isEmpty);
          };
        }
      };
    }
    var proto = Object.defineProperties(() => {
    }, __spreadProps(__spreadValues({}, styles), {
      level: {
        enumerable: true,
        get() {
          return this._generator.level;
        },
        set(level) {
          this._generator.level = level;
        }
      }
    }));
    var createStyler = /* @__PURE__ */ __name((open, close, parent) => {
      let openAll;
      let closeAll;
      if (parent === void 0) {
        openAll = open;
        closeAll = close;
      } else {
        openAll = parent.openAll + open;
        closeAll = close + parent.closeAll;
      }
      return {
        open,
        close,
        openAll,
        closeAll,
        parent
      };
    }, "createStyler");
    var createBuilder = /* @__PURE__ */ __name((self2, _styler, _isEmpty) => {
      const builder = /* @__PURE__ */ __name((...arguments_) => {
        if (isArray(arguments_[0]) && isArray(arguments_[0].raw)) {
          return applyStyle(builder, chalkTag(builder, ...arguments_));
        }
        return applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
      }, "builder");
      Object.setPrototypeOf(builder, proto);
      builder._generator = self2;
      builder._styler = _styler;
      builder._isEmpty = _isEmpty;
      return builder;
    }, "createBuilder");
    var applyStyle = /* @__PURE__ */ __name((self2, string) => {
      if (self2.level <= 0 || !string) {
        return self2._isEmpty ? "" : string;
      }
      let styler = self2._styler;
      if (styler === void 0) {
        return string;
      }
      const { openAll, closeAll } = styler;
      if (string.indexOf("\x1B") !== -1) {
        while (styler !== void 0) {
          string = stringReplaceAll(string, styler.close, styler.open);
          styler = styler.parent;
        }
      }
      const lfIndex = string.indexOf("\n");
      if (lfIndex !== -1) {
        string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
      }
      return openAll + string + closeAll;
    }, "applyStyle");
    var template;
    var chalkTag = /* @__PURE__ */ __name((chalk2, ...strings) => {
      const [firstString] = strings;
      if (!isArray(firstString) || !isArray(firstString.raw)) {
        return strings.join(" ");
      }
      const arguments_ = strings.slice(1);
      const parts = [
        firstString.raw[0]
      ];
      for (let i = 1; i < firstString.length; i++) {
        parts.push(String(arguments_[i - 1]).replace(/[{}\\]/g, "\\$&"), String(firstString.raw[i]));
      }
      if (template === void 0) {
        template = require_templates4();
      }
      return template(chalk2, parts.join(""));
    }, "chalkTag");
    Object.defineProperties(Chalk.prototype, styles);
    var chalk = Chalk();
    chalk.supportsColor = stdoutColor;
    chalk.stderr = Chalk({
      level: stderrColor ? stderrColor.level : 0
    });
    chalk.stderr.supportsColor = stderrColor;
    module.exports = chalk;
  }
});

// node_modules/mimic-fn/index.js
var require_mimic_fn = __commonJS({
  "node_modules/mimic-fn/index.js"(exports, module) {
    "use strict";
    var mimicFn = /* @__PURE__ */ __name((to, from) => {
      for (const prop of Reflect.ownKeys(from)) {
        Object.defineProperty(to, prop, Object.getOwnPropertyDescriptor(from, prop));
      }
      return to;
    }, "mimicFn");
    module.exports = mimicFn;
    module.exports.default = mimicFn;
  }
});

// node_modules/onetime/index.js
var require_onetime = __commonJS({
  "node_modules/onetime/index.js"(exports, module) {
    "use strict";
    var mimicFn = require_mimic_fn();
    var calledFunctions = /* @__PURE__ */ new WeakMap();
    var onetime = /* @__PURE__ */ __name((function_, options = {}) => {
      if (typeof function_ !== "function") {
        throw new TypeError("Expected a function");
      }
      let returnValue;
      let callCount = 0;
      const functionName = function_.displayName || function_.name || "<anonymous>";
      const onetime2 = /* @__PURE__ */ __name(function(...arguments_) {
        calledFunctions.set(onetime2, ++callCount);
        if (callCount === 1) {
          returnValue = function_.apply(this, arguments_);
          function_ = null;
        } else if (options.throw === true) {
          throw new Error(`Function \`${functionName}\` can only be called once`);
        }
        return returnValue;
      }, "onetime");
      mimicFn(onetime2, function_);
      calledFunctions.set(onetime2, callCount);
      return onetime2;
    }, "onetime");
    module.exports = onetime;
    module.exports.default = onetime;
    module.exports.callCount = (function_) => {
      if (!calledFunctions.has(function_)) {
        throw new Error(`The given function \`${function_.name}\` is not wrapped by the \`onetime\` package`);
      }
      return calledFunctions.get(function_);
    };
  }
});

// node_modules/signal-exit/signals.js
var require_signals = __commonJS({
  "node_modules/signal-exit/signals.js"(exports, module) {
    "use strict";
    module.exports = [
      "SIGABRT",
      "SIGALRM",
      "SIGHUP",
      "SIGINT",
      "SIGTERM"
    ];
    if (process.platform !== "win32") {
      module.exports.push("SIGVTALRM", "SIGXCPU", "SIGXFSZ", "SIGUSR2", "SIGTRAP", "SIGSYS", "SIGQUIT", "SIGIOT");
    }
    if (process.platform === "linux") {
      module.exports.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT", "SIGUNUSED");
    }
  }
});

// node_modules/signal-exit/index.js
var require_signal_exit = __commonJS({
  "node_modules/signal-exit/index.js"(exports, module) {
    "use strict";
    var process2 = global.process;
    var processOk = /* @__PURE__ */ __name(function(process3) {
      return process3 && typeof process3 === "object" && typeof process3.removeListener === "function" && typeof process3.emit === "function" && typeof process3.reallyExit === "function" && typeof process3.listeners === "function" && typeof process3.kill === "function" && typeof process3.pid === "number" && typeof process3.on === "function";
    }, "processOk");
    if (!processOk(process2)) {
      module.exports = function() {
        return function() {
        };
      };
    } else {
      assert = __require("assert");
      signals = require_signals();
      isWin = /^win/i.test(process2.platform);
      EE = __require("events");
      if (typeof EE !== "function") {
        EE = EE.EventEmitter;
      }
      if (process2.__signal_exit_emitter__) {
        emitter = process2.__signal_exit_emitter__;
      } else {
        emitter = process2.__signal_exit_emitter__ = new EE();
        emitter.count = 0;
        emitter.emitted = {};
      }
      if (!emitter.infinite) {
        emitter.setMaxListeners(Infinity);
        emitter.infinite = true;
      }
      module.exports = function(cb, opts) {
        if (!processOk(global.process)) {
          return function() {
          };
        }
        assert.equal(typeof cb, "function", "a callback must be provided for exit handler");
        if (loaded === false) {
          load();
        }
        var ev = "exit";
        if (opts && opts.alwaysLast) {
          ev = "afterexit";
        }
        var remove = /* @__PURE__ */ __name(function() {
          emitter.removeListener(ev, cb);
          if (emitter.listeners("exit").length === 0 && emitter.listeners("afterexit").length === 0) {
            unload();
          }
        }, "remove");
        emitter.on(ev, cb);
        return remove;
      };
      unload = /* @__PURE__ */ __name(function unload2() {
        if (!loaded || !processOk(global.process)) {
          return;
        }
        loaded = false;
        signals.forEach(function(sig) {
          try {
            process2.removeListener(sig, sigListeners[sig]);
          } catch (er) {
          }
        });
        process2.emit = originalProcessEmit;
        process2.reallyExit = originalProcessReallyExit;
        emitter.count -= 1;
      }, "unload");
      module.exports.unload = unload;
      emit = /* @__PURE__ */ __name(function emit2(event, code, signal) {
        if (emitter.emitted[event]) {
          return;
        }
        emitter.emitted[event] = true;
        emitter.emit(event, code, signal);
      }, "emit");
      sigListeners = {};
      signals.forEach(function(sig) {
        sigListeners[sig] = /* @__PURE__ */ __name(function listener() {
          if (!processOk(global.process)) {
            return;
          }
          var listeners = process2.listeners(sig);
          if (listeners.length === emitter.count) {
            unload();
            emit("exit", null, sig);
            emit("afterexit", null, sig);
            if (isWin && sig === "SIGHUP") {
              sig = "SIGINT";
            }
            process2.kill(process2.pid, sig);
          }
        }, "listener");
      });
      module.exports.signals = function() {
        return signals;
      };
      loaded = false;
      load = /* @__PURE__ */ __name(function load2() {
        if (loaded || !processOk(global.process)) {
          return;
        }
        loaded = true;
        emitter.count += 1;
        signals = signals.filter(function(sig) {
          try {
            process2.on(sig, sigListeners[sig]);
            return true;
          } catch (er) {
            return false;
          }
        });
        process2.emit = processEmit;
        process2.reallyExit = processReallyExit;
      }, "load");
      module.exports.load = load;
      originalProcessReallyExit = process2.reallyExit;
      processReallyExit = /* @__PURE__ */ __name(function processReallyExit2(code) {
        if (!processOk(global.process)) {
          return;
        }
        process2.exitCode = code || /* istanbul ignore next */
        0;
        emit("exit", process2.exitCode, null);
        emit("afterexit", process2.exitCode, null);
        originalProcessReallyExit.call(process2, process2.exitCode);
      }, "processReallyExit");
      originalProcessEmit = process2.emit;
      processEmit = /* @__PURE__ */ __name(function processEmit2(ev, arg) {
        if (ev === "exit" && processOk(global.process)) {
          if (arg !== void 0) {
            process2.exitCode = arg;
          }
          var ret = originalProcessEmit.apply(this, arguments);
          emit("exit", process2.exitCode, null);
          emit("afterexit", process2.exitCode, null);
          return ret;
        } else {
          return originalProcessEmit.apply(this, arguments);
        }
      }, "processEmit");
    }
    var assert;
    var signals;
    var isWin;
    var EE;
    var emitter;
    var unload;
    var emit;
    var sigListeners;
    var loaded;
    var load;
    var originalProcessReallyExit;
    var processReallyExit;
    var originalProcessEmit;
    var processEmit;
  }
});

// node_modules/restore-cursor/index.js
var require_restore_cursor = __commonJS({
  "node_modules/restore-cursor/index.js"(exports, module) {
    "use strict";
    var onetime = require_onetime();
    var signalExit = require_signal_exit();
    module.exports = onetime(() => {
      signalExit(() => {
        process.stderr.write("\x1B[?25h");
      }, {
        alwaysLast: true
      });
    });
  }
});

// node_modules/cli-cursor/index.js
var require_cli_cursor = __commonJS({
  "node_modules/cli-cursor/index.js"(exports) {
    "use strict";
    var restoreCursor = require_restore_cursor();
    var isHidden = false;
    exports.show = (writableStream = process.stderr) => {
      if (!writableStream.isTTY) {
        return;
      }
      isHidden = false;
      writableStream.write("\x1B[?25h");
    };
    exports.hide = (writableStream = process.stderr) => {
      if (!writableStream.isTTY) {
        return;
      }
      restoreCursor();
      isHidden = true;
      writableStream.write("\x1B[?25l");
    };
    exports.toggle = (force, writableStream) => {
      if (force !== void 0) {
        isHidden = force;
      }
      if (isHidden) {
        exports.show(writableStream);
      } else {
        exports.hide(writableStream);
      }
    };
  }
});

// node_modules/cli-spinners/spinners.json
var require_spinners = __commonJS({
  "node_modules/cli-spinners/spinners.json"(exports, module) {
    module.exports = {
      dots: {
        interval: 80,
        frames: [
          "\u280B",
          "\u2819",
          "\u2839",
          "\u2838",
          "\u283C",
          "\u2834",
          "\u2826",
          "\u2827",
          "\u2807",
          "\u280F"
        ]
      },
      dots2: {
        interval: 80,
        frames: [
          "\u28FE",
          "\u28FD",
          "\u28FB",
          "\u28BF",
          "\u287F",
          "\u28DF",
          "\u28EF",
          "\u28F7"
        ]
      },
      dots3: {
        interval: 80,
        frames: [
          "\u280B",
          "\u2819",
          "\u281A",
          "\u281E",
          "\u2816",
          "\u2826",
          "\u2834",
          "\u2832",
          "\u2833",
          "\u2813"
        ]
      },
      dots4: {
        interval: 80,
        frames: [
          "\u2804",
          "\u2806",
          "\u2807",
          "\u280B",
          "\u2819",
          "\u2838",
          "\u2830",
          "\u2820",
          "\u2830",
          "\u2838",
          "\u2819",
          "\u280B",
          "\u2807",
          "\u2806"
        ]
      },
      dots5: {
        interval: 80,
        frames: [
          "\u280B",
          "\u2819",
          "\u281A",
          "\u2812",
          "\u2802",
          "\u2802",
          "\u2812",
          "\u2832",
          "\u2834",
          "\u2826",
          "\u2816",
          "\u2812",
          "\u2810",
          "\u2810",
          "\u2812",
          "\u2813",
          "\u280B"
        ]
      },
      dots6: {
        interval: 80,
        frames: [
          "\u2801",
          "\u2809",
          "\u2819",
          "\u281A",
          "\u2812",
          "\u2802",
          "\u2802",
          "\u2812",
          "\u2832",
          "\u2834",
          "\u2824",
          "\u2804",
          "\u2804",
          "\u2824",
          "\u2834",
          "\u2832",
          "\u2812",
          "\u2802",
          "\u2802",
          "\u2812",
          "\u281A",
          "\u2819",
          "\u2809",
          "\u2801"
        ]
      },
      dots7: {
        interval: 80,
        frames: [
          "\u2808",
          "\u2809",
          "\u280B",
          "\u2813",
          "\u2812",
          "\u2810",
          "\u2810",
          "\u2812",
          "\u2816",
          "\u2826",
          "\u2824",
          "\u2820",
          "\u2820",
          "\u2824",
          "\u2826",
          "\u2816",
          "\u2812",
          "\u2810",
          "\u2810",
          "\u2812",
          "\u2813",
          "\u280B",
          "\u2809",
          "\u2808"
        ]
      },
      dots8: {
        interval: 80,
        frames: [
          "\u2801",
          "\u2801",
          "\u2809",
          "\u2819",
          "\u281A",
          "\u2812",
          "\u2802",
          "\u2802",
          "\u2812",
          "\u2832",
          "\u2834",
          "\u2824",
          "\u2804",
          "\u2804",
          "\u2824",
          "\u2820",
          "\u2820",
          "\u2824",
          "\u2826",
          "\u2816",
          "\u2812",
          "\u2810",
          "\u2810",
          "\u2812",
          "\u2813",
          "\u280B",
          "\u2809",
          "\u2808",
          "\u2808"
        ]
      },
      dots9: {
        interval: 80,
        frames: [
          "\u28B9",
          "\u28BA",
          "\u28BC",
          "\u28F8",
          "\u28C7",
          "\u2867",
          "\u2857",
          "\u284F"
        ]
      },
      dots10: {
        interval: 80,
        frames: [
          "\u2884",
          "\u2882",
          "\u2881",
          "\u2841",
          "\u2848",
          "\u2850",
          "\u2860"
        ]
      },
      dots11: {
        interval: 100,
        frames: [
          "\u2801",
          "\u2802",
          "\u2804",
          "\u2840",
          "\u2880",
          "\u2820",
          "\u2810",
          "\u2808"
        ]
      },
      dots12: {
        interval: 80,
        frames: [
          "\u2880\u2800",
          "\u2840\u2800",
          "\u2804\u2800",
          "\u2882\u2800",
          "\u2842\u2800",
          "\u2805\u2800",
          "\u2883\u2800",
          "\u2843\u2800",
          "\u280D\u2800",
          "\u288B\u2800",
          "\u284B\u2800",
          "\u280D\u2801",
          "\u288B\u2801",
          "\u284B\u2801",
          "\u280D\u2809",
          "\u280B\u2809",
          "\u280B\u2809",
          "\u2809\u2819",
          "\u2809\u2819",
          "\u2809\u2829",
          "\u2808\u2899",
          "\u2808\u2859",
          "\u2888\u2829",
          "\u2840\u2899",
          "\u2804\u2859",
          "\u2882\u2829",
          "\u2842\u2898",
          "\u2805\u2858",
          "\u2883\u2828",
          "\u2843\u2890",
          "\u280D\u2850",
          "\u288B\u2820",
          "\u284B\u2880",
          "\u280D\u2841",
          "\u288B\u2801",
          "\u284B\u2801",
          "\u280D\u2809",
          "\u280B\u2809",
          "\u280B\u2809",
          "\u2809\u2819",
          "\u2809\u2819",
          "\u2809\u2829",
          "\u2808\u2899",
          "\u2808\u2859",
          "\u2808\u2829",
          "\u2800\u2899",
          "\u2800\u2859",
          "\u2800\u2829",
          "\u2800\u2898",
          "\u2800\u2858",
          "\u2800\u2828",
          "\u2800\u2890",
          "\u2800\u2850",
          "\u2800\u2820",
          "\u2800\u2880",
          "\u2800\u2840"
        ]
      },
      dots13: {
        interval: 80,
        frames: [
          "\u28FC",
          "\u28F9",
          "\u28BB",
          "\u283F",
          "\u285F",
          "\u28CF",
          "\u28E7",
          "\u28F6"
        ]
      },
      dots8Bit: {
        interval: 80,
        frames: [
          "\u2800",
          "\u2801",
          "\u2802",
          "\u2803",
          "\u2804",
          "\u2805",
          "\u2806",
          "\u2807",
          "\u2840",
          "\u2841",
          "\u2842",
          "\u2843",
          "\u2844",
          "\u2845",
          "\u2846",
          "\u2847",
          "\u2808",
          "\u2809",
          "\u280A",
          "\u280B",
          "\u280C",
          "\u280D",
          "\u280E",
          "\u280F",
          "\u2848",
          "\u2849",
          "\u284A",
          "\u284B",
          "\u284C",
          "\u284D",
          "\u284E",
          "\u284F",
          "\u2810",
          "\u2811",
          "\u2812",
          "\u2813",
          "\u2814",
          "\u2815",
          "\u2816",
          "\u2817",
          "\u2850",
          "\u2851",
          "\u2852",
          "\u2853",
          "\u2854",
          "\u2855",
          "\u2856",
          "\u2857",
          "\u2818",
          "\u2819",
          "\u281A",
          "\u281B",
          "\u281C",
          "\u281D",
          "\u281E",
          "\u281F",
          "\u2858",
          "\u2859",
          "\u285A",
          "\u285B",
          "\u285C",
          "\u285D",
          "\u285E",
          "\u285F",
          "\u2820",
          "\u2821",
          "\u2822",
          "\u2823",
          "\u2824",
          "\u2825",
          "\u2826",
          "\u2827",
          "\u2860",
          "\u2861",
          "\u2862",
          "\u2863",
          "\u2864",
          "\u2865",
          "\u2866",
          "\u2867",
          "\u2828",
          "\u2829",
          "\u282A",
          "\u282B",
          "\u282C",
          "\u282D",
          "\u282E",
          "\u282F",
          "\u2868",
          "\u2869",
          "\u286A",
          "\u286B",
          "\u286C",
          "\u286D",
          "\u286E",
          "\u286F",
          "\u2830",
          "\u2831",
          "\u2832",
          "\u2833",
          "\u2834",
          "\u2835",
          "\u2836",
          "\u2837",
          "\u2870",
          "\u2871",
          "\u2872",
          "\u2873",
          "\u2874",
          "\u2875",
          "\u2876",
          "\u2877",
          "\u2838",
          "\u2839",
          "\u283A",
          "\u283B",
          "\u283C",
          "\u283D",
          "\u283E",
          "\u283F",
          "\u2878",
          "\u2879",
          "\u287A",
          "\u287B",
          "\u287C",
          "\u287D",
          "\u287E",
          "\u287F",
          "\u2880",
          "\u2881",
          "\u2882",
          "\u2883",
          "\u2884",
          "\u2885",
          "\u2886",
          "\u2887",
          "\u28C0",
          "\u28C1",
          "\u28C2",
          "\u28C3",
          "\u28C4",
          "\u28C5",
          "\u28C6",
          "\u28C7",
          "\u2888",
          "\u2889",
          "\u288A",
          "\u288B",
          "\u288C",
          "\u288D",
          "\u288E",
          "\u288F",
          "\u28C8",
          "\u28C9",
          "\u28CA",
          "\u28CB",
          "\u28CC",
          "\u28CD",
          "\u28CE",
          "\u28CF",
          "\u2890",
          "\u2891",
          "\u2892",
          "\u2893",
          "\u2894",
          "\u2895",
          "\u2896",
          "\u2897",
          "\u28D0",
          "\u28D1",
          "\u28D2",
          "\u28D3",
          "\u28D4",
          "\u28D5",
          "\u28D6",
          "\u28D7",
          "\u2898",
          "\u2899",
          "\u289A",
          "\u289B",
          "\u289C",
          "\u289D",
          "\u289E",
          "\u289F",
          "\u28D8",
          "\u28D9",
          "\u28DA",
          "\u28DB",
          "\u28DC",
          "\u28DD",
          "\u28DE",
          "\u28DF",
          "\u28A0",
          "\u28A1",
          "\u28A2",
          "\u28A3",
          "\u28A4",
          "\u28A5",
          "\u28A6",
          "\u28A7",
          "\u28E0",
          "\u28E1",
          "\u28E2",
          "\u28E3",
          "\u28E4",
          "\u28E5",
          "\u28E6",
          "\u28E7",
          "\u28A8",
          "\u28A9",
          "\u28AA",
          "\u28AB",
          "\u28AC",
          "\u28AD",
          "\u28AE",
          "\u28AF",
          "\u28E8",
          "\u28E9",
          "\u28EA",
          "\u28EB",
          "\u28EC",
          "\u28ED",
          "\u28EE",
          "\u28EF",
          "\u28B0",
          "\u28B1",
          "\u28B2",
          "\u28B3",
          "\u28B4",
          "\u28B5",
          "\u28B6",
          "\u28B7",
          "\u28F0",
          "\u28F1",
          "\u28F2",
          "\u28F3",
          "\u28F4",
          "\u28F5",
          "\u28F6",
          "\u28F7",
          "\u28B8",
          "\u28B9",
          "\u28BA",
          "\u28BB",
          "\u28BC",
          "\u28BD",
          "\u28BE",
          "\u28BF",
          "\u28F8",
          "\u28F9",
          "\u28FA",
          "\u28FB",
          "\u28FC",
          "\u28FD",
          "\u28FE",
          "\u28FF"
        ]
      },
      sand: {
        interval: 80,
        frames: [
          "\u2801",
          "\u2802",
          "\u2804",
          "\u2840",
          "\u2848",
          "\u2850",
          "\u2860",
          "\u28C0",
          "\u28C1",
          "\u28C2",
          "\u28C4",
          "\u28CC",
          "\u28D4",
          "\u28E4",
          "\u28E5",
          "\u28E6",
          "\u28EE",
          "\u28F6",
          "\u28F7",
          "\u28FF",
          "\u287F",
          "\u283F",
          "\u289F",
          "\u281F",
          "\u285B",
          "\u281B",
          "\u282B",
          "\u288B",
          "\u280B",
          "\u280D",
          "\u2849",
          "\u2809",
          "\u2811",
          "\u2821",
          "\u2881"
        ]
      },
      line: {
        interval: 130,
        frames: [
          "-",
          "\\",
          "|",
          "/"
        ]
      },
      line2: {
        interval: 100,
        frames: [
          "\u2802",
          "-",
          "\u2013",
          "\u2014",
          "\u2013",
          "-"
        ]
      },
      pipe: {
        interval: 100,
        frames: [
          "\u2524",
          "\u2518",
          "\u2534",
          "\u2514",
          "\u251C",
          "\u250C",
          "\u252C",
          "\u2510"
        ]
      },
      simpleDots: {
        interval: 400,
        frames: [
          ".  ",
          ".. ",
          "...",
          "   "
        ]
      },
      simpleDotsScrolling: {
        interval: 200,
        frames: [
          ".  ",
          ".. ",
          "...",
          " ..",
          "  .",
          "   "
        ]
      },
      star: {
        interval: 70,
        frames: [
          "\u2736",
          "\u2738",
          "\u2739",
          "\u273A",
          "\u2739",
          "\u2737"
        ]
      },
      star2: {
        interval: 80,
        frames: [
          "+",
          "x",
          "*"
        ]
      },
      flip: {
        interval: 70,
        frames: [
          "_",
          "_",
          "_",
          "-",
          "`",
          "`",
          "'",
          "\xB4",
          "-",
          "_",
          "_",
          "_"
        ]
      },
      hamburger: {
        interval: 100,
        frames: [
          "\u2631",
          "\u2632",
          "\u2634"
        ]
      },
      growVertical: {
        interval: 120,
        frames: [
          "\u2581",
          "\u2583",
          "\u2584",
          "\u2585",
          "\u2586",
          "\u2587",
          "\u2586",
          "\u2585",
          "\u2584",
          "\u2583"
        ]
      },
      growHorizontal: {
        interval: 120,
        frames: [
          "\u258F",
          "\u258E",
          "\u258D",
          "\u258C",
          "\u258B",
          "\u258A",
          "\u2589",
          "\u258A",
          "\u258B",
          "\u258C",
          "\u258D",
          "\u258E"
        ]
      },
      balloon: {
        interval: 140,
        frames: [
          " ",
          ".",
          "o",
          "O",
          "@",
          "*",
          " "
        ]
      },
      balloon2: {
        interval: 120,
        frames: [
          ".",
          "o",
          "O",
          "\xB0",
          "O",
          "o",
          "."
        ]
      },
      noise: {
        interval: 100,
        frames: [
          "\u2593",
          "\u2592",
          "\u2591"
        ]
      },
      bounce: {
        interval: 120,
        frames: [
          "\u2801",
          "\u2802",
          "\u2804",
          "\u2802"
        ]
      },
      boxBounce: {
        interval: 120,
        frames: [
          "\u2596",
          "\u2598",
          "\u259D",
          "\u2597"
        ]
      },
      boxBounce2: {
        interval: 100,
        frames: [
          "\u258C",
          "\u2580",
          "\u2590",
          "\u2584"
        ]
      },
      triangle: {
        interval: 50,
        frames: [
          "\u25E2",
          "\u25E3",
          "\u25E4",
          "\u25E5"
        ]
      },
      binary: {
        interval: 80,
        frames: [
          "010010",
          "001100",
          "100101",
          "111010",
          "111101",
          "010111",
          "101011",
          "111000",
          "110011",
          "110101"
        ]
      },
      arc: {
        interval: 100,
        frames: [
          "\u25DC",
          "\u25E0",
          "\u25DD",
          "\u25DE",
          "\u25E1",
          "\u25DF"
        ]
      },
      circle: {
        interval: 120,
        frames: [
          "\u25E1",
          "\u2299",
          "\u25E0"
        ]
      },
      squareCorners: {
        interval: 180,
        frames: [
          "\u25F0",
          "\u25F3",
          "\u25F2",
          "\u25F1"
        ]
      },
      circleQuarters: {
        interval: 120,
        frames: [
          "\u25F4",
          "\u25F7",
          "\u25F6",
          "\u25F5"
        ]
      },
      circleHalves: {
        interval: 50,
        frames: [
          "\u25D0",
          "\u25D3",
          "\u25D1",
          "\u25D2"
        ]
      },
      squish: {
        interval: 100,
        frames: [
          "\u256B",
          "\u256A"
        ]
      },
      toggle: {
        interval: 250,
        frames: [
          "\u22B6",
          "\u22B7"
        ]
      },
      toggle2: {
        interval: 80,
        frames: [
          "\u25AB",
          "\u25AA"
        ]
      },
      toggle3: {
        interval: 120,
        frames: [
          "\u25A1",
          "\u25A0"
        ]
      },
      toggle4: {
        interval: 100,
        frames: [
          "\u25A0",
          "\u25A1",
          "\u25AA",
          "\u25AB"
        ]
      },
      toggle5: {
        interval: 100,
        frames: [
          "\u25AE",
          "\u25AF"
        ]
      },
      toggle6: {
        interval: 300,
        frames: [
          "\u101D",
          "\u1040"
        ]
      },
      toggle7: {
        interval: 80,
        frames: [
          "\u29BE",
          "\u29BF"
        ]
      },
      toggle8: {
        interval: 100,
        frames: [
          "\u25CD",
          "\u25CC"
        ]
      },
      toggle9: {
        interval: 100,
        frames: [
          "\u25C9",
          "\u25CE"
        ]
      },
      toggle10: {
        interval: 100,
        frames: [
          "\u3282",
          "\u3280",
          "\u3281"
        ]
      },
      toggle11: {
        interval: 50,
        frames: [
          "\u29C7",
          "\u29C6"
        ]
      },
      toggle12: {
        interval: 120,
        frames: [
          "\u2617",
          "\u2616"
        ]
      },
      toggle13: {
        interval: 80,
        frames: [
          "=",
          "*",
          "-"
        ]
      },
      arrow: {
        interval: 100,
        frames: [
          "\u2190",
          "\u2196",
          "\u2191",
          "\u2197",
          "\u2192",
          "\u2198",
          "\u2193",
          "\u2199"
        ]
      },
      arrow2: {
        interval: 80,
        frames: [
          "\u2B06\uFE0F ",
          "\u2197\uFE0F ",
          "\u27A1\uFE0F ",
          "\u2198\uFE0F ",
          "\u2B07\uFE0F ",
          "\u2199\uFE0F ",
          "\u2B05\uFE0F ",
          "\u2196\uFE0F "
        ]
      },
      arrow3: {
        interval: 120,
        frames: [
          "\u25B9\u25B9\u25B9\u25B9\u25B9",
          "\u25B8\u25B9\u25B9\u25B9\u25B9",
          "\u25B9\u25B8\u25B9\u25B9\u25B9",
          "\u25B9\u25B9\u25B8\u25B9\u25B9",
          "\u25B9\u25B9\u25B9\u25B8\u25B9",
          "\u25B9\u25B9\u25B9\u25B9\u25B8"
        ]
      },
      bouncingBar: {
        interval: 80,
        frames: [
          "[    ]",
          "[=   ]",
          "[==  ]",
          "[=== ]",
          "[====]",
          "[ ===]",
          "[  ==]",
          "[   =]",
          "[    ]",
          "[   =]",
          "[  ==]",
          "[ ===]",
          "[====]",
          "[=== ]",
          "[==  ]",
          "[=   ]"
        ]
      },
      bouncingBall: {
        interval: 80,
        frames: [
          "( \u25CF    )",
          "(  \u25CF   )",
          "(   \u25CF  )",
          "(    \u25CF )",
          "(     \u25CF)",
          "(    \u25CF )",
          "(   \u25CF  )",
          "(  \u25CF   )",
          "( \u25CF    )",
          "(\u25CF     )"
        ]
      },
      smiley: {
        interval: 200,
        frames: [
          "\u{1F604} ",
          "\u{1F61D} "
        ]
      },
      monkey: {
        interval: 300,
        frames: [
          "\u{1F648} ",
          "\u{1F648} ",
          "\u{1F649} ",
          "\u{1F64A} "
        ]
      },
      hearts: {
        interval: 100,
        frames: [
          "\u{1F49B} ",
          "\u{1F499} ",
          "\u{1F49C} ",
          "\u{1F49A} ",
          "\u2764\uFE0F "
        ]
      },
      clock: {
        interval: 100,
        frames: [
          "\u{1F55B} ",
          "\u{1F550} ",
          "\u{1F551} ",
          "\u{1F552} ",
          "\u{1F553} ",
          "\u{1F554} ",
          "\u{1F555} ",
          "\u{1F556} ",
          "\u{1F557} ",
          "\u{1F558} ",
          "\u{1F559} ",
          "\u{1F55A} "
        ]
      },
      earth: {
        interval: 180,
        frames: [
          "\u{1F30D} ",
          "\u{1F30E} ",
          "\u{1F30F} "
        ]
      },
      material: {
        interval: 17,
        frames: [
          "\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
          "\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
          "\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
          "\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
          "\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
          "\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
          "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
          "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
          "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
          "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
          "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
          "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
          "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
          "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581",
          "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581",
          "\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581",
          "\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581",
          "\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581",
          "\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581",
          "\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581",
          "\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581",
          "\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581",
          "\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581",
          "\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
          "\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
          "\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588",
          "\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588",
          "\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588",
          "\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588",
          "\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588",
          "\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588",
          "\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588",
          "\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588",
          "\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588",
          "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
          "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
          "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
          "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
          "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
          "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
          "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
          "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
          "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581",
          "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581\u2581",
          "\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581",
          "\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581\u2581",
          "\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581\u2581",
          "\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581",
          "\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581\u2581",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581\u2581",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2581",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588\u2588\u2588",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588\u2588",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588\u2588",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588\u2588",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588\u2588",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2588",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581",
          "\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581\u2581"
        ]
      },
      moon: {
        interval: 80,
        frames: [
          "\u{1F311} ",
          "\u{1F312} ",
          "\u{1F313} ",
          "\u{1F314} ",
          "\u{1F315} ",
          "\u{1F316} ",
          "\u{1F317} ",
          "\u{1F318} "
        ]
      },
      runner: {
        interval: 140,
        frames: [
          "\u{1F6B6} ",
          "\u{1F3C3} "
        ]
      },
      pong: {
        interval: 80,
        frames: [
          "\u2590\u2802       \u258C",
          "\u2590\u2808       \u258C",
          "\u2590 \u2802      \u258C",
          "\u2590 \u2820      \u258C",
          "\u2590  \u2840     \u258C",
          "\u2590  \u2820     \u258C",
          "\u2590   \u2802    \u258C",
          "\u2590   \u2808    \u258C",
          "\u2590    \u2802   \u258C",
          "\u2590    \u2820   \u258C",
          "\u2590     \u2840  \u258C",
          "\u2590     \u2820  \u258C",
          "\u2590      \u2802 \u258C",
          "\u2590      \u2808 \u258C",
          "\u2590       \u2802\u258C",
          "\u2590       \u2820\u258C",
          "\u2590       \u2840\u258C",
          "\u2590      \u2820 \u258C",
          "\u2590      \u2802 \u258C",
          "\u2590     \u2808  \u258C",
          "\u2590     \u2802  \u258C",
          "\u2590    \u2820   \u258C",
          "\u2590    \u2840   \u258C",
          "\u2590   \u2820    \u258C",
          "\u2590   \u2802    \u258C",
          "\u2590  \u2808     \u258C",
          "\u2590  \u2802     \u258C",
          "\u2590 \u2820      \u258C",
          "\u2590 \u2840      \u258C",
          "\u2590\u2820       \u258C"
        ]
      },
      shark: {
        interval: 120,
        frames: [
          "\u2590|\\____________\u258C",
          "\u2590_|\\___________\u258C",
          "\u2590__|\\__________\u258C",
          "\u2590___|\\_________\u258C",
          "\u2590____|\\________\u258C",
          "\u2590_____|\\_______\u258C",
          "\u2590______|\\______\u258C",
          "\u2590_______|\\_____\u258C",
          "\u2590________|\\____\u258C",
          "\u2590_________|\\___\u258C",
          "\u2590__________|\\__\u258C",
          "\u2590___________|\\_\u258C",
          "\u2590____________|\\\u258C",
          "\u2590____________/|\u258C",
          "\u2590___________/|_\u258C",
          "\u2590__________/|__\u258C",
          "\u2590_________/|___\u258C",
          "\u2590________/|____\u258C",
          "\u2590_______/|_____\u258C",
          "\u2590______/|______\u258C",
          "\u2590_____/|_______\u258C",
          "\u2590____/|________\u258C",
          "\u2590___/|_________\u258C",
          "\u2590__/|__________\u258C",
          "\u2590_/|___________\u258C",
          "\u2590/|____________\u258C"
        ]
      },
      dqpb: {
        interval: 100,
        frames: [
          "d",
          "q",
          "p",
          "b"
        ]
      },
      weather: {
        interval: 100,
        frames: [
          "\u2600\uFE0F ",
          "\u2600\uFE0F ",
          "\u2600\uFE0F ",
          "\u{1F324} ",
          "\u26C5\uFE0F ",
          "\u{1F325} ",
          "\u2601\uFE0F ",
          "\u{1F327} ",
          "\u{1F328} ",
          "\u{1F327} ",
          "\u{1F328} ",
          "\u{1F327} ",
          "\u{1F328} ",
          "\u26C8 ",
          "\u{1F328} ",
          "\u{1F327} ",
          "\u{1F328} ",
          "\u2601\uFE0F ",
          "\u{1F325} ",
          "\u26C5\uFE0F ",
          "\u{1F324} ",
          "\u2600\uFE0F ",
          "\u2600\uFE0F "
        ]
      },
      christmas: {
        interval: 400,
        frames: [
          "\u{1F332}",
          "\u{1F384}"
        ]
      },
      grenade: {
        interval: 80,
        frames: [
          "\u060C  ",
          "\u2032  ",
          " \xB4 ",
          " \u203E ",
          "  \u2E0C",
          "  \u2E0A",
          "  |",
          "  \u204E",
          "  \u2055",
          " \u0DF4 ",
          "  \u2053",
          "   ",
          "   ",
          "   "
        ]
      },
      point: {
        interval: 125,
        frames: [
          "\u2219\u2219\u2219",
          "\u25CF\u2219\u2219",
          "\u2219\u25CF\u2219",
          "\u2219\u2219\u25CF",
          "\u2219\u2219\u2219"
        ]
      },
      layer: {
        interval: 150,
        frames: [
          "-",
          "=",
          "\u2261"
        ]
      },
      betaWave: {
        interval: 80,
        frames: [
          "\u03C1\u03B2\u03B2\u03B2\u03B2\u03B2\u03B2",
          "\u03B2\u03C1\u03B2\u03B2\u03B2\u03B2\u03B2",
          "\u03B2\u03B2\u03C1\u03B2\u03B2\u03B2\u03B2",
          "\u03B2\u03B2\u03B2\u03C1\u03B2\u03B2\u03B2",
          "\u03B2\u03B2\u03B2\u03B2\u03C1\u03B2\u03B2",
          "\u03B2\u03B2\u03B2\u03B2\u03B2\u03C1\u03B2",
          "\u03B2\u03B2\u03B2\u03B2\u03B2\u03B2\u03C1"
        ]
      },
      fingerDance: {
        interval: 160,
        frames: [
          "\u{1F918} ",
          "\u{1F91F} ",
          "\u{1F596} ",
          "\u270B ",
          "\u{1F91A} ",
          "\u{1F446} "
        ]
      },
      fistBump: {
        interval: 80,
        frames: [
          "\u{1F91C}\u3000\u3000\u3000\u3000\u{1F91B} ",
          "\u{1F91C}\u3000\u3000\u3000\u3000\u{1F91B} ",
          "\u{1F91C}\u3000\u3000\u3000\u3000\u{1F91B} ",
          "\u3000\u{1F91C}\u3000\u3000\u{1F91B}\u3000 ",
          "\u3000\u3000\u{1F91C}\u{1F91B}\u3000\u3000 ",
          "\u3000\u{1F91C}\u2728\u{1F91B}\u3000\u3000 ",
          "\u{1F91C}\u3000\u2728\u3000\u{1F91B}\u3000 "
        ]
      },
      soccerHeader: {
        interval: 80,
        frames: [
          " \u{1F9D1}\u26BD\uFE0F       \u{1F9D1} ",
          "\u{1F9D1}  \u26BD\uFE0F      \u{1F9D1} ",
          "\u{1F9D1}   \u26BD\uFE0F     \u{1F9D1} ",
          "\u{1F9D1}    \u26BD\uFE0F    \u{1F9D1} ",
          "\u{1F9D1}     \u26BD\uFE0F   \u{1F9D1} ",
          "\u{1F9D1}      \u26BD\uFE0F  \u{1F9D1} ",
          "\u{1F9D1}       \u26BD\uFE0F\u{1F9D1}  ",
          "\u{1F9D1}      \u26BD\uFE0F  \u{1F9D1} ",
          "\u{1F9D1}     \u26BD\uFE0F   \u{1F9D1} ",
          "\u{1F9D1}    \u26BD\uFE0F    \u{1F9D1} ",
          "\u{1F9D1}   \u26BD\uFE0F     \u{1F9D1} ",
          "\u{1F9D1}  \u26BD\uFE0F      \u{1F9D1} "
        ]
      },
      mindblown: {
        interval: 160,
        frames: [
          "\u{1F610} ",
          "\u{1F610} ",
          "\u{1F62E} ",
          "\u{1F62E} ",
          "\u{1F626} ",
          "\u{1F626} ",
          "\u{1F627} ",
          "\u{1F627} ",
          "\u{1F92F} ",
          "\u{1F4A5} ",
          "\u2728 ",
          "\u3000 ",
          "\u3000 ",
          "\u3000 "
        ]
      },
      speaker: {
        interval: 160,
        frames: [
          "\u{1F508} ",
          "\u{1F509} ",
          "\u{1F50A} ",
          "\u{1F509} "
        ]
      },
      orangePulse: {
        interval: 100,
        frames: [
          "\u{1F538} ",
          "\u{1F536} ",
          "\u{1F7E0} ",
          "\u{1F7E0} ",
          "\u{1F536} "
        ]
      },
      bluePulse: {
        interval: 100,
        frames: [
          "\u{1F539} ",
          "\u{1F537} ",
          "\u{1F535} ",
          "\u{1F535} ",
          "\u{1F537} "
        ]
      },
      orangeBluePulse: {
        interval: 100,
        frames: [
          "\u{1F538} ",
          "\u{1F536} ",
          "\u{1F7E0} ",
          "\u{1F7E0} ",
          "\u{1F536} ",
          "\u{1F539} ",
          "\u{1F537} ",
          "\u{1F535} ",
          "\u{1F535} ",
          "\u{1F537} "
        ]
      },
      timeTravel: {
        interval: 100,
        frames: [
          "\u{1F55B} ",
          "\u{1F55A} ",
          "\u{1F559} ",
          "\u{1F558} ",
          "\u{1F557} ",
          "\u{1F556} ",
          "\u{1F555} ",
          "\u{1F554} ",
          "\u{1F553} ",
          "\u{1F552} ",
          "\u{1F551} ",
          "\u{1F550} "
        ]
      },
      aesthetic: {
        interval: 80,
        frames: [
          "\u25B0\u25B1\u25B1\u25B1\u25B1\u25B1\u25B1",
          "\u25B0\u25B0\u25B1\u25B1\u25B1\u25B1\u25B1",
          "\u25B0\u25B0\u25B0\u25B1\u25B1\u25B1\u25B1",
          "\u25B0\u25B0\u25B0\u25B0\u25B1\u25B1\u25B1",
          "\u25B0\u25B0\u25B0\u25B0\u25B0\u25B1\u25B1",
          "\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B1",
          "\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0",
          "\u25B0\u25B1\u25B1\u25B1\u25B1\u25B1\u25B1"
        ]
      },
      dwarfFortress: {
        interval: 80,
        frames: [
          " \u2588\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
          "\u263A\u2588\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
          "\u263A\u2588\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
          "\u263A\u2593\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
          "\u263A\u2593\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
          "\u263A\u2592\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
          "\u263A\u2592\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
          "\u263A\u2591\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
          "\u263A\u2591\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
          "\u263A \u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
          " \u263A\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
          " \u263A\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
          " \u263A\u2593\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
          " \u263A\u2593\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
          " \u263A\u2592\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
          " \u263A\u2592\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
          " \u263A\u2591\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
          " \u263A\u2591\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
          " \u263A \u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
          "  \u263A\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
          "  \u263A\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
          "  \u263A\u2593\u2588\u2588\u2588\xA3\xA3\xA3  ",
          "  \u263A\u2593\u2588\u2588\u2588\xA3\xA3\xA3  ",
          "  \u263A\u2592\u2588\u2588\u2588\xA3\xA3\xA3  ",
          "  \u263A\u2592\u2588\u2588\u2588\xA3\xA3\xA3  ",
          "  \u263A\u2591\u2588\u2588\u2588\xA3\xA3\xA3  ",
          "  \u263A\u2591\u2588\u2588\u2588\xA3\xA3\xA3  ",
          "  \u263A \u2588\u2588\u2588\xA3\xA3\xA3  ",
          "   \u263A\u2588\u2588\u2588\xA3\xA3\xA3  ",
          "   \u263A\u2588\u2588\u2588\xA3\xA3\xA3  ",
          "   \u263A\u2593\u2588\u2588\xA3\xA3\xA3  ",
          "   \u263A\u2593\u2588\u2588\xA3\xA3\xA3  ",
          "   \u263A\u2592\u2588\u2588\xA3\xA3\xA3  ",
          "   \u263A\u2592\u2588\u2588\xA3\xA3\xA3  ",
          "   \u263A\u2591\u2588\u2588\xA3\xA3\xA3  ",
          "   \u263A\u2591\u2588\u2588\xA3\xA3\xA3  ",
          "   \u263A \u2588\u2588\xA3\xA3\xA3  ",
          "    \u263A\u2588\u2588\xA3\xA3\xA3  ",
          "    \u263A\u2588\u2588\xA3\xA3\xA3  ",
          "    \u263A\u2593\u2588\xA3\xA3\xA3  ",
          "    \u263A\u2593\u2588\xA3\xA3\xA3  ",
          "    \u263A\u2592\u2588\xA3\xA3\xA3  ",
          "    \u263A\u2592\u2588\xA3\xA3\xA3  ",
          "    \u263A\u2591\u2588\xA3\xA3\xA3  ",
          "    \u263A\u2591\u2588\xA3\xA3\xA3  ",
          "    \u263A \u2588\xA3\xA3\xA3  ",
          "     \u263A\u2588\xA3\xA3\xA3  ",
          "     \u263A\u2588\xA3\xA3\xA3  ",
          "     \u263A\u2593\xA3\xA3\xA3  ",
          "     \u263A\u2593\xA3\xA3\xA3  ",
          "     \u263A\u2592\xA3\xA3\xA3  ",
          "     \u263A\u2592\xA3\xA3\xA3  ",
          "     \u263A\u2591\xA3\xA3\xA3  ",
          "     \u263A\u2591\xA3\xA3\xA3  ",
          "     \u263A \xA3\xA3\xA3  ",
          "      \u263A\xA3\xA3\xA3  ",
          "      \u263A\xA3\xA3\xA3  ",
          "      \u263A\u2593\xA3\xA3  ",
          "      \u263A\u2593\xA3\xA3  ",
          "      \u263A\u2592\xA3\xA3  ",
          "      \u263A\u2592\xA3\xA3  ",
          "      \u263A\u2591\xA3\xA3  ",
          "      \u263A\u2591\xA3\xA3  ",
          "      \u263A \xA3\xA3  ",
          "       \u263A\xA3\xA3  ",
          "       \u263A\xA3\xA3  ",
          "       \u263A\u2593\xA3  ",
          "       \u263A\u2593\xA3  ",
          "       \u263A\u2592\xA3  ",
          "       \u263A\u2592\xA3  ",
          "       \u263A\u2591\xA3  ",
          "       \u263A\u2591\xA3  ",
          "       \u263A \xA3  ",
          "        \u263A\xA3  ",
          "        \u263A\xA3  ",
          "        \u263A\u2593  ",
          "        \u263A\u2593  ",
          "        \u263A\u2592  ",
          "        \u263A\u2592  ",
          "        \u263A\u2591  ",
          "        \u263A\u2591  ",
          "        \u263A   ",
          "        \u263A  &",
          "        \u263A \u263C&",
          "       \u263A \u263C &",
          "       \u263A\u263C  &",
          "      \u263A\u263C  & ",
          "      \u203C   & ",
          "     \u263A   &  ",
          "    \u203C    &  ",
          "   \u263A    &   ",
          "  \u203C     &   ",
          " \u263A     &    ",
          "\u203C      &    ",
          "      &     ",
          "      &     ",
          "     &   \u2591  ",
          "     &   \u2592  ",
          "    &    \u2593  ",
          "    &    \xA3  ",
          "   &    \u2591\xA3  ",
          "   &    \u2592\xA3  ",
          "  &     \u2593\xA3  ",
          "  &     \xA3\xA3  ",
          " &     \u2591\xA3\xA3  ",
          " &     \u2592\xA3\xA3  ",
          "&      \u2593\xA3\xA3  ",
          "&      \xA3\xA3\xA3  ",
          "      \u2591\xA3\xA3\xA3  ",
          "      \u2592\xA3\xA3\xA3  ",
          "      \u2593\xA3\xA3\xA3  ",
          "      \u2588\xA3\xA3\xA3  ",
          "     \u2591\u2588\xA3\xA3\xA3  ",
          "     \u2592\u2588\xA3\xA3\xA3  ",
          "     \u2593\u2588\xA3\xA3\xA3  ",
          "     \u2588\u2588\xA3\xA3\xA3  ",
          "    \u2591\u2588\u2588\xA3\xA3\xA3  ",
          "    \u2592\u2588\u2588\xA3\xA3\xA3  ",
          "    \u2593\u2588\u2588\xA3\xA3\xA3  ",
          "    \u2588\u2588\u2588\xA3\xA3\xA3  ",
          "   \u2591\u2588\u2588\u2588\xA3\xA3\xA3  ",
          "   \u2592\u2588\u2588\u2588\xA3\xA3\xA3  ",
          "   \u2593\u2588\u2588\u2588\xA3\xA3\xA3  ",
          "   \u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
          "  \u2591\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
          "  \u2592\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
          "  \u2593\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
          "  \u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
          " \u2591\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
          " \u2592\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
          " \u2593\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
          " \u2588\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  ",
          " \u2588\u2588\u2588\u2588\u2588\u2588\xA3\xA3\xA3  "
        ]
      }
    };
  }
});

// node_modules/cli-spinners/index.js
var require_cli_spinners = __commonJS({
  "node_modules/cli-spinners/index.js"(exports, module) {
    "use strict";
    var spinners = Object.assign({}, require_spinners());
    var spinnersList = Object.keys(spinners);
    Object.defineProperty(spinners, "random", {
      get() {
        const randomIndex = Math.floor(Math.random() * spinnersList.length);
        const spinnerName = spinnersList[randomIndex];
        return spinners[spinnerName];
      }
    });
    module.exports = spinners;
  }
});

// node_modules/is-unicode-supported/index.js
var require_is_unicode_supported = __commonJS({
  "node_modules/is-unicode-supported/index.js"(exports, module) {
    "use strict";
    module.exports = () => {
      if (process.platform !== "win32") {
        return true;
      }
      return Boolean(process.env.CI) || Boolean(process.env.WT_SESSION) || // Windows Terminal
      process.env.TERM_PROGRAM === "vscode" || process.env.TERM === "xterm-256color" || process.env.TERM === "alacritty";
    };
  }
});

// node_modules/ora/node_modules/log-symbols/index.js
var require_log_symbols2 = __commonJS({
  "node_modules/ora/node_modules/log-symbols/index.js"(exports, module) {
    "use strict";
    var chalk = require_source2();
    var isUnicodeSupported = require_is_unicode_supported();
    var main = {
      info: chalk.blue("\u2139"),
      success: chalk.green("\u2714"),
      warning: chalk.yellow("\u26A0"),
      error: chalk.red("\u2716")
    };
    var fallback = {
      info: chalk.blue("i"),
      success: chalk.green("\u221A"),
      warning: chalk.yellow("\u203C"),
      error: chalk.red("\xD7")
    };
    module.exports = isUnicodeSupported() ? main : fallback;
  }
});

// node_modules/ansi-regex/index.js
var require_ansi_regex = __commonJS({
  "node_modules/ansi-regex/index.js"(exports, module) {
    "use strict";
    module.exports = ({ onlyFirst = false } = {}) => {
      const pattern = [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
      ].join("|");
      return new RegExp(pattern, onlyFirst ? void 0 : "g");
    };
  }
});

// node_modules/strip-ansi/index.js
var require_strip_ansi = __commonJS({
  "node_modules/strip-ansi/index.js"(exports, module) {
    "use strict";
    var ansiRegex = require_ansi_regex();
    module.exports = (string) => typeof string === "string" ? string.replace(ansiRegex(), "") : string;
  }
});

// node_modules/clone/clone.js
var require_clone = __commonJS({
  "node_modules/clone/clone.js"(exports, module) {
    "use strict";
    var clone = (function() {
      "use strict";
      function clone2(parent, circular, depth, prototype) {
        var filter;
        if (typeof circular === "object") {
          depth = circular.depth;
          prototype = circular.prototype;
          filter = circular.filter;
          circular = circular.circular;
        }
        var allParents = [];
        var allChildren = [];
        var useBuffer = typeof Buffer != "undefined";
        if (typeof circular == "undefined") circular = true;
        if (typeof depth == "undefined") depth = Infinity;
        function _clone(parent2, depth2) {
          if (parent2 === null) return null;
          if (depth2 == 0) return parent2;
          var child;
          var proto;
          if (typeof parent2 != "object") {
            return parent2;
          }
          if (clone2.__isArray(parent2)) {
            child = [];
          } else if (clone2.__isRegExp(parent2)) {
            child = new RegExp(parent2.source, __getRegExpFlags(parent2));
            if (parent2.lastIndex) child.lastIndex = parent2.lastIndex;
          } else if (clone2.__isDate(parent2)) {
            child = new Date(parent2.getTime());
          } else if (useBuffer && Buffer.isBuffer(parent2)) {
            if (Buffer.allocUnsafe) {
              child = Buffer.allocUnsafe(parent2.length);
            } else {
              child = new Buffer(parent2.length);
            }
            parent2.copy(child);
            return child;
          } else {
            if (typeof prototype == "undefined") {
              proto = Object.getPrototypeOf(parent2);
              child = Object.create(proto);
            } else {
              child = Object.create(prototype);
              proto = prototype;
            }
          }
          if (circular) {
            var index = allParents.indexOf(parent2);
            if (index != -1) {
              return allChildren[index];
            }
            allParents.push(parent2);
            allChildren.push(child);
          }
          for (var i in parent2) {
            var attrs;
            if (proto) {
              attrs = Object.getOwnPropertyDescriptor(proto, i);
            }
            if (attrs && attrs.set == null) {
              continue;
            }
            child[i] = _clone(parent2[i], depth2 - 1);
          }
          return child;
        }
        __name(_clone, "_clone");
        return _clone(parent, depth);
      }
      __name(clone2, "clone");
      clone2.clonePrototype = /* @__PURE__ */ __name(function clonePrototype(parent) {
        if (parent === null) return null;
        var c = /* @__PURE__ */ __name(function() {
        }, "c");
        c.prototype = parent;
        return new c();
      }, "clonePrototype");
      function __objToStr(o) {
        return Object.prototype.toString.call(o);
      }
      __name(__objToStr, "__objToStr");
      ;
      clone2.__objToStr = __objToStr;
      function __isDate(o) {
        return typeof o === "object" && __objToStr(o) === "[object Date]";
      }
      __name(__isDate, "__isDate");
      ;
      clone2.__isDate = __isDate;
      function __isArray(o) {
        return typeof o === "object" && __objToStr(o) === "[object Array]";
      }
      __name(__isArray, "__isArray");
      ;
      clone2.__isArray = __isArray;
      function __isRegExp(o) {
        return typeof o === "object" && __objToStr(o) === "[object RegExp]";
      }
      __name(__isRegExp, "__isRegExp");
      ;
      clone2.__isRegExp = __isRegExp;
      function __getRegExpFlags(re) {
        var flags = "";
        if (re.global) flags += "g";
        if (re.ignoreCase) flags += "i";
        if (re.multiline) flags += "m";
        return flags;
      }
      __name(__getRegExpFlags, "__getRegExpFlags");
      ;
      clone2.__getRegExpFlags = __getRegExpFlags;
      return clone2;
    })();
    if (typeof module === "object" && module.exports) {
      module.exports = clone;
    }
  }
});

// node_modules/defaults/index.js
var require_defaults = __commonJS({
  "node_modules/defaults/index.js"(exports, module) {
    "use strict";
    var clone = require_clone();
    module.exports = function(options, defaults) {
      options = options || {};
      Object.keys(defaults).forEach(function(key) {
        if (typeof options[key] === "undefined") {
          options[key] = clone(defaults[key]);
        }
      });
      return options;
    };
  }
});

// node_modules/wcwidth/combining.js
var require_combining = __commonJS({
  "node_modules/wcwidth/combining.js"(exports, module) {
    "use strict";
    module.exports = [
      [
        768,
        879
      ],
      [
        1155,
        1158
      ],
      [
        1160,
        1161
      ],
      [
        1425,
        1469
      ],
      [
        1471,
        1471
      ],
      [
        1473,
        1474
      ],
      [
        1476,
        1477
      ],
      [
        1479,
        1479
      ],
      [
        1536,
        1539
      ],
      [
        1552,
        1557
      ],
      [
        1611,
        1630
      ],
      [
        1648,
        1648
      ],
      [
        1750,
        1764
      ],
      [
        1767,
        1768
      ],
      [
        1770,
        1773
      ],
      [
        1807,
        1807
      ],
      [
        1809,
        1809
      ],
      [
        1840,
        1866
      ],
      [
        1958,
        1968
      ],
      [
        2027,
        2035
      ],
      [
        2305,
        2306
      ],
      [
        2364,
        2364
      ],
      [
        2369,
        2376
      ],
      [
        2381,
        2381
      ],
      [
        2385,
        2388
      ],
      [
        2402,
        2403
      ],
      [
        2433,
        2433
      ],
      [
        2492,
        2492
      ],
      [
        2497,
        2500
      ],
      [
        2509,
        2509
      ],
      [
        2530,
        2531
      ],
      [
        2561,
        2562
      ],
      [
        2620,
        2620
      ],
      [
        2625,
        2626
      ],
      [
        2631,
        2632
      ],
      [
        2635,
        2637
      ],
      [
        2672,
        2673
      ],
      [
        2689,
        2690
      ],
      [
        2748,
        2748
      ],
      [
        2753,
        2757
      ],
      [
        2759,
        2760
      ],
      [
        2765,
        2765
      ],
      [
        2786,
        2787
      ],
      [
        2817,
        2817
      ],
      [
        2876,
        2876
      ],
      [
        2879,
        2879
      ],
      [
        2881,
        2883
      ],
      [
        2893,
        2893
      ],
      [
        2902,
        2902
      ],
      [
        2946,
        2946
      ],
      [
        3008,
        3008
      ],
      [
        3021,
        3021
      ],
      [
        3134,
        3136
      ],
      [
        3142,
        3144
      ],
      [
        3146,
        3149
      ],
      [
        3157,
        3158
      ],
      [
        3260,
        3260
      ],
      [
        3263,
        3263
      ],
      [
        3270,
        3270
      ],
      [
        3276,
        3277
      ],
      [
        3298,
        3299
      ],
      [
        3393,
        3395
      ],
      [
        3405,
        3405
      ],
      [
        3530,
        3530
      ],
      [
        3538,
        3540
      ],
      [
        3542,
        3542
      ],
      [
        3633,
        3633
      ],
      [
        3636,
        3642
      ],
      [
        3655,
        3662
      ],
      [
        3761,
        3761
      ],
      [
        3764,
        3769
      ],
      [
        3771,
        3772
      ],
      [
        3784,
        3789
      ],
      [
        3864,
        3865
      ],
      [
        3893,
        3893
      ],
      [
        3895,
        3895
      ],
      [
        3897,
        3897
      ],
      [
        3953,
        3966
      ],
      [
        3968,
        3972
      ],
      [
        3974,
        3975
      ],
      [
        3984,
        3991
      ],
      [
        3993,
        4028
      ],
      [
        4038,
        4038
      ],
      [
        4141,
        4144
      ],
      [
        4146,
        4146
      ],
      [
        4150,
        4151
      ],
      [
        4153,
        4153
      ],
      [
        4184,
        4185
      ],
      [
        4448,
        4607
      ],
      [
        4959,
        4959
      ],
      [
        5906,
        5908
      ],
      [
        5938,
        5940
      ],
      [
        5970,
        5971
      ],
      [
        6002,
        6003
      ],
      [
        6068,
        6069
      ],
      [
        6071,
        6077
      ],
      [
        6086,
        6086
      ],
      [
        6089,
        6099
      ],
      [
        6109,
        6109
      ],
      [
        6155,
        6157
      ],
      [
        6313,
        6313
      ],
      [
        6432,
        6434
      ],
      [
        6439,
        6440
      ],
      [
        6450,
        6450
      ],
      [
        6457,
        6459
      ],
      [
        6679,
        6680
      ],
      [
        6912,
        6915
      ],
      [
        6964,
        6964
      ],
      [
        6966,
        6970
      ],
      [
        6972,
        6972
      ],
      [
        6978,
        6978
      ],
      [
        7019,
        7027
      ],
      [
        7616,
        7626
      ],
      [
        7678,
        7679
      ],
      [
        8203,
        8207
      ],
      [
        8234,
        8238
      ],
      [
        8288,
        8291
      ],
      [
        8298,
        8303
      ],
      [
        8400,
        8431
      ],
      [
        12330,
        12335
      ],
      [
        12441,
        12442
      ],
      [
        43014,
        43014
      ],
      [
        43019,
        43019
      ],
      [
        43045,
        43046
      ],
      [
        64286,
        64286
      ],
      [
        65024,
        65039
      ],
      [
        65056,
        65059
      ],
      [
        65279,
        65279
      ],
      [
        65529,
        65531
      ],
      [
        68097,
        68099
      ],
      [
        68101,
        68102
      ],
      [
        68108,
        68111
      ],
      [
        68152,
        68154
      ],
      [
        68159,
        68159
      ],
      [
        119143,
        119145
      ],
      [
        119155,
        119170
      ],
      [
        119173,
        119179
      ],
      [
        119210,
        119213
      ],
      [
        119362,
        119364
      ],
      [
        917505,
        917505
      ],
      [
        917536,
        917631
      ],
      [
        917760,
        917999
      ]
    ];
  }
});

// node_modules/wcwidth/index.js
var require_wcwidth = __commonJS({
  "node_modules/wcwidth/index.js"(exports, module) {
    "use strict";
    var defaults = require_defaults();
    var combining = require_combining();
    var DEFAULTS = {
      nul: 0,
      control: 0
    };
    module.exports = /* @__PURE__ */ __name(function wcwidth2(str) {
      return wcswidth(str, DEFAULTS);
    }, "wcwidth");
    module.exports.config = function(opts) {
      opts = defaults(opts || {}, DEFAULTS);
      return /* @__PURE__ */ __name(function wcwidth2(str) {
        return wcswidth(str, opts);
      }, "wcwidth");
    };
    function wcswidth(str, opts) {
      if (typeof str !== "string") return wcwidth(str, opts);
      var s = 0;
      for (var i = 0; i < str.length; i++) {
        var n = wcwidth(str.charCodeAt(i), opts);
        if (n < 0) return -1;
        s += n;
      }
      return s;
    }
    __name(wcswidth, "wcswidth");
    function wcwidth(ucs, opts) {
      if (ucs === 0) return opts.nul;
      if (ucs < 32 || ucs >= 127 && ucs < 160) return opts.control;
      if (bisearch(ucs)) return 0;
      return 1 + (ucs >= 4352 && (ucs <= 4447 || // Hangul Jamo init. consonants
      ucs == 9001 || ucs == 9002 || ucs >= 11904 && ucs <= 42191 && ucs != 12351 || // CJK ... Yi
      ucs >= 44032 && ucs <= 55203 || // Hangul Syllables
      ucs >= 63744 && ucs <= 64255 || // CJK Compatibility Ideographs
      ucs >= 65040 && ucs <= 65049 || // Vertical forms
      ucs >= 65072 && ucs <= 65135 || // CJK Compatibility Forms
      ucs >= 65280 && ucs <= 65376 || // Fullwidth Forms
      ucs >= 65504 && ucs <= 65510 || ucs >= 131072 && ucs <= 196605 || ucs >= 196608 && ucs <= 262141));
    }
    __name(wcwidth, "wcwidth");
    function bisearch(ucs) {
      var min = 0;
      var max = combining.length - 1;
      var mid;
      if (ucs < combining[0][0] || ucs > combining[max][1]) return false;
      while (max >= min) {
        mid = Math.floor((min + max) / 2);
        if (ucs > combining[mid][1]) min = mid + 1;
        else if (ucs < combining[mid][0]) max = mid - 1;
        else return true;
      }
      return false;
    }
    __name(bisearch, "bisearch");
  }
});

// node_modules/is-interactive/index.js
var require_is_interactive = __commonJS({
  "node_modules/is-interactive/index.js"(exports, module) {
    "use strict";
    module.exports = ({ stream = process.stdout } = {}) => {
      return Boolean(stream && stream.isTTY && process.env.TERM !== "dumb" && !("CI" in process.env));
    };
  }
});

// node_modules/readable-stream/lib/internal/streams/stream.js
var require_stream = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/stream.js"(exports, module) {
    "use strict";
    module.exports = __require("stream");
  }
});

// node_modules/readable-stream/lib/internal/streams/buffer_list.js
var require_buffer_list = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/buffer_list.js"(exports, module) {
    "use strict";
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    __name(ownKeys, "ownKeys");
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    __name(_objectSpread, "_objectSpread");
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    __name(_defineProperty, "_defineProperty");
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    __name(_classCallCheck, "_classCallCheck");
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    __name(_defineProperties, "_defineProperties");
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    __name(_createClass, "_createClass");
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    __name(_toPropertyKey, "_toPropertyKey");
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    __name(_toPrimitive, "_toPrimitive");
    var _require = __require("buffer");
    var Buffer2 = _require.Buffer;
    var _require2 = __require("util");
    var inspect = _require2.inspect;
    var custom = inspect && inspect.custom || "inspect";
    function copyBuffer(src, target, offset) {
      Buffer2.prototype.copy.call(src, target, offset);
    }
    __name(copyBuffer, "copyBuffer");
    module.exports = /* @__PURE__ */ (function() {
      function BufferList() {
        _classCallCheck(this, BufferList);
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
      __name(BufferList, "BufferList");
      _createClass(BufferList, [
        {
          key: "push",
          value: /* @__PURE__ */ __name(function push(v) {
            var entry = {
              data: v,
              next: null
            };
            if (this.length > 0) this.tail.next = entry;
            else this.head = entry;
            this.tail = entry;
            ++this.length;
          }, "push")
        },
        {
          key: "unshift",
          value: /* @__PURE__ */ __name(function unshift(v) {
            var entry = {
              data: v,
              next: this.head
            };
            if (this.length === 0) this.tail = entry;
            this.head = entry;
            ++this.length;
          }, "unshift")
        },
        {
          key: "shift",
          value: /* @__PURE__ */ __name(function shift() {
            if (this.length === 0) return;
            var ret = this.head.data;
            if (this.length === 1) this.head = this.tail = null;
            else this.head = this.head.next;
            --this.length;
            return ret;
          }, "shift")
        },
        {
          key: "clear",
          value: /* @__PURE__ */ __name(function clear() {
            this.head = this.tail = null;
            this.length = 0;
          }, "clear")
        },
        {
          key: "join",
          value: /* @__PURE__ */ __name(function join2(s) {
            if (this.length === 0) return "";
            var p = this.head;
            var ret = "" + p.data;
            while (p = p.next) ret += s + p.data;
            return ret;
          }, "join")
        },
        {
          key: "concat",
          value: /* @__PURE__ */ __name(function concat(n) {
            if (this.length === 0) return Buffer2.alloc(0);
            var ret = Buffer2.allocUnsafe(n >>> 0);
            var p = this.head;
            var i = 0;
            while (p) {
              copyBuffer(p.data, ret, i);
              i += p.data.length;
              p = p.next;
            }
            return ret;
          }, "concat")
        },
        {
          key: "consume",
          value: /* @__PURE__ */ __name(function consume(n, hasStrings) {
            var ret;
            if (n < this.head.data.length) {
              ret = this.head.data.slice(0, n);
              this.head.data = this.head.data.slice(n);
            } else if (n === this.head.data.length) {
              ret = this.shift();
            } else {
              ret = hasStrings ? this._getString(n) : this._getBuffer(n);
            }
            return ret;
          }, "consume")
        },
        {
          key: "first",
          value: /* @__PURE__ */ __name(function first() {
            return this.head.data;
          }, "first")
        },
        {
          key: "_getString",
          value: /* @__PURE__ */ __name(function _getString(n) {
            var p = this.head;
            var c = 1;
            var ret = p.data;
            n -= ret.length;
            while (p = p.next) {
              var str = p.data;
              var nb = n > str.length ? str.length : n;
              if (nb === str.length) ret += str;
              else ret += str.slice(0, n);
              n -= nb;
              if (n === 0) {
                if (nb === str.length) {
                  ++c;
                  if (p.next) this.head = p.next;
                  else this.head = this.tail = null;
                } else {
                  this.head = p;
                  p.data = str.slice(nb);
                }
                break;
              }
              ++c;
            }
            this.length -= c;
            return ret;
          }, "_getString")
        },
        {
          key: "_getBuffer",
          value: /* @__PURE__ */ __name(function _getBuffer(n) {
            var ret = Buffer2.allocUnsafe(n);
            var p = this.head;
            var c = 1;
            p.data.copy(ret);
            n -= p.data.length;
            while (p = p.next) {
              var buf = p.data;
              var nb = n > buf.length ? buf.length : n;
              buf.copy(ret, ret.length - n, 0, nb);
              n -= nb;
              if (n === 0) {
                if (nb === buf.length) {
                  ++c;
                  if (p.next) this.head = p.next;
                  else this.head = this.tail = null;
                } else {
                  this.head = p;
                  p.data = buf.slice(nb);
                }
                break;
              }
              ++c;
            }
            this.length -= c;
            return ret;
          }, "_getBuffer")
        },
        {
          key: custom,
          value: /* @__PURE__ */ __name(function value(_, options) {
            return inspect(this, _objectSpread(_objectSpread({}, options), {}, {
              // Only inspect one level.
              depth: 0,
              // It should not recurse.
              customInspect: false
            }));
          }, "value")
        }
      ]);
      return BufferList;
    })();
  }
});

// node_modules/readable-stream/lib/internal/streams/destroy.js
var require_destroy = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/destroy.js"(exports, module) {
    "use strict";
    function destroy(err, cb) {
      var _this = this;
      var readableDestroyed = this._readableState && this._readableState.destroyed;
      var writableDestroyed = this._writableState && this._writableState.destroyed;
      if (readableDestroyed || writableDestroyed) {
        if (cb) {
          cb(err);
        } else if (err) {
          if (!this._writableState) {
            process.nextTick(emitErrorNT, this, err);
          } else if (!this._writableState.errorEmitted) {
            this._writableState.errorEmitted = true;
            process.nextTick(emitErrorNT, this, err);
          }
        }
        return this;
      }
      if (this._readableState) {
        this._readableState.destroyed = true;
      }
      if (this._writableState) {
        this._writableState.destroyed = true;
      }
      this._destroy(err || null, function(err2) {
        if (!cb && err2) {
          if (!_this._writableState) {
            process.nextTick(emitErrorAndCloseNT, _this, err2);
          } else if (!_this._writableState.errorEmitted) {
            _this._writableState.errorEmitted = true;
            process.nextTick(emitErrorAndCloseNT, _this, err2);
          } else {
            process.nextTick(emitCloseNT, _this);
          }
        } else if (cb) {
          process.nextTick(emitCloseNT, _this);
          cb(err2);
        } else {
          process.nextTick(emitCloseNT, _this);
        }
      });
      return this;
    }
    __name(destroy, "destroy");
    function emitErrorAndCloseNT(self2, err) {
      emitErrorNT(self2, err);
      emitCloseNT(self2);
    }
    __name(emitErrorAndCloseNT, "emitErrorAndCloseNT");
    function emitCloseNT(self2) {
      if (self2._writableState && !self2._writableState.emitClose) return;
      if (self2._readableState && !self2._readableState.emitClose) return;
      self2.emit("close");
    }
    __name(emitCloseNT, "emitCloseNT");
    function undestroy() {
      if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
      }
      if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finalCalled = false;
        this._writableState.prefinished = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
      }
    }
    __name(undestroy, "undestroy");
    function emitErrorNT(self2, err) {
      self2.emit("error", err);
    }
    __name(emitErrorNT, "emitErrorNT");
    function errorOrDestroy(stream, err) {
      var rState = stream._readableState;
      var wState = stream._writableState;
      if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);
      else stream.emit("error", err);
    }
    __name(errorOrDestroy, "errorOrDestroy");
    module.exports = {
      destroy,
      undestroy,
      errorOrDestroy
    };
  }
});

// node_modules/readable-stream/errors.js
var require_errors = __commonJS({
  "node_modules/readable-stream/errors.js"(exports, module) {
    "use strict";
    var codes = {};
    function createErrorType(code, message, Base) {
      var _a;
      if (!Base) {
        Base = Error;
      }
      function getMessage(arg1, arg2, arg3) {
        if (typeof message === "string") {
          return message;
        } else {
          return message(arg1, arg2, arg3);
        }
      }
      __name(getMessage, "getMessage");
      let NodeError = (_a = class extends Base {
        constructor(arg1, arg2, arg3) {
          super(getMessage(arg1, arg2, arg3));
        }
      }, __name(_a, "NodeError"), _a);
      NodeError.prototype.name = Base.name;
      NodeError.prototype.code = code;
      codes[code] = NodeError;
    }
    __name(createErrorType, "createErrorType");
    function oneOf(expected, thing) {
      if (Array.isArray(expected)) {
        const len = expected.length;
        expected = expected.map((i) => String(i));
        if (len > 2) {
          return `one of ${thing} ${expected.slice(0, len - 1).join(", ")}, or ` + expected[len - 1];
        } else if (len === 2) {
          return `one of ${thing} ${expected[0]} or ${expected[1]}`;
        } else {
          return `of ${thing} ${expected[0]}`;
        }
      } else {
        return `of ${thing} ${String(expected)}`;
      }
    }
    __name(oneOf, "oneOf");
    function startsWith(str, search, pos) {
      return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
    }
    __name(startsWith, "startsWith");
    function endsWith(str, search, this_len) {
      if (this_len === void 0 || this_len > str.length) {
        this_len = str.length;
      }
      return str.substring(this_len - search.length, this_len) === search;
    }
    __name(endsWith, "endsWith");
    function includes(str, search, start) {
      if (typeof start !== "number") {
        start = 0;
      }
      if (start + search.length > str.length) {
        return false;
      } else {
        return str.indexOf(search, start) !== -1;
      }
    }
    __name(includes, "includes");
    createErrorType("ERR_INVALID_OPT_VALUE", function(name, value) {
      return 'The value "' + value + '" is invalid for option "' + name + '"';
    }, TypeError);
    createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
      let determiner;
      if (typeof expected === "string" && startsWith(expected, "not ")) {
        determiner = "must not be";
        expected = expected.replace(/^not /, "");
      } else {
        determiner = "must be";
      }
      let msg;
      if (endsWith(name, " argument")) {
        msg = `The ${name} ${determiner} ${oneOf(expected, "type")}`;
      } else {
        const type = includes(name, ".") ? "property" : "argument";
        msg = `The "${name}" ${type} ${determiner} ${oneOf(expected, "type")}`;
      }
      msg += `. Received type ${typeof actual}`;
      return msg;
    }, TypeError);
    createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
    createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name) {
      return "The " + name + " method is not implemented";
    });
    createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
    createErrorType("ERR_STREAM_DESTROYED", function(name) {
      return "Cannot call " + name + " after a stream was destroyed";
    });
    createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
    createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
    createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
    createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
    createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
      return "Unknown encoding: " + arg;
    }, TypeError);
    createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
    module.exports.codes = codes;
  }
});

// node_modules/readable-stream/lib/internal/streams/state.js
var require_state = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/state.js"(exports, module) {
    "use strict";
    var ERR_INVALID_OPT_VALUE = require_errors().codes.ERR_INVALID_OPT_VALUE;
    function highWaterMarkFrom(options, isDuplex, duplexKey) {
      return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
    }
    __name(highWaterMarkFrom, "highWaterMarkFrom");
    function getHighWaterMark(state, options, duplexKey, isDuplex) {
      var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
      if (hwm != null) {
        if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
          var name = isDuplex ? duplexKey : "highWaterMark";
          throw new ERR_INVALID_OPT_VALUE(name, hwm);
        }
        return Math.floor(hwm);
      }
      return state.objectMode ? 16 : 16 * 1024;
    }
    __name(getHighWaterMark, "getHighWaterMark");
    module.exports = {
      getHighWaterMark
    };
  }
});

// node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  "node_modules/inherits/inherits_browser.js"(exports, module) {
    "use strict";
    if (typeof Object.create === "function") {
      module.exports = /* @__PURE__ */ __name(function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      }, "inherits");
    } else {
      module.exports = /* @__PURE__ */ __name(function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = /* @__PURE__ */ __name(function() {
          }, "TempCtor");
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      }, "inherits");
    }
  }
});

// node_modules/inherits/inherits.js
var require_inherits = __commonJS({
  "node_modules/inherits/inherits.js"(exports, module) {
    "use strict";
    try {
      util = __require("util");
      if (typeof util.inherits !== "function") throw "";
      module.exports = util.inherits;
    } catch (e) {
      module.exports = require_inherits_browser();
    }
    var util;
  }
});

// node_modules/util-deprecate/node.js
var require_node = __commonJS({
  "node_modules/util-deprecate/node.js"(exports, module) {
    "use strict";
    module.exports = __require("util").deprecate;
  }
});

// node_modules/readable-stream/lib/_stream_writable.js
var require_stream_writable = __commonJS({
  "node_modules/readable-stream/lib/_stream_writable.js"(exports, module) {
    "use strict";
    module.exports = Writable;
    function CorkedRequest(state) {
      var _this = this;
      this.next = null;
      this.entry = null;
      this.finish = function() {
        onCorkedFinish(_this, state);
      };
    }
    __name(CorkedRequest, "CorkedRequest");
    var Duplex;
    Writable.WritableState = WritableState;
    var internalUtil = {
      deprecate: require_node()
    };
    var Stream = require_stream();
    var Buffer2 = __require("buffer").Buffer;
    var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk);
    }
    __name(_uint8ArrayToBuffer, "_uint8ArrayToBuffer");
    function _isUint8Array(obj) {
      return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    __name(_isUint8Array, "_isUint8Array");
    var destroyImpl = require_destroy();
    var _require = require_state();
    var getHighWaterMark = _require.getHighWaterMark;
    var _require$codes = require_errors().codes;
    var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE;
    var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
    var ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK;
    var ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE;
    var ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
    var ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES;
    var ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END;
    var ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
    var errorOrDestroy = destroyImpl.errorOrDestroy;
    require_inherits()(Writable, Stream);
    function nop() {
    }
    __name(nop, "nop");
    function WritableState(options, stream, isDuplex) {
      Duplex = Duplex || require_stream_duplex();
      options = options || {};
      if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex;
      this.objectMode = !!options.objectMode;
      if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
      this.highWaterMark = getHighWaterMark(this, options, "writableHighWaterMark", isDuplex);
      this.finalCalled = false;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      this.destroyed = false;
      var noDecode = options.decodeStrings === false;
      this.decodeStrings = !noDecode;
      this.defaultEncoding = options.defaultEncoding || "utf8";
      this.length = 0;
      this.writing = false;
      this.corked = 0;
      this.sync = true;
      this.bufferProcessing = false;
      this.onwrite = function(er) {
        onwrite(stream, er);
      };
      this.writecb = null;
      this.writelen = 0;
      this.bufferedRequest = null;
      this.lastBufferedRequest = null;
      this.pendingcb = 0;
      this.prefinished = false;
      this.errorEmitted = false;
      this.emitClose = options.emitClose !== false;
      this.autoDestroy = !!options.autoDestroy;
      this.bufferedRequestCount = 0;
      this.corkedRequestsFree = new CorkedRequest(this);
    }
    __name(WritableState, "WritableState");
    WritableState.prototype.getBuffer = /* @__PURE__ */ __name(function getBuffer() {
      var current = this.bufferedRequest;
      var out = [];
      while (current) {
        out.push(current);
        current = current.next;
      }
      return out;
    }, "getBuffer");
    (function() {
      try {
        Object.defineProperty(WritableState.prototype, "buffer", {
          get: internalUtil.deprecate(/* @__PURE__ */ __name(function writableStateBufferGetter() {
            return this.getBuffer();
          }, "writableStateBufferGetter"), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
      } catch (_) {
      }
    })();
    var realHasInstance;
    if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
      realHasInstance = Function.prototype[Symbol.hasInstance];
      Object.defineProperty(Writable, Symbol.hasInstance, {
        value: /* @__PURE__ */ __name(function value(object) {
          if (realHasInstance.call(this, object)) return true;
          if (this !== Writable) return false;
          return object && object._writableState instanceof WritableState;
        }, "value")
      });
    } else {
      realHasInstance = /* @__PURE__ */ __name(function realHasInstance2(object) {
        return object instanceof this;
      }, "realHasInstance");
    }
    function Writable(options) {
      Duplex = Duplex || require_stream_duplex();
      var isDuplex = this instanceof Duplex;
      if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
      this._writableState = new WritableState(options, this, isDuplex);
      this.writable = true;
      if (options) {
        if (typeof options.write === "function") this._write = options.write;
        if (typeof options.writev === "function") this._writev = options.writev;
        if (typeof options.destroy === "function") this._destroy = options.destroy;
        if (typeof options.final === "function") this._final = options.final;
      }
      Stream.call(this);
    }
    __name(Writable, "Writable");
    Writable.prototype.pipe = function() {
      errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
    };
    function writeAfterEnd(stream, cb) {
      var er = new ERR_STREAM_WRITE_AFTER_END();
      errorOrDestroy(stream, er);
      process.nextTick(cb, er);
    }
    __name(writeAfterEnd, "writeAfterEnd");
    function validChunk(stream, state, chunk, cb) {
      var er;
      if (chunk === null) {
        er = new ERR_STREAM_NULL_VALUES();
      } else if (typeof chunk !== "string" && !state.objectMode) {
        er = new ERR_INVALID_ARG_TYPE("chunk", [
          "string",
          "Buffer"
        ], chunk);
      }
      if (er) {
        errorOrDestroy(stream, er);
        process.nextTick(cb, er);
        return false;
      }
      return true;
    }
    __name(validChunk, "validChunk");
    Writable.prototype.write = function(chunk, encoding, cb) {
      var state = this._writableState;
      var ret = false;
      var isBuf = !state.objectMode && _isUint8Array(chunk);
      if (isBuf && !Buffer2.isBuffer(chunk)) {
        chunk = _uint8ArrayToBuffer(chunk);
      }
      if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (isBuf) encoding = "buffer";
      else if (!encoding) encoding = state.defaultEncoding;
      if (typeof cb !== "function") cb = nop;
      if (state.ending) writeAfterEnd(this, cb);
      else if (isBuf || validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
      }
      return ret;
    };
    Writable.prototype.cork = function() {
      this._writableState.corked++;
    };
    Writable.prototype.uncork = function() {
      var state = this._writableState;
      if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
      }
    };
    Writable.prototype.setDefaultEncoding = /* @__PURE__ */ __name(function setDefaultEncoding(encoding) {
      if (typeof encoding === "string") encoding = encoding.toLowerCase();
      if (!([
        "hex",
        "utf8",
        "utf-8",
        "ascii",
        "binary",
        "base64",
        "ucs2",
        "ucs-2",
        "utf16le",
        "utf-16le",
        "raw"
      ].indexOf((encoding + "").toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
      this._writableState.defaultEncoding = encoding;
      return this;
    }, "setDefaultEncoding");
    Object.defineProperty(Writable.prototype, "writableBuffer", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: /* @__PURE__ */ __name(function get() {
        return this._writableState && this._writableState.getBuffer();
      }, "get")
    });
    function decodeChunk(state, chunk, encoding) {
      if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
        chunk = Buffer2.from(chunk, encoding);
      }
      return chunk;
    }
    __name(decodeChunk, "decodeChunk");
    Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: /* @__PURE__ */ __name(function get() {
        return this._writableState.highWaterMark;
      }, "get")
    });
    function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
      if (!isBuf) {
        var newChunk = decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
          isBuf = true;
          encoding = "buffer";
          chunk = newChunk;
        }
      }
      var len = state.objectMode ? 1 : chunk.length;
      state.length += len;
      var ret = state.length < state.highWaterMark;
      if (!ret) state.needDrain = true;
      if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
          chunk,
          encoding,
          isBuf,
          callback: cb,
          next: null
        };
        if (last) {
          last.next = state.lastBufferedRequest;
        } else {
          state.bufferedRequest = state.lastBufferedRequest;
        }
        state.bufferedRequestCount += 1;
      } else {
        doWrite(stream, state, false, len, chunk, encoding, cb);
      }
      return ret;
    }
    __name(writeOrBuffer, "writeOrBuffer");
    function doWrite(stream, state, writev, len, chunk, encoding, cb) {
      state.writelen = len;
      state.writecb = cb;
      state.writing = true;
      state.sync = true;
      if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED("write"));
      else if (writev) stream._writev(chunk, state.onwrite);
      else stream._write(chunk, encoding, state.onwrite);
      state.sync = false;
    }
    __name(doWrite, "doWrite");
    function onwriteError(stream, state, sync, er, cb) {
      --state.pendingcb;
      if (sync) {
        process.nextTick(cb, er);
        process.nextTick(finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
      } else {
        cb(er);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
        finishMaybe(stream, state);
      }
    }
    __name(onwriteError, "onwriteError");
    function onwriteStateUpdate(state) {
      state.writing = false;
      state.writecb = null;
      state.length -= state.writelen;
      state.writelen = 0;
    }
    __name(onwriteStateUpdate, "onwriteStateUpdate");
    function onwrite(stream, er) {
      var state = stream._writableState;
      var sync = state.sync;
      var cb = state.writecb;
      if (typeof cb !== "function") throw new ERR_MULTIPLE_CALLBACK();
      onwriteStateUpdate(state);
      if (er) onwriteError(stream, state, sync, er, cb);
      else {
        var finished = needFinish(state) || stream.destroyed;
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
          clearBuffer(stream, state);
        }
        if (sync) {
          process.nextTick(afterWrite, stream, state, finished, cb);
        } else {
          afterWrite(stream, state, finished, cb);
        }
      }
    }
    __name(onwrite, "onwrite");
    function afterWrite(stream, state, finished, cb) {
      if (!finished) onwriteDrain(stream, state);
      state.pendingcb--;
      cb();
      finishMaybe(stream, state);
    }
    __name(afterWrite, "afterWrite");
    function onwriteDrain(stream, state) {
      if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit("drain");
      }
    }
    __name(onwriteDrain, "onwriteDrain");
    function clearBuffer(stream, state) {
      state.bufferProcessing = true;
      var entry = state.bufferedRequest;
      if (stream._writev && entry && entry.next) {
        var l = state.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        var allBuffers = true;
        while (entry) {
          buffer[count] = entry;
          if (!entry.isBuf) allBuffers = false;
          entry = entry.next;
          count += 1;
        }
        buffer.allBuffers = allBuffers;
        doWrite(stream, state, true, state.length, buffer, "", holder.finish);
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
          state.corkedRequestsFree = holder.next;
          holder.next = null;
        } else {
          state.corkedRequestsFree = new CorkedRequest(state);
        }
        state.bufferedRequestCount = 0;
      } else {
        while (entry) {
          var chunk = entry.chunk;
          var encoding = entry.encoding;
          var cb = entry.callback;
          var len = state.objectMode ? 1 : chunk.length;
          doWrite(stream, state, false, len, chunk, encoding, cb);
          entry = entry.next;
          state.bufferedRequestCount--;
          if (state.writing) {
            break;
          }
        }
        if (entry === null) state.lastBufferedRequest = null;
      }
      state.bufferedRequest = entry;
      state.bufferProcessing = false;
    }
    __name(clearBuffer, "clearBuffer");
    Writable.prototype._write = function(chunk, encoding, cb) {
      cb(new ERR_METHOD_NOT_IMPLEMENTED("_write()"));
    };
    Writable.prototype._writev = null;
    Writable.prototype.end = function(chunk, encoding, cb) {
      var state = this._writableState;
      if (typeof chunk === "function") {
        cb = chunk;
        chunk = null;
        encoding = null;
      } else if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (chunk !== null && chunk !== void 0) this.write(chunk, encoding);
      if (state.corked) {
        state.corked = 1;
        this.uncork();
      }
      if (!state.ending) endWritable(this, state, cb);
      return this;
    };
    Object.defineProperty(Writable.prototype, "writableLength", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: /* @__PURE__ */ __name(function get() {
        return this._writableState.length;
      }, "get")
    });
    function needFinish(state) {
      return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
    }
    __name(needFinish, "needFinish");
    function callFinal(stream, state) {
      stream._final(function(err) {
        state.pendingcb--;
        if (err) {
          errorOrDestroy(stream, err);
        }
        state.prefinished = true;
        stream.emit("prefinish");
        finishMaybe(stream, state);
      });
    }
    __name(callFinal, "callFinal");
    function prefinish(stream, state) {
      if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === "function" && !state.destroyed) {
          state.pendingcb++;
          state.finalCalled = true;
          process.nextTick(callFinal, stream, state);
        } else {
          state.prefinished = true;
          stream.emit("prefinish");
        }
      }
    }
    __name(prefinish, "prefinish");
    function finishMaybe(stream, state) {
      var need = needFinish(state);
      if (need) {
        prefinish(stream, state);
        if (state.pendingcb === 0) {
          state.finished = true;
          stream.emit("finish");
          if (state.autoDestroy) {
            var rState = stream._readableState;
            if (!rState || rState.autoDestroy && rState.endEmitted) {
              stream.destroy();
            }
          }
        }
      }
      return need;
    }
    __name(finishMaybe, "finishMaybe");
    function endWritable(stream, state, cb) {
      state.ending = true;
      finishMaybe(stream, state);
      if (cb) {
        if (state.finished) process.nextTick(cb);
        else stream.once("finish", cb);
      }
      state.ended = true;
      stream.writable = false;
    }
    __name(endWritable, "endWritable");
    function onCorkedFinish(corkReq, state, err) {
      var entry = corkReq.entry;
      corkReq.entry = null;
      while (entry) {
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
      }
      state.corkedRequestsFree.next = corkReq;
    }
    __name(onCorkedFinish, "onCorkedFinish");
    Object.defineProperty(Writable.prototype, "destroyed", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: /* @__PURE__ */ __name(function get() {
        if (this._writableState === void 0) {
          return false;
        }
        return this._writableState.destroyed;
      }, "get"),
      set: /* @__PURE__ */ __name(function set(value) {
        if (!this._writableState) {
          return;
        }
        this._writableState.destroyed = value;
      }, "set")
    });
    Writable.prototype.destroy = destroyImpl.destroy;
    Writable.prototype._undestroy = destroyImpl.undestroy;
    Writable.prototype._destroy = function(err, cb) {
      cb(err);
    };
  }
});

// node_modules/readable-stream/lib/_stream_duplex.js
var require_stream_duplex = __commonJS({
  "node_modules/readable-stream/lib/_stream_duplex.js"(exports, module) {
    "use strict";
    var objectKeys = Object.keys || function(obj) {
      var keys2 = [];
      for (var key in obj) keys2.push(key);
      return keys2;
    };
    module.exports = Duplex;
    var Readable = require_stream_readable();
    var Writable = require_stream_writable();
    require_inherits()(Duplex, Readable);
    {
      keys = objectKeys(Writable.prototype);
      for (v = 0; v < keys.length; v++) {
        method = keys[v];
        if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
      }
    }
    var keys;
    var method;
    var v;
    function Duplex(options) {
      if (!(this instanceof Duplex)) return new Duplex(options);
      Readable.call(this, options);
      Writable.call(this, options);
      this.allowHalfOpen = true;
      if (options) {
        if (options.readable === false) this.readable = false;
        if (options.writable === false) this.writable = false;
        if (options.allowHalfOpen === false) {
          this.allowHalfOpen = false;
          this.once("end", onend);
        }
      }
    }
    __name(Duplex, "Duplex");
    Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: /* @__PURE__ */ __name(function get() {
        return this._writableState.highWaterMark;
      }, "get")
    });
    Object.defineProperty(Duplex.prototype, "writableBuffer", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: /* @__PURE__ */ __name(function get() {
        return this._writableState && this._writableState.getBuffer();
      }, "get")
    });
    Object.defineProperty(Duplex.prototype, "writableLength", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: /* @__PURE__ */ __name(function get() {
        return this._writableState.length;
      }, "get")
    });
    function onend() {
      if (this._writableState.ended) return;
      process.nextTick(onEndNT, this);
    }
    __name(onend, "onend");
    function onEndNT(self2) {
      self2.end();
    }
    __name(onEndNT, "onEndNT");
    Object.defineProperty(Duplex.prototype, "destroyed", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: /* @__PURE__ */ __name(function get() {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return false;
        }
        return this._readableState.destroyed && this._writableState.destroyed;
      }, "get"),
      set: /* @__PURE__ */ __name(function set(value) {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return;
        }
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
      }, "set")
    });
  }
});

// node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "node_modules/safe-buffer/index.js"(exports, module) {
    "use strict";
    var buffer = __require("buffer");
    var Buffer2 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    __name(copyProps, "copyProps");
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module.exports = buffer;
    } else {
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    __name(SafeBuffer, "SafeBuffer");
    SafeBuffer.prototype = Object.create(Buffer2.prototype);
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// node_modules/string_decoder/lib/string_decoder.js
var require_string_decoder = __commonJS({
  "node_modules/string_decoder/lib/string_decoder.js"(exports) {
    "use strict";
    var Buffer2 = require_safe_buffer().Buffer;
    var isEncoding = Buffer2.isEncoding || function(encoding) {
      encoding = "" + encoding;
      switch (encoding && encoding.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function _normalizeEncoding(enc) {
      if (!enc) return "utf8";
      var retried;
      while (true) {
        switch (enc) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return enc;
          default:
            if (retried) return;
            enc = ("" + enc).toLowerCase();
            retried = true;
        }
      }
    }
    __name(_normalizeEncoding, "_normalizeEncoding");
    function normalizeEncoding(enc) {
      var nenc = _normalizeEncoding(enc);
      if (typeof nenc !== "string" && (Buffer2.isEncoding === isEncoding || !isEncoding(enc))) throw new Error("Unknown encoding: " + enc);
      return nenc || enc;
    }
    __name(normalizeEncoding, "normalizeEncoding");
    exports.StringDecoder = StringDecoder;
    function StringDecoder(encoding) {
      this.encoding = normalizeEncoding(encoding);
      var nb;
      switch (this.encoding) {
        case "utf16le":
          this.text = utf16Text;
          this.end = utf16End;
          nb = 4;
          break;
        case "utf8":
          this.fillLast = utf8FillLast;
          nb = 4;
          break;
        case "base64":
          this.text = base64Text;
          this.end = base64End;
          nb = 3;
          break;
        default:
          this.write = simpleWrite;
          this.end = simpleEnd;
          return;
      }
      this.lastNeed = 0;
      this.lastTotal = 0;
      this.lastChar = Buffer2.allocUnsafe(nb);
    }
    __name(StringDecoder, "StringDecoder");
    StringDecoder.prototype.write = function(buf) {
      if (buf.length === 0) return "";
      var r;
      var i;
      if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === void 0) return "";
        i = this.lastNeed;
        this.lastNeed = 0;
      } else {
        i = 0;
      }
      if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
      return r || "";
    };
    StringDecoder.prototype.end = utf8End;
    StringDecoder.prototype.text = utf8Text;
    StringDecoder.prototype.fillLast = function(buf) {
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
      this.lastNeed -= buf.length;
    };
    function utf8CheckByte(byte) {
      if (byte <= 127) return 0;
      else if (byte >> 5 === 6) return 2;
      else if (byte >> 4 === 14) return 3;
      else if (byte >> 3 === 30) return 4;
      return byte >> 6 === 2 ? -1 : -2;
    }
    __name(utf8CheckByte, "utf8CheckByte");
    function utf8CheckIncomplete(self2, buf, i) {
      var j = buf.length - 1;
      if (j < i) return 0;
      var nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) self2.lastNeed = nb - 1;
        return nb;
      }
      if (--j < i || nb === -2) return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) self2.lastNeed = nb - 2;
        return nb;
      }
      if (--j < i || nb === -2) return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) {
          if (nb === 2) nb = 0;
          else self2.lastNeed = nb - 3;
        }
        return nb;
      }
      return 0;
    }
    __name(utf8CheckIncomplete, "utf8CheckIncomplete");
    function utf8CheckExtraBytes(self2, buf, p) {
      if ((buf[0] & 192) !== 128) {
        self2.lastNeed = 0;
        return "\uFFFD";
      }
      if (self2.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 192) !== 128) {
          self2.lastNeed = 1;
          return "\uFFFD";
        }
        if (self2.lastNeed > 2 && buf.length > 2) {
          if ((buf[2] & 192) !== 128) {
            self2.lastNeed = 2;
            return "\uFFFD";
          }
        }
      }
    }
    __name(utf8CheckExtraBytes, "utf8CheckExtraBytes");
    function utf8FillLast(buf) {
      var p = this.lastTotal - this.lastNeed;
      var r = utf8CheckExtraBytes(this, buf, p);
      if (r !== void 0) return r;
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, p, 0, buf.length);
      this.lastNeed -= buf.length;
    }
    __name(utf8FillLast, "utf8FillLast");
    function utf8Text(buf, i) {
      var total = utf8CheckIncomplete(this, buf, i);
      if (!this.lastNeed) return buf.toString("utf8", i);
      this.lastTotal = total;
      var end = buf.length - (total - this.lastNeed);
      buf.copy(this.lastChar, 0, end);
      return buf.toString("utf8", i, end);
    }
    __name(utf8Text, "utf8Text");
    function utf8End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) return r + "\uFFFD";
      return r;
    }
    __name(utf8End, "utf8End");
    function utf16Text(buf, i) {
      if ((buf.length - i) % 2 === 0) {
        var r = buf.toString("utf16le", i);
        if (r) {
          var c = r.charCodeAt(r.length - 1);
          if (c >= 55296 && c <= 56319) {
            this.lastNeed = 2;
            this.lastTotal = 4;
            this.lastChar[0] = buf[buf.length - 2];
            this.lastChar[1] = buf[buf.length - 1];
            return r.slice(0, -1);
          }
        }
        return r;
      }
      this.lastNeed = 1;
      this.lastTotal = 2;
      this.lastChar[0] = buf[buf.length - 1];
      return buf.toString("utf16le", i, buf.length - 1);
    }
    __name(utf16Text, "utf16Text");
    function utf16End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString("utf16le", 0, end);
      }
      return r;
    }
    __name(utf16End, "utf16End");
    function base64Text(buf, i) {
      var n = (buf.length - i) % 3;
      if (n === 0) return buf.toString("base64", i);
      this.lastNeed = 3 - n;
      this.lastTotal = 3;
      if (n === 1) {
        this.lastChar[0] = buf[buf.length - 1];
      } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
      }
      return buf.toString("base64", i, buf.length - n);
    }
    __name(base64Text, "base64Text");
    function base64End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
      return r;
    }
    __name(base64End, "base64End");
    function simpleWrite(buf) {
      return buf.toString(this.encoding);
    }
    __name(simpleWrite, "simpleWrite");
    function simpleEnd(buf) {
      return buf && buf.length ? this.write(buf) : "";
    }
    __name(simpleEnd, "simpleEnd");
  }
});

// node_modules/readable-stream/lib/internal/streams/end-of-stream.js
var require_end_of_stream = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/end-of-stream.js"(exports, module) {
    "use strict";
    var ERR_STREAM_PREMATURE_CLOSE = require_errors().codes.ERR_STREAM_PREMATURE_CLOSE;
    function once(callback) {
      var called = false;
      return function() {
        if (called) return;
        called = true;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        callback.apply(this, args);
      };
    }
    __name(once, "once");
    function noop() {
    }
    __name(noop, "noop");
    function isRequest(stream) {
      return stream.setHeader && typeof stream.abort === "function";
    }
    __name(isRequest, "isRequest");
    function eos(stream, opts, callback) {
      if (typeof opts === "function") return eos(stream, null, opts);
      if (!opts) opts = {};
      callback = once(callback || noop);
      var readable = opts.readable || opts.readable !== false && stream.readable;
      var writable = opts.writable || opts.writable !== false && stream.writable;
      var onlegacyfinish = /* @__PURE__ */ __name(function onlegacyfinish2() {
        if (!stream.writable) onfinish();
      }, "onlegacyfinish");
      var writableEnded = stream._writableState && stream._writableState.finished;
      var onfinish = /* @__PURE__ */ __name(function onfinish2() {
        writable = false;
        writableEnded = true;
        if (!readable) callback.call(stream);
      }, "onfinish");
      var readableEnded = stream._readableState && stream._readableState.endEmitted;
      var onend = /* @__PURE__ */ __name(function onend2() {
        readable = false;
        readableEnded = true;
        if (!writable) callback.call(stream);
      }, "onend");
      var onerror = /* @__PURE__ */ __name(function onerror2(err) {
        callback.call(stream, err);
      }, "onerror");
      var onclose = /* @__PURE__ */ __name(function onclose2() {
        var err;
        if (readable && !readableEnded) {
          if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
          return callback.call(stream, err);
        }
        if (writable && !writableEnded) {
          if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
          return callback.call(stream, err);
        }
      }, "onclose");
      var onrequest = /* @__PURE__ */ __name(function onrequest2() {
        stream.req.on("finish", onfinish);
      }, "onrequest");
      if (isRequest(stream)) {
        stream.on("complete", onfinish);
        stream.on("abort", onclose);
        if (stream.req) onrequest();
        else stream.on("request", onrequest);
      } else if (writable && !stream._writableState) {
        stream.on("end", onlegacyfinish);
        stream.on("close", onlegacyfinish);
      }
      stream.on("end", onend);
      stream.on("finish", onfinish);
      if (opts.error !== false) stream.on("error", onerror);
      stream.on("close", onclose);
      return function() {
        stream.removeListener("complete", onfinish);
        stream.removeListener("abort", onclose);
        stream.removeListener("request", onrequest);
        if (stream.req) stream.req.removeListener("finish", onfinish);
        stream.removeListener("end", onlegacyfinish);
        stream.removeListener("close", onlegacyfinish);
        stream.removeListener("finish", onfinish);
        stream.removeListener("end", onend);
        stream.removeListener("error", onerror);
        stream.removeListener("close", onclose);
      };
    }
    __name(eos, "eos");
    module.exports = eos;
  }
});

// node_modules/readable-stream/lib/internal/streams/async_iterator.js
var require_async_iterator = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/async_iterator.js"(exports, module) {
    "use strict";
    var _Object$setPrototypeO;
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    __name(_defineProperty, "_defineProperty");
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    __name(_toPropertyKey, "_toPropertyKey");
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    __name(_toPrimitive, "_toPrimitive");
    var finished = require_end_of_stream();
    var kLastResolve = Symbol("lastResolve");
    var kLastReject = Symbol("lastReject");
    var kError = Symbol("error");
    var kEnded = Symbol("ended");
    var kLastPromise = Symbol("lastPromise");
    var kHandlePromise = Symbol("handlePromise");
    var kStream = Symbol("stream");
    function createIterResult(value, done) {
      return {
        value,
        done
      };
    }
    __name(createIterResult, "createIterResult");
    function readAndResolve(iter) {
      var resolve = iter[kLastResolve];
      if (resolve !== null) {
        var data = iter[kStream].read();
        if (data !== null) {
          iter[kLastPromise] = null;
          iter[kLastResolve] = null;
          iter[kLastReject] = null;
          resolve(createIterResult(data, false));
        }
      }
    }
    __name(readAndResolve, "readAndResolve");
    function onReadable(iter) {
      process.nextTick(readAndResolve, iter);
    }
    __name(onReadable, "onReadable");
    function wrapForNext(lastPromise, iter) {
      return function(resolve, reject) {
        lastPromise.then(function() {
          if (iter[kEnded]) {
            resolve(createIterResult(void 0, true));
            return;
          }
          iter[kHandlePromise](resolve, reject);
        }, reject);
      };
    }
    __name(wrapForNext, "wrapForNext");
    var AsyncIteratorPrototype = Object.getPrototypeOf(function() {
    });
    var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
      get stream() {
        return this[kStream];
      },
      next: /* @__PURE__ */ __name(function next() {
        var _this = this;
        var error = this[kError];
        if (error !== null) {
          return Promise.reject(error);
        }
        if (this[kEnded]) {
          return Promise.resolve(createIterResult(void 0, true));
        }
        if (this[kStream].destroyed) {
          return new Promise(function(resolve, reject) {
            process.nextTick(function() {
              if (_this[kError]) {
                reject(_this[kError]);
              } else {
                resolve(createIterResult(void 0, true));
              }
            });
          });
        }
        var lastPromise = this[kLastPromise];
        var promise;
        if (lastPromise) {
          promise = new Promise(wrapForNext(lastPromise, this));
        } else {
          var data = this[kStream].read();
          if (data !== null) {
            return Promise.resolve(createIterResult(data, false));
          }
          promise = new Promise(this[kHandlePromise]);
        }
        this[kLastPromise] = promise;
        return promise;
      }, "next")
    }, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
      return this;
    }), _defineProperty(_Object$setPrototypeO, "return", /* @__PURE__ */ __name(function _return() {
      var _this2 = this;
      return new Promise(function(resolve, reject) {
        _this2[kStream].destroy(null, function(err) {
          if (err) {
            reject(err);
            return;
          }
          resolve(createIterResult(void 0, true));
        });
      });
    }, "_return")), _Object$setPrototypeO), AsyncIteratorPrototype);
    var createReadableStreamAsyncIterator = /* @__PURE__ */ __name(function createReadableStreamAsyncIterator2(stream) {
      var _Object$create;
      var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
        value: stream,
        writable: true
      }), _defineProperty(_Object$create, kLastResolve, {
        value: null,
        writable: true
      }), _defineProperty(_Object$create, kLastReject, {
        value: null,
        writable: true
      }), _defineProperty(_Object$create, kError, {
        value: null,
        writable: true
      }), _defineProperty(_Object$create, kEnded, {
        value: stream._readableState.endEmitted,
        writable: true
      }), _defineProperty(_Object$create, kHandlePromise, {
        value: /* @__PURE__ */ __name(function value(resolve, reject) {
          var data = iterator[kStream].read();
          if (data) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            resolve(createIterResult(data, false));
          } else {
            iterator[kLastResolve] = resolve;
            iterator[kLastReject] = reject;
          }
        }, "value"),
        writable: true
      }), _Object$create));
      iterator[kLastPromise] = null;
      finished(stream, function(err) {
        if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
          var reject = iterator[kLastReject];
          if (reject !== null) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            reject(err);
          }
          iterator[kError] = err;
          return;
        }
        var resolve = iterator[kLastResolve];
        if (resolve !== null) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          resolve(createIterResult(void 0, true));
        }
        iterator[kEnded] = true;
      });
      stream.on("readable", onReadable.bind(null, iterator));
      return iterator;
    }, "createReadableStreamAsyncIterator");
    module.exports = createReadableStreamAsyncIterator;
  }
});

// node_modules/readable-stream/lib/internal/streams/from.js
var require_from = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/from.js"(exports, module) {
    "use strict";
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      if (info.done) {
        resolve(value);
      } else {
        Promise.resolve(value).then(_next, _throw);
      }
    }
    __name(asyncGeneratorStep, "asyncGeneratorStep");
    function _asyncToGenerator(fn) {
      return function() {
        var self2 = this, args = arguments;
        return new Promise(function(resolve, reject) {
          var gen = fn.apply(self2, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }
          __name(_next, "_next");
          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }
          __name(_throw, "_throw");
          _next(void 0);
        });
      };
    }
    __name(_asyncToGenerator, "_asyncToGenerator");
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    __name(ownKeys, "ownKeys");
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    __name(_objectSpread, "_objectSpread");
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    __name(_defineProperty, "_defineProperty");
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    __name(_toPropertyKey, "_toPropertyKey");
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    __name(_toPrimitive, "_toPrimitive");
    var ERR_INVALID_ARG_TYPE = require_errors().codes.ERR_INVALID_ARG_TYPE;
    function from(Readable, iterable, opts) {
      var iterator;
      if (iterable && typeof iterable.next === "function") {
        iterator = iterable;
      } else if (iterable && iterable[Symbol.asyncIterator]) iterator = iterable[Symbol.asyncIterator]();
      else if (iterable && iterable[Symbol.iterator]) iterator = iterable[Symbol.iterator]();
      else throw new ERR_INVALID_ARG_TYPE("iterable", [
        "Iterable"
      ], iterable);
      var readable = new Readable(_objectSpread({
        objectMode: true
      }, opts));
      var reading = false;
      readable._read = function() {
        if (!reading) {
          reading = true;
          next();
        }
      };
      function next() {
        return _next2.apply(this, arguments);
      }
      __name(next, "next");
      function _next2() {
        _next2 = _asyncToGenerator(function* () {
          try {
            var _yield$iterator$next = yield iterator.next(), value = _yield$iterator$next.value, done = _yield$iterator$next.done;
            if (done) {
              readable.push(null);
            } else if (readable.push(yield value)) {
              next();
            } else {
              reading = false;
            }
          } catch (err) {
            readable.destroy(err);
          }
        });
        return _next2.apply(this, arguments);
      }
      __name(_next2, "_next2");
      return readable;
    }
    __name(from, "from");
    module.exports = from;
  }
});

// node_modules/readable-stream/lib/_stream_readable.js
var require_stream_readable = __commonJS({
  "node_modules/readable-stream/lib/_stream_readable.js"(exports, module) {
    "use strict";
    module.exports = Readable;
    var Duplex;
    Readable.ReadableState = ReadableState;
    var EE = __require("events").EventEmitter;
    var EElistenerCount = /* @__PURE__ */ __name(function EElistenerCount2(emitter, type) {
      return emitter.listeners(type).length;
    }, "EElistenerCount");
    var Stream = require_stream();
    var Buffer2 = __require("buffer").Buffer;
    var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk);
    }
    __name(_uint8ArrayToBuffer, "_uint8ArrayToBuffer");
    function _isUint8Array(obj) {
      return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    __name(_isUint8Array, "_isUint8Array");
    var debugUtil = __require("util");
    var debug;
    if (debugUtil && debugUtil.debuglog) {
      debug = debugUtil.debuglog("stream");
    } else {
      debug = /* @__PURE__ */ __name(function debug2() {
      }, "debug");
    }
    var BufferList = require_buffer_list();
    var destroyImpl = require_destroy();
    var _require = require_state();
    var getHighWaterMark = _require.getHighWaterMark;
    var _require$codes = require_errors().codes;
    var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE;
    var ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF;
    var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
    var ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
    var StringDecoder;
    var createReadableStreamAsyncIterator;
    var from;
    require_inherits()(Readable, Stream);
    var errorOrDestroy = destroyImpl.errorOrDestroy;
    var kProxyEvents = [
      "error",
      "close",
      "destroy",
      "pause",
      "resume"
    ];
    function prependListener(emitter, event, fn) {
      if (typeof emitter.prependListener === "function") return emitter.prependListener(event, fn);
      if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
      else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);
      else emitter._events[event] = [
        fn,
        emitter._events[event]
      ];
    }
    __name(prependListener, "prependListener");
    function ReadableState(options, stream, isDuplex) {
      Duplex = Duplex || require_stream_duplex();
      options = options || {};
      if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex;
      this.objectMode = !!options.objectMode;
      if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
      this.highWaterMark = getHighWaterMark(this, options, "readableHighWaterMark", isDuplex);
      this.buffer = new BufferList();
      this.length = 0;
      this.pipes = null;
      this.pipesCount = 0;
      this.flowing = null;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;
      this.sync = true;
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.resumeScheduled = false;
      this.paused = true;
      this.emitClose = options.emitClose !== false;
      this.autoDestroy = !!options.autoDestroy;
      this.destroyed = false;
      this.defaultEncoding = options.defaultEncoding || "utf8";
      this.awaitDrain = 0;
      this.readingMore = false;
      this.decoder = null;
      this.encoding = null;
      if (options.encoding) {
        if (!StringDecoder) StringDecoder = require_string_decoder().StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
      }
    }
    __name(ReadableState, "ReadableState");
    function Readable(options) {
      Duplex = Duplex || require_stream_duplex();
      if (!(this instanceof Readable)) return new Readable(options);
      var isDuplex = this instanceof Duplex;
      this._readableState = new ReadableState(options, this, isDuplex);
      this.readable = true;
      if (options) {
        if (typeof options.read === "function") this._read = options.read;
        if (typeof options.destroy === "function") this._destroy = options.destroy;
      }
      Stream.call(this);
    }
    __name(Readable, "Readable");
    Object.defineProperty(Readable.prototype, "destroyed", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: /* @__PURE__ */ __name(function get() {
        if (this._readableState === void 0) {
          return false;
        }
        return this._readableState.destroyed;
      }, "get"),
      set: /* @__PURE__ */ __name(function set(value) {
        if (!this._readableState) {
          return;
        }
        this._readableState.destroyed = value;
      }, "set")
    });
    Readable.prototype.destroy = destroyImpl.destroy;
    Readable.prototype._undestroy = destroyImpl.undestroy;
    Readable.prototype._destroy = function(err, cb) {
      cb(err);
    };
    Readable.prototype.push = function(chunk, encoding) {
      var state = this._readableState;
      var skipChunkCheck;
      if (!state.objectMode) {
        if (typeof chunk === "string") {
          encoding = encoding || state.defaultEncoding;
          if (encoding !== state.encoding) {
            chunk = Buffer2.from(chunk, encoding);
            encoding = "";
          }
          skipChunkCheck = true;
        }
      } else {
        skipChunkCheck = true;
      }
      return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
    };
    Readable.prototype.unshift = function(chunk) {
      return readableAddChunk(this, chunk, null, true, false);
    };
    function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
      debug("readableAddChunk", chunk);
      var state = stream._readableState;
      if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
      } else {
        var er;
        if (!skipChunkCheck) er = chunkInvalid(state, chunk);
        if (er) {
          errorOrDestroy(stream, er);
        } else if (state.objectMode || chunk && chunk.length > 0) {
          if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer2.prototype) {
            chunk = _uint8ArrayToBuffer(chunk);
          }
          if (addToFront) {
            if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
            else addChunk(stream, state, chunk, true);
          } else if (state.ended) {
            errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
          } else if (state.destroyed) {
            return false;
          } else {
            state.reading = false;
            if (state.decoder && !encoding) {
              chunk = state.decoder.write(chunk);
              if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);
              else maybeReadMore(stream, state);
            } else {
              addChunk(stream, state, chunk, false);
            }
          }
        } else if (!addToFront) {
          state.reading = false;
          maybeReadMore(stream, state);
        }
      }
      return !state.ended && (state.length < state.highWaterMark || state.length === 0);
    }
    __name(readableAddChunk, "readableAddChunk");
    function addChunk(stream, state, chunk, addToFront) {
      if (state.flowing && state.length === 0 && !state.sync) {
        state.awaitDrain = 0;
        stream.emit("data", chunk);
      } else {
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront) state.buffer.unshift(chunk);
        else state.buffer.push(chunk);
        if (state.needReadable) emitReadable(stream);
      }
      maybeReadMore(stream, state);
    }
    __name(addChunk, "addChunk");
    function chunkInvalid(state, chunk) {
      var er;
      if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
        er = new ERR_INVALID_ARG_TYPE("chunk", [
          "string",
          "Buffer",
          "Uint8Array"
        ], chunk);
      }
      return er;
    }
    __name(chunkInvalid, "chunkInvalid");
    Readable.prototype.isPaused = function() {
      return this._readableState.flowing === false;
    };
    Readable.prototype.setEncoding = function(enc) {
      if (!StringDecoder) StringDecoder = require_string_decoder().StringDecoder;
      var decoder = new StringDecoder(enc);
      this._readableState.decoder = decoder;
      this._readableState.encoding = this._readableState.decoder.encoding;
      var p = this._readableState.buffer.head;
      var content = "";
      while (p !== null) {
        content += decoder.write(p.data);
        p = p.next;
      }
      this._readableState.buffer.clear();
      if (content !== "") this._readableState.buffer.push(content);
      this._readableState.length = content.length;
      return this;
    };
    var MAX_HWM = 1073741824;
    function computeNewHighWaterMark(n) {
      if (n >= MAX_HWM) {
        n = MAX_HWM;
      } else {
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
      }
      return n;
    }
    __name(computeNewHighWaterMark, "computeNewHighWaterMark");
    function howMuchToRead(n, state) {
      if (n <= 0 || state.length === 0 && state.ended) return 0;
      if (state.objectMode) return 1;
      if (n !== n) {
        if (state.flowing && state.length) return state.buffer.head.data.length;
        else return state.length;
      }
      if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
      if (n <= state.length) return n;
      if (!state.ended) {
        state.needReadable = true;
        return 0;
      }
      return state.length;
    }
    __name(howMuchToRead, "howMuchToRead");
    Readable.prototype.read = function(n) {
      debug("read", n);
      n = parseInt(n, 10);
      var state = this._readableState;
      var nOrig = n;
      if (n !== 0) state.emittedReadable = false;
      if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
        debug("read: emitReadable", state.length, state.ended);
        if (state.length === 0 && state.ended) endReadable(this);
        else emitReadable(this);
        return null;
      }
      n = howMuchToRead(n, state);
      if (n === 0 && state.ended) {
        if (state.length === 0) endReadable(this);
        return null;
      }
      var doRead = state.needReadable;
      debug("need readable", doRead);
      if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug("length less than watermark", doRead);
      }
      if (state.ended || state.reading) {
        doRead = false;
        debug("reading or ended", doRead);
      } else if (doRead) {
        debug("do read");
        state.reading = true;
        state.sync = true;
        if (state.length === 0) state.needReadable = true;
        this._read(state.highWaterMark);
        state.sync = false;
        if (!state.reading) n = howMuchToRead(nOrig, state);
      }
      var ret;
      if (n > 0) ret = fromList(n, state);
      else ret = null;
      if (ret === null) {
        state.needReadable = state.length <= state.highWaterMark;
        n = 0;
      } else {
        state.length -= n;
        state.awaitDrain = 0;
      }
      if (state.length === 0) {
        if (!state.ended) state.needReadable = true;
        if (nOrig !== n && state.ended) endReadable(this);
      }
      if (ret !== null) this.emit("data", ret);
      return ret;
    };
    function onEofChunk(stream, state) {
      debug("onEofChunk");
      if (state.ended) return;
      if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
          state.buffer.push(chunk);
          state.length += state.objectMode ? 1 : chunk.length;
        }
      }
      state.ended = true;
      if (state.sync) {
        emitReadable(stream);
      } else {
        state.needReadable = false;
        if (!state.emittedReadable) {
          state.emittedReadable = true;
          emitReadable_(stream);
        }
      }
    }
    __name(onEofChunk, "onEofChunk");
    function emitReadable(stream) {
      var state = stream._readableState;
      debug("emitReadable", state.needReadable, state.emittedReadable);
      state.needReadable = false;
      if (!state.emittedReadable) {
        debug("emitReadable", state.flowing);
        state.emittedReadable = true;
        process.nextTick(emitReadable_, stream);
      }
    }
    __name(emitReadable, "emitReadable");
    function emitReadable_(stream) {
      var state = stream._readableState;
      debug("emitReadable_", state.destroyed, state.length, state.ended);
      if (!state.destroyed && (state.length || state.ended)) {
        stream.emit("readable");
        state.emittedReadable = false;
      }
      state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
      flow(stream);
    }
    __name(emitReadable_, "emitReadable_");
    function maybeReadMore(stream, state) {
      if (!state.readingMore) {
        state.readingMore = true;
        process.nextTick(maybeReadMore_, stream, state);
      }
    }
    __name(maybeReadMore, "maybeReadMore");
    function maybeReadMore_(stream, state) {
      while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
        var len = state.length;
        debug("maybeReadMore read 0");
        stream.read(0);
        if (len === state.length) break;
      }
      state.readingMore = false;
    }
    __name(maybeReadMore_, "maybeReadMore_");
    Readable.prototype._read = function(n) {
      errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED("_read()"));
    };
    Readable.prototype.pipe = function(dest, pipeOpts) {
      var src = this;
      var state = this._readableState;
      switch (state.pipesCount) {
        case 0:
          state.pipes = dest;
          break;
        case 1:
          state.pipes = [
            state.pipes,
            dest
          ];
          break;
        default:
          state.pipes.push(dest);
          break;
      }
      state.pipesCount += 1;
      debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
      var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
      var endFn = doEnd ? onend : unpipe;
      if (state.endEmitted) process.nextTick(endFn);
      else src.once("end", endFn);
      dest.on("unpipe", onunpipe);
      function onunpipe(readable, unpipeInfo) {
        debug("onunpipe");
        if (readable === src) {
          if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
            unpipeInfo.hasUnpiped = true;
            cleanup();
          }
        }
      }
      __name(onunpipe, "onunpipe");
      function onend() {
        debug("onend");
        dest.end();
      }
      __name(onend, "onend");
      var ondrain = pipeOnDrain(src);
      dest.on("drain", ondrain);
      var cleanedUp = false;
      function cleanup() {
        debug("cleanup");
        dest.removeListener("close", onclose);
        dest.removeListener("finish", onfinish);
        dest.removeListener("drain", ondrain);
        dest.removeListener("error", onerror);
        dest.removeListener("unpipe", onunpipe);
        src.removeListener("end", onend);
        src.removeListener("end", unpipe);
        src.removeListener("data", ondata);
        cleanedUp = true;
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
      }
      __name(cleanup, "cleanup");
      src.on("data", ondata);
      function ondata(chunk) {
        debug("ondata");
        var ret = dest.write(chunk);
        debug("dest.write", ret);
        if (ret === false) {
          if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
            debug("false write response, pause", state.awaitDrain);
            state.awaitDrain++;
          }
          src.pause();
        }
      }
      __name(ondata, "ondata");
      function onerror(er) {
        debug("onerror", er);
        unpipe();
        dest.removeListener("error", onerror);
        if (EElistenerCount(dest, "error") === 0) errorOrDestroy(dest, er);
      }
      __name(onerror, "onerror");
      prependListener(dest, "error", onerror);
      function onclose() {
        dest.removeListener("finish", onfinish);
        unpipe();
      }
      __name(onclose, "onclose");
      dest.once("close", onclose);
      function onfinish() {
        debug("onfinish");
        dest.removeListener("close", onclose);
        unpipe();
      }
      __name(onfinish, "onfinish");
      dest.once("finish", onfinish);
      function unpipe() {
        debug("unpipe");
        src.unpipe(dest);
      }
      __name(unpipe, "unpipe");
      dest.emit("pipe", src);
      if (!state.flowing) {
        debug("pipe resume");
        src.resume();
      }
      return dest;
    };
    function pipeOnDrain(src) {
      return /* @__PURE__ */ __name(function pipeOnDrainFunctionResult() {
        var state = src._readableState;
        debug("pipeOnDrain", state.awaitDrain);
        if (state.awaitDrain) state.awaitDrain--;
        if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
          state.flowing = true;
          flow(src);
        }
      }, "pipeOnDrainFunctionResult");
    }
    __name(pipeOnDrain, "pipeOnDrain");
    Readable.prototype.unpipe = function(dest) {
      var state = this._readableState;
      var unpipeInfo = {
        hasUnpiped: false
      };
      if (state.pipesCount === 0) return this;
      if (state.pipesCount === 1) {
        if (dest && dest !== state.pipes) return this;
        if (!dest) dest = state.pipes;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest) dest.emit("unpipe", this, unpipeInfo);
        return this;
      }
      if (!dest) {
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for (var i = 0; i < len; i++) dests[i].emit("unpipe", this, {
          hasUnpiped: false
        });
        return this;
      }
      var index = indexOf(state.pipes, dest);
      if (index === -1) return this;
      state.pipes.splice(index, 1);
      state.pipesCount -= 1;
      if (state.pipesCount === 1) state.pipes = state.pipes[0];
      dest.emit("unpipe", this, unpipeInfo);
      return this;
    };
    Readable.prototype.on = function(ev, fn) {
      var res = Stream.prototype.on.call(this, ev, fn);
      var state = this._readableState;
      if (ev === "data") {
        state.readableListening = this.listenerCount("readable") > 0;
        if (state.flowing !== false) this.resume();
      } else if (ev === "readable") {
        if (!state.endEmitted && !state.readableListening) {
          state.readableListening = state.needReadable = true;
          state.flowing = false;
          state.emittedReadable = false;
          debug("on readable", state.length, state.reading);
          if (state.length) {
            emitReadable(this);
          } else if (!state.reading) {
            process.nextTick(nReadingNextTick, this);
          }
        }
      }
      return res;
    };
    Readable.prototype.addListener = Readable.prototype.on;
    Readable.prototype.removeListener = function(ev, fn) {
      var res = Stream.prototype.removeListener.call(this, ev, fn);
      if (ev === "readable") {
        process.nextTick(updateReadableListening, this);
      }
      return res;
    };
    Readable.prototype.removeAllListeners = function(ev) {
      var res = Stream.prototype.removeAllListeners.apply(this, arguments);
      if (ev === "readable" || ev === void 0) {
        process.nextTick(updateReadableListening, this);
      }
      return res;
    };
    function updateReadableListening(self1) {
      var state = self1._readableState;
      state.readableListening = self1.listenerCount("readable") > 0;
      if (state.resumeScheduled && !state.paused) {
        state.flowing = true;
      } else if (self1.listenerCount("data") > 0) {
        self1.resume();
      }
    }
    __name(updateReadableListening, "updateReadableListening");
    function nReadingNextTick(self1) {
      debug("readable nexttick read 0");
      self1.read(0);
    }
    __name(nReadingNextTick, "nReadingNextTick");
    Readable.prototype.resume = function() {
      var state = this._readableState;
      if (!state.flowing) {
        debug("resume");
        state.flowing = !state.readableListening;
        resume(this, state);
      }
      state.paused = false;
      return this;
    };
    function resume(stream, state) {
      if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        process.nextTick(resume_, stream, state);
      }
    }
    __name(resume, "resume");
    function resume_(stream, state) {
      debug("resume", state.reading);
      if (!state.reading) {
        stream.read(0);
      }
      state.resumeScheduled = false;
      stream.emit("resume");
      flow(stream);
      if (state.flowing && !state.reading) stream.read(0);
    }
    __name(resume_, "resume_");
    Readable.prototype.pause = function() {
      debug("call pause flowing=%j", this._readableState.flowing);
      if (this._readableState.flowing !== false) {
        debug("pause");
        this._readableState.flowing = false;
        this.emit("pause");
      }
      this._readableState.paused = true;
      return this;
    };
    function flow(stream) {
      var state = stream._readableState;
      debug("flow", state.flowing);
      while (state.flowing && stream.read() !== null) ;
    }
    __name(flow, "flow");
    Readable.prototype.wrap = function(stream) {
      var _this = this;
      var state = this._readableState;
      var paused = false;
      stream.on("end", function() {
        debug("wrapped end");
        if (state.decoder && !state.ended) {
          var chunk = state.decoder.end();
          if (chunk && chunk.length) _this.push(chunk);
        }
        _this.push(null);
      });
      stream.on("data", function(chunk) {
        debug("wrapped data");
        if (state.decoder) chunk = state.decoder.write(chunk);
        if (state.objectMode && (chunk === null || chunk === void 0)) return;
        else if (!state.objectMode && (!chunk || !chunk.length)) return;
        var ret = _this.push(chunk);
        if (!ret) {
          paused = true;
          stream.pause();
        }
      });
      for (var i in stream) {
        if (this[i] === void 0 && typeof stream[i] === "function") {
          this[i] = (/* @__PURE__ */ __name(function methodWrap(method) {
            return /* @__PURE__ */ __name(function methodWrapReturnFunction() {
              return stream[method].apply(stream, arguments);
            }, "methodWrapReturnFunction");
          }, "methodWrap"))(i);
        }
      }
      for (var n = 0; n < kProxyEvents.length; n++) {
        stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
      }
      this._read = function(n2) {
        debug("wrapped _read", n2);
        if (paused) {
          paused = false;
          stream.resume();
        }
      };
      return this;
    };
    if (typeof Symbol === "function") {
      Readable.prototype[Symbol.asyncIterator] = function() {
        if (createReadableStreamAsyncIterator === void 0) {
          createReadableStreamAsyncIterator = require_async_iterator();
        }
        return createReadableStreamAsyncIterator(this);
      };
    }
    Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: /* @__PURE__ */ __name(function get() {
        return this._readableState.highWaterMark;
      }, "get")
    });
    Object.defineProperty(Readable.prototype, "readableBuffer", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: /* @__PURE__ */ __name(function get() {
        return this._readableState && this._readableState.buffer;
      }, "get")
    });
    Object.defineProperty(Readable.prototype, "readableFlowing", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: /* @__PURE__ */ __name(function get() {
        return this._readableState.flowing;
      }, "get"),
      set: /* @__PURE__ */ __name(function set(state) {
        if (this._readableState) {
          this._readableState.flowing = state;
        }
      }, "set")
    });
    Readable._fromList = fromList;
    Object.defineProperty(Readable.prototype, "readableLength", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: /* @__PURE__ */ __name(function get() {
        return this._readableState.length;
      }, "get")
    });
    function fromList(n, state) {
      if (state.length === 0) return null;
      var ret;
      if (state.objectMode) ret = state.buffer.shift();
      else if (!n || n >= state.length) {
        if (state.decoder) ret = state.buffer.join("");
        else if (state.buffer.length === 1) ret = state.buffer.first();
        else ret = state.buffer.concat(state.length);
        state.buffer.clear();
      } else {
        ret = state.buffer.consume(n, state.decoder);
      }
      return ret;
    }
    __name(fromList, "fromList");
    function endReadable(stream) {
      var state = stream._readableState;
      debug("endReadable", state.endEmitted);
      if (!state.endEmitted) {
        state.ended = true;
        process.nextTick(endReadableNT, state, stream);
      }
    }
    __name(endReadable, "endReadable");
    function endReadableNT(state, stream) {
      debug("endReadableNT", state.endEmitted, state.length);
      if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit("end");
        if (state.autoDestroy) {
          var wState = stream._writableState;
          if (!wState || wState.autoDestroy && wState.finished) {
            stream.destroy();
          }
        }
      }
    }
    __name(endReadableNT, "endReadableNT");
    if (typeof Symbol === "function") {
      Readable.from = function(iterable, opts) {
        if (from === void 0) {
          from = require_from();
        }
        return from(Readable, iterable, opts);
      };
    }
    function indexOf(xs, x) {
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) return i;
      }
      return -1;
    }
    __name(indexOf, "indexOf");
  }
});

// node_modules/readable-stream/lib/_stream_transform.js
var require_stream_transform = __commonJS({
  "node_modules/readable-stream/lib/_stream_transform.js"(exports, module) {
    "use strict";
    module.exports = Transform;
    var _require$codes = require_errors().codes;
    var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
    var ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK;
    var ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING;
    var ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
    var Duplex = require_stream_duplex();
    require_inherits()(Transform, Duplex);
    function afterTransform(er, data) {
      var ts = this._transformState;
      ts.transforming = false;
      var cb = ts.writecb;
      if (cb === null) {
        return this.emit("error", new ERR_MULTIPLE_CALLBACK());
      }
      ts.writechunk = null;
      ts.writecb = null;
      if (data != null)
        this.push(data);
      cb(er);
      var rs = this._readableState;
      rs.reading = false;
      if (rs.needReadable || rs.length < rs.highWaterMark) {
        this._read(rs.highWaterMark);
      }
    }
    __name(afterTransform, "afterTransform");
    function Transform(options) {
      if (!(this instanceof Transform)) return new Transform(options);
      Duplex.call(this, options);
      this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
      };
      this._readableState.needReadable = true;
      this._readableState.sync = false;
      if (options) {
        if (typeof options.transform === "function") this._transform = options.transform;
        if (typeof options.flush === "function") this._flush = options.flush;
      }
      this.on("prefinish", prefinish);
    }
    __name(Transform, "Transform");
    function prefinish() {
      var _this = this;
      if (typeof this._flush === "function" && !this._readableState.destroyed) {
        this._flush(function(er, data) {
          done(_this, er, data);
        });
      } else {
        done(this, null, null);
      }
    }
    __name(prefinish, "prefinish");
    Transform.prototype.push = function(chunk, encoding) {
      this._transformState.needTransform = false;
      return Duplex.prototype.push.call(this, chunk, encoding);
    };
    Transform.prototype._transform = function(chunk, encoding, cb) {
      cb(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
    };
    Transform.prototype._write = function(chunk, encoding, cb) {
      var ts = this._transformState;
      ts.writecb = cb;
      ts.writechunk = chunk;
      ts.writeencoding = encoding;
      if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
      }
    };
    Transform.prototype._read = function(n) {
      var ts = this._transformState;
      if (ts.writechunk !== null && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
      } else {
        ts.needTransform = true;
      }
    };
    Transform.prototype._destroy = function(err, cb) {
      Duplex.prototype._destroy.call(this, err, function(err2) {
        cb(err2);
      });
    };
    function done(stream, er, data) {
      if (er) return stream.emit("error", er);
      if (data != null)
        stream.push(data);
      if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
      if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
      return stream.push(null);
    }
    __name(done, "done");
  }
});

// node_modules/readable-stream/lib/_stream_passthrough.js
var require_stream_passthrough = __commonJS({
  "node_modules/readable-stream/lib/_stream_passthrough.js"(exports, module) {
    "use strict";
    module.exports = PassThrough;
    var Transform = require_stream_transform();
    require_inherits()(PassThrough, Transform);
    function PassThrough(options) {
      if (!(this instanceof PassThrough)) return new PassThrough(options);
      Transform.call(this, options);
    }
    __name(PassThrough, "PassThrough");
    PassThrough.prototype._transform = function(chunk, encoding, cb) {
      cb(null, chunk);
    };
  }
});

// node_modules/readable-stream/lib/internal/streams/pipeline.js
var require_pipeline = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/pipeline.js"(exports, module) {
    "use strict";
    var eos;
    function once(callback) {
      var called = false;
      return function() {
        if (called) return;
        called = true;
        callback.apply(void 0, arguments);
      };
    }
    __name(once, "once");
    var _require$codes = require_errors().codes;
    var ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;
    var ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
    function noop(err) {
      if (err) throw err;
    }
    __name(noop, "noop");
    function isRequest(stream) {
      return stream.setHeader && typeof stream.abort === "function";
    }
    __name(isRequest, "isRequest");
    function destroyer(stream, reading, writing, callback) {
      callback = once(callback);
      var closed = false;
      stream.on("close", function() {
        closed = true;
      });
      if (eos === void 0) eos = require_end_of_stream();
      eos(stream, {
        readable: reading,
        writable: writing
      }, function(err) {
        if (err) return callback(err);
        closed = true;
        callback();
      });
      var destroyed = false;
      return function(err) {
        if (closed) return;
        if (destroyed) return;
        destroyed = true;
        if (isRequest(stream)) return stream.abort();
        if (typeof stream.destroy === "function") return stream.destroy();
        callback(err || new ERR_STREAM_DESTROYED("pipe"));
      };
    }
    __name(destroyer, "destroyer");
    function call(fn) {
      fn();
    }
    __name(call, "call");
    function pipe(from, to) {
      return from.pipe(to);
    }
    __name(pipe, "pipe");
    function popCallback(streams) {
      if (!streams.length) return noop;
      if (typeof streams[streams.length - 1] !== "function") return noop;
      return streams.pop();
    }
    __name(popCallback, "popCallback");
    function pipeline() {
      for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
        streams[_key] = arguments[_key];
      }
      var callback = popCallback(streams);
      if (Array.isArray(streams[0])) streams = streams[0];
      if (streams.length < 2) {
        throw new ERR_MISSING_ARGS("streams");
      }
      var error;
      var destroys = streams.map(function(stream, i) {
        var reading = i < streams.length - 1;
        var writing = i > 0;
        return destroyer(stream, reading, writing, function(err) {
          if (!error) error = err;
          if (err) destroys.forEach(call);
          if (reading) return;
          destroys.forEach(call);
          callback(error);
        });
      });
      return streams.reduce(pipe);
    }
    __name(pipeline, "pipeline");
    module.exports = pipeline;
  }
});

// node_modules/readable-stream/readable.js
var require_readable = __commonJS({
  "node_modules/readable-stream/readable.js"(exports, module) {
    "use strict";
    var Stream = __require("stream");
    if (process.env.READABLE_STREAM === "disable" && Stream) {
      module.exports = Stream.Readable;
      Object.assign(module.exports, Stream);
      module.exports.Stream = Stream;
    } else {
      exports = module.exports = require_stream_readable();
      exports.Stream = Stream || exports;
      exports.Readable = exports;
      exports.Writable = require_stream_writable();
      exports.Duplex = require_stream_duplex();
      exports.Transform = require_stream_transform();
      exports.PassThrough = require_stream_passthrough();
      exports.finished = require_end_of_stream();
      exports.pipeline = require_pipeline();
    }
  }
});

// node_modules/bl/BufferList.js
var require_BufferList = __commonJS({
  "node_modules/bl/BufferList.js"(exports, module) {
    "use strict";
    var { Buffer: Buffer2 } = __require("buffer");
    var symbol = Symbol.for("BufferList");
    function BufferList(buf) {
      if (!(this instanceof BufferList)) {
        return new BufferList(buf);
      }
      BufferList._init.call(this, buf);
    }
    __name(BufferList, "BufferList");
    BufferList._init = /* @__PURE__ */ __name(function _init(buf) {
      Object.defineProperty(this, symbol, {
        value: true
      });
      this._bufs = [];
      this.length = 0;
      if (buf) {
        this.append(buf);
      }
    }, "_init");
    BufferList.prototype._new = /* @__PURE__ */ __name(function _new(buf) {
      return new BufferList(buf);
    }, "_new");
    BufferList.prototype._offset = /* @__PURE__ */ __name(function _offset(offset) {
      if (offset === 0) {
        return [
          0,
          0
        ];
      }
      let tot = 0;
      for (let i = 0; i < this._bufs.length; i++) {
        const _t = tot + this._bufs[i].length;
        if (offset < _t || i === this._bufs.length - 1) {
          return [
            i,
            offset - tot
          ];
        }
        tot = _t;
      }
    }, "_offset");
    BufferList.prototype._reverseOffset = function(blOffset) {
      const bufferId = blOffset[0];
      let offset = blOffset[1];
      for (let i = 0; i < bufferId; i++) {
        offset += this._bufs[i].length;
      }
      return offset;
    };
    BufferList.prototype.get = /* @__PURE__ */ __name(function get(index) {
      if (index > this.length || index < 0) {
        return void 0;
      }
      const offset = this._offset(index);
      return this._bufs[offset[0]][offset[1]];
    }, "get");
    BufferList.prototype.slice = /* @__PURE__ */ __name(function slice(start, end) {
      if (typeof start === "number" && start < 0) {
        start += this.length;
      }
      if (typeof end === "number" && end < 0) {
        end += this.length;
      }
      return this.copy(null, 0, start, end);
    }, "slice");
    BufferList.prototype.copy = /* @__PURE__ */ __name(function copy(dst, dstStart, srcStart, srcEnd) {
      if (typeof srcStart !== "number" || srcStart < 0) {
        srcStart = 0;
      }
      if (typeof srcEnd !== "number" || srcEnd > this.length) {
        srcEnd = this.length;
      }
      if (srcStart >= this.length) {
        return dst || Buffer2.alloc(0);
      }
      if (srcEnd <= 0) {
        return dst || Buffer2.alloc(0);
      }
      const copy2 = !!dst;
      const off = this._offset(srcStart);
      const len = srcEnd - srcStart;
      let bytes = len;
      let bufoff = copy2 && dstStart || 0;
      let start = off[1];
      if (srcStart === 0 && srcEnd === this.length) {
        if (!copy2) {
          return this._bufs.length === 1 ? this._bufs[0] : Buffer2.concat(this._bufs, this.length);
        }
        for (let i = 0; i < this._bufs.length; i++) {
          this._bufs[i].copy(dst, bufoff);
          bufoff += this._bufs[i].length;
        }
        return dst;
      }
      if (bytes <= this._bufs[off[0]].length - start) {
        return copy2 ? this._bufs[off[0]].copy(dst, dstStart, start, start + bytes) : this._bufs[off[0]].slice(start, start + bytes);
      }
      if (!copy2) {
        dst = Buffer2.allocUnsafe(len);
      }
      for (let i = off[0]; i < this._bufs.length; i++) {
        const l = this._bufs[i].length - start;
        if (bytes > l) {
          this._bufs[i].copy(dst, bufoff, start);
          bufoff += l;
        } else {
          this._bufs[i].copy(dst, bufoff, start, start + bytes);
          bufoff += l;
          break;
        }
        bytes -= l;
        if (start) {
          start = 0;
        }
      }
      if (dst.length > bufoff) return dst.slice(0, bufoff);
      return dst;
    }, "copy");
    BufferList.prototype.shallowSlice = /* @__PURE__ */ __name(function shallowSlice(start, end) {
      start = start || 0;
      end = typeof end !== "number" ? this.length : end;
      if (start < 0) {
        start += this.length;
      }
      if (end < 0) {
        end += this.length;
      }
      if (start === end) {
        return this._new();
      }
      const startOffset = this._offset(start);
      const endOffset = this._offset(end);
      const buffers = this._bufs.slice(startOffset[0], endOffset[0] + 1);
      if (endOffset[1] === 0) {
        buffers.pop();
      } else {
        buffers[buffers.length - 1] = buffers[buffers.length - 1].slice(0, endOffset[1]);
      }
      if (startOffset[1] !== 0) {
        buffers[0] = buffers[0].slice(startOffset[1]);
      }
      return this._new(buffers);
    }, "shallowSlice");
    BufferList.prototype.toString = /* @__PURE__ */ __name(function toString(encoding, start, end) {
      return this.slice(start, end).toString(encoding);
    }, "toString");
    BufferList.prototype.consume = /* @__PURE__ */ __name(function consume(bytes) {
      bytes = Math.trunc(bytes);
      if (Number.isNaN(bytes) || bytes <= 0) return this;
      while (this._bufs.length) {
        if (bytes >= this._bufs[0].length) {
          bytes -= this._bufs[0].length;
          this.length -= this._bufs[0].length;
          this._bufs.shift();
        } else {
          this._bufs[0] = this._bufs[0].slice(bytes);
          this.length -= bytes;
          break;
        }
      }
      return this;
    }, "consume");
    BufferList.prototype.duplicate = /* @__PURE__ */ __name(function duplicate() {
      const copy = this._new();
      for (let i = 0; i < this._bufs.length; i++) {
        copy.append(this._bufs[i]);
      }
      return copy;
    }, "duplicate");
    BufferList.prototype.append = /* @__PURE__ */ __name(function append(buf) {
      if (buf == null) {
        return this;
      }
      if (buf.buffer) {
        this._appendBuffer(Buffer2.from(buf.buffer, buf.byteOffset, buf.byteLength));
      } else if (Array.isArray(buf)) {
        for (let i = 0; i < buf.length; i++) {
          this.append(buf[i]);
        }
      } else if (this._isBufferList(buf)) {
        for (let i = 0; i < buf._bufs.length; i++) {
          this.append(buf._bufs[i]);
        }
      } else {
        if (typeof buf === "number") {
          buf = buf.toString();
        }
        this._appendBuffer(Buffer2.from(buf));
      }
      return this;
    }, "append");
    BufferList.prototype._appendBuffer = /* @__PURE__ */ __name(function appendBuffer(buf) {
      this._bufs.push(buf);
      this.length += buf.length;
    }, "appendBuffer");
    BufferList.prototype.indexOf = function(search, offset, encoding) {
      if (encoding === void 0 && typeof offset === "string") {
        encoding = offset;
        offset = void 0;
      }
      if (typeof search === "function" || Array.isArray(search)) {
        throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.');
      } else if (typeof search === "number") {
        search = Buffer2.from([
          search
        ]);
      } else if (typeof search === "string") {
        search = Buffer2.from(search, encoding);
      } else if (this._isBufferList(search)) {
        search = search.slice();
      } else if (Array.isArray(search.buffer)) {
        search = Buffer2.from(search.buffer, search.byteOffset, search.byteLength);
      } else if (!Buffer2.isBuffer(search)) {
        search = Buffer2.from(search);
      }
      offset = Number(offset || 0);
      if (isNaN(offset)) {
        offset = 0;
      }
      if (offset < 0) {
        offset = this.length + offset;
      }
      if (offset < 0) {
        offset = 0;
      }
      if (search.length === 0) {
        return offset > this.length ? this.length : offset;
      }
      const blOffset = this._offset(offset);
      let blIndex = blOffset[0];
      let buffOffset = blOffset[1];
      for (; blIndex < this._bufs.length; blIndex++) {
        const buff = this._bufs[blIndex];
        while (buffOffset < buff.length) {
          const availableWindow = buff.length - buffOffset;
          if (availableWindow >= search.length) {
            const nativeSearchResult = buff.indexOf(search, buffOffset);
            if (nativeSearchResult !== -1) {
              return this._reverseOffset([
                blIndex,
                nativeSearchResult
              ]);
            }
            buffOffset = buff.length - search.length + 1;
          } else {
            const revOffset = this._reverseOffset([
              blIndex,
              buffOffset
            ]);
            if (this._match(revOffset, search)) {
              return revOffset;
            }
            buffOffset++;
          }
        }
        buffOffset = 0;
      }
      return -1;
    };
    BufferList.prototype._match = function(offset, search) {
      if (this.length - offset < search.length) {
        return false;
      }
      for (let searchOffset = 0; searchOffset < search.length; searchOffset++) {
        if (this.get(offset + searchOffset) !== search[searchOffset]) {
          return false;
        }
      }
      return true;
    };
    (function() {
      const methods = {
        readDoubleBE: 8,
        readDoubleLE: 8,
        readFloatBE: 4,
        readFloatLE: 4,
        readInt32BE: 4,
        readInt32LE: 4,
        readUInt32BE: 4,
        readUInt32LE: 4,
        readInt16BE: 2,
        readInt16LE: 2,
        readUInt16BE: 2,
        readUInt16LE: 2,
        readInt8: 1,
        readUInt8: 1,
        readIntBE: null,
        readIntLE: null,
        readUIntBE: null,
        readUIntLE: null
      };
      for (const m in methods) {
        (function(m2) {
          if (methods[m2] === null) {
            BufferList.prototype[m2] = function(offset, byteLength) {
              return this.slice(offset, offset + byteLength)[m2](0, byteLength);
            };
          } else {
            BufferList.prototype[m2] = function(offset = 0) {
              return this.slice(offset, offset + methods[m2])[m2](0);
            };
          }
        })(m);
      }
    })();
    BufferList.prototype._isBufferList = /* @__PURE__ */ __name(function _isBufferList(b) {
      return b instanceof BufferList || BufferList.isBufferList(b);
    }, "_isBufferList");
    BufferList.isBufferList = /* @__PURE__ */ __name(function isBufferList(b) {
      return b != null && b[symbol];
    }, "isBufferList");
    module.exports = BufferList;
  }
});

// node_modules/bl/bl.js
var require_bl = __commonJS({
  "node_modules/bl/bl.js"(exports, module) {
    "use strict";
    var DuplexStream = require_readable().Duplex;
    var inherits = require_inherits();
    var BufferList = require_BufferList();
    function BufferListStream(callback) {
      if (!(this instanceof BufferListStream)) {
        return new BufferListStream(callback);
      }
      if (typeof callback === "function") {
        this._callback = callback;
        const piper = (/* @__PURE__ */ __name((function piper2(err) {
          if (this._callback) {
            this._callback(err);
            this._callback = null;
          }
        }), "piper")).bind(this);
        this.on("pipe", /* @__PURE__ */ __name(function onPipe(src) {
          src.on("error", piper);
        }, "onPipe"));
        this.on("unpipe", /* @__PURE__ */ __name(function onUnpipe(src) {
          src.removeListener("error", piper);
        }, "onUnpipe"));
        callback = null;
      }
      BufferList._init.call(this, callback);
      DuplexStream.call(this);
    }
    __name(BufferListStream, "BufferListStream");
    inherits(BufferListStream, DuplexStream);
    Object.assign(BufferListStream.prototype, BufferList.prototype);
    BufferListStream.prototype._new = /* @__PURE__ */ __name(function _new(callback) {
      return new BufferListStream(callback);
    }, "_new");
    BufferListStream.prototype._write = /* @__PURE__ */ __name(function _write(buf, encoding, callback) {
      this._appendBuffer(buf);
      if (typeof callback === "function") {
        callback();
      }
    }, "_write");
    BufferListStream.prototype._read = /* @__PURE__ */ __name(function _read(size) {
      if (!this.length) {
        return this.push(null);
      }
      size = Math.min(size, this.length);
      this.push(this.slice(0, size));
      this.consume(size);
    }, "_read");
    BufferListStream.prototype.end = /* @__PURE__ */ __name(function end(chunk) {
      DuplexStream.prototype.end.call(this, chunk);
      if (this._callback) {
        this._callback(null, this.slice());
        this._callback = null;
      }
    }, "end");
    BufferListStream.prototype._destroy = /* @__PURE__ */ __name(function _destroy(err, cb) {
      this._bufs.length = 0;
      this.length = 0;
      cb(err);
    }, "_destroy");
    BufferListStream.prototype._isBufferList = /* @__PURE__ */ __name(function _isBufferList(b) {
      return b instanceof BufferListStream || b instanceof BufferList || BufferListStream.isBufferList(b);
    }, "_isBufferList");
    BufferListStream.isBufferList = BufferList.isBufferList;
    module.exports = BufferListStream;
    module.exports.BufferListStream = BufferListStream;
    module.exports.BufferList = BufferList;
  }
});

// node_modules/ora/index.js
var require_ora = __commonJS({
  "node_modules/ora/index.js"(exports, module) {
    "use strict";
    var readline = __require("readline");
    var chalk = require_source2();
    var cliCursor = require_cli_cursor();
    var cliSpinners = require_cli_spinners();
    var logSymbols = require_log_symbols2();
    var stripAnsi = require_strip_ansi();
    var wcwidth = require_wcwidth();
    var isInteractive = require_is_interactive();
    var isUnicodeSupported = require_is_unicode_supported();
    var { BufferListStream } = require_bl();
    var TEXT = Symbol("text");
    var PREFIX_TEXT = Symbol("prefixText");
    var ASCII_ETX_CODE = 3;
    var _a;
    var StdinDiscarder = (_a = class {
      constructor() {
        this.requests = 0;
        this.mutedStream = new BufferListStream();
        this.mutedStream.pipe(process.stdout);
        const self2 = this;
        this.ourEmit = function(event, data, ...args) {
          const { stdin } = process;
          if (self2.requests > 0 || stdin.emit === self2.ourEmit) {
            if (event === "keypress") {
              return;
            }
            if (event === "data" && data.includes(ASCII_ETX_CODE)) {
              process.emit("SIGINT");
            }
            Reflect.apply(self2.oldEmit, this, [
              event,
              data,
              ...args
            ]);
          } else {
            Reflect.apply(process.stdin.emit, this, [
              event,
              data,
              ...args
            ]);
          }
        };
      }
      start() {
        this.requests++;
        if (this.requests === 1) {
          this.realStart();
        }
      }
      stop() {
        if (this.requests <= 0) {
          throw new Error("`stop` called more times than `start`");
        }
        this.requests--;
        if (this.requests === 0) {
          this.realStop();
        }
      }
      realStart() {
        if (process.platform === "win32") {
          return;
        }
        this.rl = readline.createInterface({
          input: process.stdin,
          output: this.mutedStream
        });
        this.rl.on("SIGINT", () => {
          if (process.listenerCount("SIGINT") === 0) {
            process.emit("SIGINT");
          } else {
            this.rl.close();
            process.kill(process.pid, "SIGINT");
          }
        });
      }
      realStop() {
        if (process.platform === "win32") {
          return;
        }
        this.rl.close();
        this.rl = void 0;
      }
    }, __name(_a, "StdinDiscarder"), _a);
    var stdinDiscarder;
    var _a2;
    var Ora = (_a2 = class {
      constructor(options) {
        if (!stdinDiscarder) {
          stdinDiscarder = new StdinDiscarder();
        }
        if (typeof options === "string") {
          options = {
            text: options
          };
        }
        this.options = __spreadValues({
          text: "",
          color: "cyan",
          stream: process.stderr,
          discardStdin: true
        }, options);
        this.spinner = this.options.spinner;
        this.color = this.options.color;
        this.hideCursor = this.options.hideCursor !== false;
        this.interval = this.options.interval || this.spinner.interval || 100;
        this.stream = this.options.stream;
        this.id = void 0;
        this.isEnabled = typeof this.options.isEnabled === "boolean" ? this.options.isEnabled : isInteractive({
          stream: this.stream
        });
        this.isSilent = typeof this.options.isSilent === "boolean" ? this.options.isSilent : false;
        this.text = this.options.text;
        this.prefixText = this.options.prefixText;
        this.linesToClear = 0;
        this.indent = this.options.indent;
        this.discardStdin = this.options.discardStdin;
        this.isDiscardingStdin = false;
      }
      get indent() {
        return this._indent;
      }
      set indent(indent = 0) {
        if (!(indent >= 0 && Number.isInteger(indent))) {
          throw new Error("The `indent` option must be an integer from 0 and up");
        }
        this._indent = indent;
      }
      _updateInterval(interval) {
        if (interval !== void 0) {
          this.interval = interval;
        }
      }
      get spinner() {
        return this._spinner;
      }
      set spinner(spinner) {
        this.frameIndex = 0;
        if (typeof spinner === "object") {
          if (spinner.frames === void 0) {
            throw new Error("The given spinner must have a `frames` property");
          }
          this._spinner = spinner;
        } else if (!isUnicodeSupported()) {
          this._spinner = cliSpinners.line;
        } else if (spinner === void 0) {
          this._spinner = cliSpinners.dots;
        } else if (spinner !== "default" && cliSpinners[spinner]) {
          this._spinner = cliSpinners[spinner];
        } else {
          throw new Error(`There is no built-in spinner named '${spinner}'. See https://github.com/sindresorhus/cli-spinners/blob/main/spinners.json for a full list.`);
        }
        this._updateInterval(this._spinner.interval);
      }
      get text() {
        return this[TEXT];
      }
      set text(value) {
        this[TEXT] = value;
        this.updateLineCount();
      }
      get prefixText() {
        return this[PREFIX_TEXT];
      }
      set prefixText(value) {
        this[PREFIX_TEXT] = value;
        this.updateLineCount();
      }
      get isSpinning() {
        return this.id !== void 0;
      }
      getFullPrefixText(prefixText = this[PREFIX_TEXT], postfix = " ") {
        if (typeof prefixText === "string") {
          return prefixText + postfix;
        }
        if (typeof prefixText === "function") {
          return prefixText() + postfix;
        }
        return "";
      }
      updateLineCount() {
        const columns = this.stream.columns || 80;
        const fullPrefixText = this.getFullPrefixText(this.prefixText, "-");
        this.lineCount = 0;
        for (const line of stripAnsi(fullPrefixText + "--" + this[TEXT]).split("\n")) {
          this.lineCount += Math.max(1, Math.ceil(wcwidth(line) / columns));
        }
      }
      get isEnabled() {
        return this._isEnabled && !this.isSilent;
      }
      set isEnabled(value) {
        if (typeof value !== "boolean") {
          throw new TypeError("The `isEnabled` option must be a boolean");
        }
        this._isEnabled = value;
      }
      get isSilent() {
        return this._isSilent;
      }
      set isSilent(value) {
        if (typeof value !== "boolean") {
          throw new TypeError("The `isSilent` option must be a boolean");
        }
        this._isSilent = value;
      }
      frame() {
        const { frames } = this.spinner;
        let frame = frames[this.frameIndex];
        if (this.color) {
          frame = chalk[this.color](frame);
        }
        this.frameIndex = ++this.frameIndex % frames.length;
        const fullPrefixText = typeof this.prefixText === "string" && this.prefixText !== "" ? this.prefixText + " " : "";
        const fullText = typeof this.text === "string" ? " " + this.text : "";
        return fullPrefixText + frame + fullText;
      }
      clear() {
        if (!this.isEnabled || !this.stream.isTTY) {
          return this;
        }
        for (let i = 0; i < this.linesToClear; i++) {
          if (i > 0) {
            this.stream.moveCursor(0, -1);
          }
          this.stream.clearLine();
          this.stream.cursorTo(this.indent);
        }
        this.linesToClear = 0;
        return this;
      }
      render() {
        if (this.isSilent) {
          return this;
        }
        this.clear();
        this.stream.write(this.frame());
        this.linesToClear = this.lineCount;
        return this;
      }
      start(text) {
        if (text) {
          this.text = text;
        }
        if (this.isSilent) {
          return this;
        }
        if (!this.isEnabled) {
          if (this.text) {
            this.stream.write(`- ${this.text}
`);
          }
          return this;
        }
        if (this.isSpinning) {
          return this;
        }
        if (this.hideCursor) {
          cliCursor.hide(this.stream);
        }
        if (this.discardStdin && process.stdin.isTTY) {
          this.isDiscardingStdin = true;
          stdinDiscarder.start();
        }
        this.render();
        this.id = setInterval(this.render.bind(this), this.interval);
        return this;
      }
      stop() {
        if (!this.isEnabled) {
          return this;
        }
        clearInterval(this.id);
        this.id = void 0;
        this.frameIndex = 0;
        this.clear();
        if (this.hideCursor) {
          cliCursor.show(this.stream);
        }
        if (this.discardStdin && process.stdin.isTTY && this.isDiscardingStdin) {
          stdinDiscarder.stop();
          this.isDiscardingStdin = false;
        }
        return this;
      }
      succeed(text) {
        return this.stopAndPersist({
          symbol: logSymbols.success,
          text
        });
      }
      fail(text) {
        return this.stopAndPersist({
          symbol: logSymbols.error,
          text
        });
      }
      warn(text) {
        return this.stopAndPersist({
          symbol: logSymbols.warning,
          text
        });
      }
      info(text) {
        return this.stopAndPersist({
          symbol: logSymbols.info,
          text
        });
      }
      stopAndPersist(options = {}) {
        if (this.isSilent) {
          return this;
        }
        const prefixText = options.prefixText || this.prefixText;
        const text = options.text || this.text;
        const fullText = typeof text === "string" ? " " + text : "";
        this.stop();
        this.stream.write(`${this.getFullPrefixText(prefixText, " ")}${options.symbol || " "}${fullText}
`);
        return this;
      }
    }, __name(_a2, "Ora"), _a2);
    var oraFactory = /* @__PURE__ */ __name(function(options) {
      return new Ora(options);
    }, "oraFactory");
    module.exports = oraFactory;
    module.exports.promise = (action, options) => {
      if (typeof action.then !== "function") {
        throw new TypeError("Parameter `action` must be a Promise");
      }
      const spinner = new Ora(options);
      spinner.start();
      (() => __async(null, null, function* () {
        try {
          yield action;
          spinner.succeed();
        } catch (e) {
          spinner.fail();
        }
      }))();
      return spinner;
    };
  }
});

// src/index.ts
var import_regenerator_runtime = __toESM(require_runtime());
import * as path3 from "path";

// node_modules/commander/esm.mjs
var import_index = __toESM(require_commander(), 1);
var {
  program,
  createCommand,
  createArgument,
  createOption,
  CommanderError,
  InvalidArgumentError,
  InvalidOptionArgumentError,
  // deprecated old name
  Command,
  Argument,
  Option,
  Help
} = import_index.default;

// src/index.ts
var import_chokidar = __toESM(require_chokidar());
var import_lodash = __toESM(require_lodash());

// src/utils/init-cli.ts
var import_cli_check_node = __toESM(require_cli_check_node());
var import_cli_welcome = __toESM(require_cli_welcome());
var import_update_notifier = __toESM(require_update_notifier());
var import_cli_handle_unhandled = __toESM(require_cli_handle_unhandled());

// package.json
var package_default = {
  name: "@valerya/cli",
  version: "1.0.18",
  description: "A CLI to create component typings for Valerya UI",
  bin: {
    "soperio-cli": "bin/index.mjs"
  },
  publishConfig: {
    access: "public"
  },
  sideEffects: false,
  main: "dist/index.js",
  files: [
    "dist",
    "bin"
  ],
  scripts: {
    build: "unbuild",
    devValeryia: "node bin/index.mjs typings ./src/test/theme.ts",
    devValeryia2: "node bin/index.mjs",
    devValeryaOut: "clear & node bin/index.mjs typings ./src/test/theme.ts  --out ./src/test"
  },
  dependencies: {
    "@swc/core": "^1.2.177",
    chokidar: "^3.5.3",
    "cli-check-node": "^1.3.4",
    "cli-handle-unhandled": "^1.1.1",
    "cli-welcome": "^2.2.2",
    commander: "^9.3.0",
    "lodash.throttle": "^4.1.1",
    "module-alias": "^2.2.2",
    ora: "^5.3.0",
    prettier: "^2.7.1",
    "regenerator-runtime": "^0.13.7",
    "ts-node": "^10.7.0",
    "tsconfig-paths": "^4.0.0",
    "update-notifier": "^5.0.1"
  },
  devDependencies: {
    "@types/lodash.throttle": "^4.1.7",
    "@types/module-alias": "^2.0.1",
    "@types/ora": "^3.2.0",
    "@types/update-notifier": "5.0.0",
    tsup: "^8.5.0"
  }
};

// src/utils/init-cli.ts
function initCLI() {
  return __async(this, null, function* () {
    (0, import_cli_check_node.default)(`12`);
    yield (0, import_cli_handle_unhandled.default)();
    (0, import_cli_welcome.default)({
      title: "Valerya UI CLI",
      tagLine: `by Compill
A CLI to generate typings for components and surfaces`,
      // tagLine: `by Compill\n${pkgJSON.description}`,
      bgColor: `#319795`,
      color: `#FFFFFF`,
      bold: true,
      clear: false,
      version: package_default.version
    });
    (0, import_update_notifier.default)({
      pkg: package_default,
      shouldNotifyInNpmScript: true,
      updateCheckInterval: 1e3 * 60 * 60 * 24 * 3
    }).notify({
      isGlobal: true
    });
  });
}
__name(initCLI, "initCLI");

// src/command/tokens/index.ts
var import_ora = __toESM(require_ora());
import { promisify as promisify2 } from "util";
import { writeFile } from "fs";
import { fork } from "child_process";
import path2 from "path";

// src/command/tokens/resolve-output-path.ts
import fs from "fs";
import path from "path";
import { promisify } from "util";
var exists = promisify(fs.exists);
var themeInterfaceDestination = [
  "node_modules",
  "@valerya",
  "core",
  "lib"
];
function resolveThemingDefinitionPath(file) {
  return __async(this, null, function* () {
    const dest = themeInterfaceDestination.concat(file);
    const baseDir = path.join("..", "..", "..");
    const cwd = process.cwd();
    const pathsToTry = [
      path.resolve(baseDir, "..", ...dest),
      path.resolve(baseDir, "..", "..", ...dest),
      path.resolve(cwd, ...dest),
      path.resolve(cwd, "..", ...dest),
      path.resolve(cwd, "..", "..", ...dest)
    ];
    const triedPaths = yield Promise.all(pathsToTry.map((possiblePath) => __async(null, null, function* () {
      if (yield exists(possiblePath)) {
        return possiblePath;
      }
      return "";
    })));
    return triedPaths.find(Boolean);
  });
}
__name(resolveThemingDefinitionPath, "resolveThemingDefinitionPath");
function resolveOutputPath(defaultFile, overridePath) {
  return __async(this, null, function* () {
    if (overridePath) {
      return path.resolve(process.cwd(), overridePath, defaultFile);
    }
    const themingDefinitionFilePath = yield resolveThemingDefinitionPath(defaultFile);
    if (!themingDefinitionFilePath) {
      throw new Error("Could not find @valerya/core in node_modules. Please provide `--out` parameter.");
    }
    return themingDefinitionFilePath;
  });
}
__name(resolveOutputPath, "resolveOutputPath");

// src/command/tokens/index.ts
var writeFileAsync = promisify2(writeFile);
function runTemplateWorker(_0) {
  return __async(this, arguments, function* ({ themeFile, strictComponentTypes, format }) {
    const worker = fork(path2.join(__dirname, "..", "..", "scripts", "read-theme-file.worker.js"), [
      themeFile
    ].concat(strictComponentTypes ? "--strict-component-types" : []).concat(format ? "--format" : []), {
      stdio: [
        "pipe",
        "pipe",
        "pipe",
        "ipc"
      ],
      cwd: process.cwd()
    });
    return new Promise((resolve, reject) => {
      var _a, _b;
      worker.on("message", (message) => {
        const errMessage = message == null ? void 0 : message.err;
        console.log(errMessage);
        if (errMessage) {
          reject(new Error(errMessage));
        }
        return resolve(message);
      });
      worker.on("error", (error) => {
        console.log("error", error);
        reject(error);
      });
      (_a = worker.stdout) == null ? void 0 : _a.on("data", (data) => {
        console.log(`child stdout:
${data}`);
      });
      (_b = worker.stderr) == null ? void 0 : _b.on("data", (data) => {
        console.error(`child stderr:
${data}`);
      });
    });
  });
}
__name(runTemplateWorker, "runTemplateWorker");
function generateThemeTypings(_0) {
  return __async(this, arguments, function* ({ themeFile, out, strictComponentTypes, format, onError }) {
    const spinner = (0, import_ora.default)("Generating valerya typings").start();
    try {
      const { components: componentTypings, surfaces: surfaceTypings } = yield runTemplateWorker({
        themeFile,
        strictComponentTypes,
        format
      });
      spinner.info();
      if (componentTypings) {
        const outPath = yield resolveOutputPath("Components.d.ts", out);
        spinner.text = `Write file "${outPath}"...`;
        yield writeFileAsync(outPath, componentTypings, "utf8");
      } else {
        spinner.text = "No components in theme, skipping.";
      }
      if (surfaceTypings) {
        const outPath = yield resolveOutputPath("ValeryaThemeTypings.d.ts", out);
        spinner.text = `Write file "${outPath}"...`;
        yield writeFileAsync(outPath, surfaceTypings, "utf8");
      } else {
        spinner.text = "No surfaces in theme, skipping.";
      }
      spinner.succeed("Done");
    } catch (e) {
      spinner.fail("An error occurred");
      if (e instanceof Error) {
        console.error(e.message);
      }
      spinner.stop();
      onError == null ? void 0 : onError();
    } finally {
      spinner.stop();
    }
  });
}
__name(generateThemeTypings, "generateThemeTypings");

// src/index.ts
function run() {
  return __async(this, null, function* () {
    yield initCLI();
    program.command("typings <source>").option("--out <path>", `output dir e.g. ${path3.join(...themeInterfaceDestination)}`).option("--no-format", "Disable auto formatting").option("--watch [path]", "Watch directory for changes and rebuild").action((themeFile, options) => __async(null, null, function* () {
      const { out, format, watch } = options;
      if (watch) {
        const watchPath = typeof watch === "string" ? watch : path3.dirname(themeFile);
        const throttledGenerateThemeTypings = (0, import_lodash.default)(() => __async(null, null, function* () {
          console.time("Duration");
          yield generateThemeTypings({
            themeFile,
            out,
            format
          });
          console.timeEnd("Duration");
          console.info((/* @__PURE__ */ new Date()).toLocaleString());
        }), 1e3);
        throttledGenerateThemeTypings();
        import_chokidar.default.watch(watchPath).on("change", throttledGenerateThemeTypings);
        return;
      }
      yield generateThemeTypings({
        themeFile,
        out,
        format,
        onError: /* @__PURE__ */ __name(() => process.exit(1), "onError")
      });
    }));
    program.on("--help", () => {
      console.info(`Example call:
  $ valerya-cli components theme.ts
`);
    });
    program.parse();
  });
}
__name(run, "run");
export {
  run
};
/*! Bundled license information:

normalize-path/index.js:
  (*!
   * normalize-path <https://github.com/jonschlinkert/normalize-path>
   *
   * Copyright (c) 2014-2018, Jon Schlinkert.
   * Released under the MIT License.
   *)

is-extglob/index.js:
  (*!
   * is-extglob <https://github.com/jonschlinkert/is-extglob>
   *
   * Copyright (c) 2014-2016, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

is-glob/index.js:
  (*!
   * is-glob <https://github.com/jonschlinkert/is-glob>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

is-number/index.js:
  (*!
   * is-number <https://github.com/jonschlinkert/is-number>
   *
   * Copyright (c) 2014-present, Jon Schlinkert.
   * Released under the MIT License.
   *)

to-regex-range/index.js:
  (*!
   * to-regex-range <https://github.com/micromatch/to-regex-range>
   *
   * Copyright (c) 2015-present, Jon Schlinkert.
   * Released under the MIT License.
   *)

fill-range/index.js:
  (*!
   * fill-range <https://github.com/jonschlinkert/fill-range>
   *
   * Copyright (c) 2014-present, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
