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
                        html!("span", {
                            .attribute("slot", "jig-name")
                            .text(&jig.jig_name)
                        }),
                        html!("span", {
                            .attribute("slot", "author")
                            .text(&jig.author)
                        }),
                        html!("span", {
                            .attribute("slot", "author-badge")
                            .text(&jig.author_badge)
                        }),
                        html!("span", {
                            .attribute("slot", "date")
                            .text(&jig.date)
                        }),
                        html!("span", {
                            .attribute("slot", "language")
                            .text(&jig.language)
                        }),
                        html!("span", {
                            .attribute("slot", "curators")
                            .text(&jig.curators.join(", "))
                        }),
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
