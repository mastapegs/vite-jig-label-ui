use dominator::{html, Dom};
use crate::JigData;

pub struct JigUI {}

impl JigUI {
    fn render_jig_span(slot: &str, text: &str) -> Dom {
        html!("span", {
            .attribute("slot", slot)
            .text(text)
        })
    }
    pub fn render(jigs: Vec<JigData>) -> Dom {
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
