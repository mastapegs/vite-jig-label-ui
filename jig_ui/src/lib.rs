use dominator::{html, Dom};
use wasm_bindgen::prelude::*;

struct JigData {
    jig_name: String,
    author: String,
    author_badge: String,
    date: String,
    language: String,
    curators: Vec<String>,
}

struct App {}

impl App {
    fn render_jig_span(slot: &str, text: &str) -> Dom {
        html!("span", {
            .attribute("slot", slot)
            .text(text)
        })
    }
    fn render() -> Dom {
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
        html!("jig-label-ui", {
            .children(jigs.iter().map(|jig: &JigData| {
                html!("single-jig", {
                    .children(&mut [
                        Self::render_jig_span("jig-name", &jig.jig_name),
                        Self::render_jig_span("author", &jig.author),
                        Self::render_jig_span("author-badge", &jig.author_badge),
                        Self::render_jig_span("date", &jig.date),
                        Self::render_jig_span("language", &jig.language),
                        Self::render_jig_span("curators", &jig.curators.join(", ")),
                    ])
                })
            }))
        })
    }
}

#[wasm_bindgen(start)]
pub fn main_js() -> Result<(), JsValue> {
    #[cfg(debug_assertions)]
    console_error_panic_hook::set_once();

    dominator::append_dom(&dominator::body(), App::render());

    Ok(())
}
