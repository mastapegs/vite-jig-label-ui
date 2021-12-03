use wasm_bindgen::prelude::*;

mod types;
use types::JigData;

mod jig_ui;
use jig_ui::JigUI;

#[wasm_bindgen(start)]
pub fn main_js() -> Result<(), JsValue> {
    #[cfg(debug_assertions)]
    console_error_panic_hook::set_once();

    let jigs: Vec<JigData> = vec![
        JigData {
            jig_name: String::from("Hebrew Letters"),
            author: String::from("Michael Wikes"),
            author_badge: String::from("JI Team"),
            date: String::from("Aug. 5, 2020"),
            language: String::from("English (American)"),
            curators: vec![String::from("Anat (13.7.21)")],
        },
        JigData {
            jig_name: String::from("Hebrew Letters"),
            author: String::from("Michael Wikes"),
            author_badge: String::from("JI Team"),
            date: String::from("Aug. 5, 2020"),
            language: String::from("English (American)"),
            curators: vec![String::from("Anat (13.7.21)")],
        },
    ];

    dominator::append_dom(&dominator::body(), JigUI::render(jigs));

    Ok(())
}
