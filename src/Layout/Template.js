export default {
    "type": "page",
    "data": {
        "success_message_sections": {
            "type": "ediwheel-session-message",
            "array_data": "success_messages",
            "data": {
                "content": "++success_messages"
            }
        },
        "error_message_sections": {
            "type": "ediwheel-session-message",
            "array_data": "error_messages",
            "data": {
                "content": "++error_messages"
            }
        },
        "info_message_sections": {
            "type": "ediwheel-session-message",
            "array_data": "info_messages",
            "data": {
                "content": "++info_messages"
            }
        },
        "navigation_bar_section": {
            "template_type_name": "ediwheel_navigation_bar"
        },
        "header_section": "++header_section",
        "content_sections": "++content_sections",
        "footer_section": {
            "template_type_name": "ediwheel_footer"
        }
    }
}
