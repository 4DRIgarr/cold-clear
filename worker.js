importScripts("./cc.js");
const { _web_worker_entry_point } = wasm_bindgen;
async function run() {
    await wasm_bindgen("./cc_bg.wasm");
    _web_worker_entry_point(self);
}
run();
