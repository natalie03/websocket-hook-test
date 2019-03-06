export default {
  message_type: "event",
  event_type: "content_structure",
  data: {
    install_name: "Very Nice Installation",
    client_name: "Company TM",
    pages: [
      {
        has_form: false,
        title: "Welcome to the very nice installation",
        content: "To get started, click the button below",
        button_text: "Get Started!"
      },
      {
        has_form: false,
        title: "Our Story",
        content: "This is the story of our company",
        button_text: "Keep on going"
      },
      {
        has_form: true,
        title: "The End",
        content: "That was great"
      }
    ]
  }
}