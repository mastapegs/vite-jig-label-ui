use wasm_bindgen::prelude::*;

mod jig_ui;
use jig_ui::JigUI;

#[wasm_bindgen(start)]
pub fn main_js() -> Result<(), JsValue> {
    #[cfg(debug_assertions)]
    console_error_panic_hook::set_once();

    dominator::append_dom(&dominator::body(), JigUI::render());

    Ok(())
}
