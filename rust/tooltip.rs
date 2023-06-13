use stdweb::web::{
    document,
    event::{MouseMoveEvent, IEventTarget},
    IHtmlElement,
};

fn main() {
    let submit_tooltip = document().query_selector(".tooltip").unwrap();
    let new_prompt_tooltip = document().query_selector(".tooltip2").unwrap();
    let prompt_of_the_day_tooltip = document().query_selector(".tooltip3").unwrap();
    let new_poem_tooltip = document().query_selector(".tooltip4").unwrap();
    let info_tooltip = document().query_selector(".tooltip5").unwrap();

    let submit_img = document().query_selector("#submitImg").unwrap();
    submit_img.add_event_listener(|event: MouseMoveEvent| {
        let x = event.client_x();
        let y = event.client_y();
        submit_tooltip.style().set_property("top", &(y - 45).to_string() + "px").unwrap();
        submit_tooltip.style().set_property("left", &(x - 50).to_string() + "px").unwrap();
    });

    let new_prompt = document().query_selector("#newPrompt").unwrap();
    new_prompt.add_event_listener(|event: MouseMoveEvent| {
        let x = event.client_x();
        let y = event.client_y();
        new_prompt_tooltip.style().set_property("top", &(y - 40).to_string() + "px").unwrap();
        new_prompt_tooltip.style().set_property("left", &(x - 40).to_string() + "px").unwrap();
    });

    let poem_of_the_day = document().query_selector("#poemOfTheDay").unwrap();
    poem_of_the_day.add_event_listener(|event: MouseMoveEvent| {
        let x = event.client_x();
        let y = event.client_y();
        prompt_of_the_day_tooltip.style().set_property("top", &(y - 40).to_string() + "px").unwrap();
        prompt_of_the_day_tooltip.style().set_property("left", &(x - 55).to_string() + "px").unwrap();
    });

    let new_poem = document().query_selector("#newPoem").unwrap();
    new_poem.add_event_listener(|event: MouseMoveEvent| {
        let x = event.client_x();
        let y = event.client_y();
        new_poem_tooltip.style().set_property("top", &(y - 40).to_string() + "px").unwrap();
        new_poem_tooltip.style().set_property("left", &(x - 30).to_string() + "px").unwrap();
    });

    let toggle_info_button = document().query_selector("#toggleInfoButton").unwrap();
    toggle_info_button.add_event_listener(|event: MouseMoveEvent| {
        let x = event.client_x();
        let y = event.client_y();
        info_tooltip.style().set_property("top", &(y - 30).to_string() + "px").unwrap();
        info_tooltip.style().set_property("left", &(x - 43).to_string() + "px").unwrap();
    });
}
