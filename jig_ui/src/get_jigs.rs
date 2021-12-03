use crate::JigData;

pub fn get_jigs() -> Vec<JigData> {
    vec![
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
    ]
}
