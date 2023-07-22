# debounce
Simple debounce implementation in JavaScript

![debounce](https://github.com/Abhiroy17/debounce/assets/67745190/e9a4a84b-2411-4cbe-9541-a4195f09839f)
A call to debounce returns a wrapper. When called, it schedules the original function call after given ms and cancels the previous such timeout.
Then if the wrapped function is called at 0ms, 200ms and 500ms, and then there are no calls, then the actual f will be only called once, at 1500ms. That is: after the cooldown period of 1000ms from the last call.
live link : https://jptv44.csb.app/

