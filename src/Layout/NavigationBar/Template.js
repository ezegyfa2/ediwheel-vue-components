export default {
    "type": "ediwheel-navigation-bar",
    "data": {
        "title": "eDI",
        "title_url": "/",
        "link_sections": [
            {
                "type": "ediwheel-navigation-link",
                "data": {
                    "url": "--routes.about-us",
                    "content": "--layout.navbar.about_us"
                }
            },
            {
                "type": "ediwheel-navigation-link",
                "data": {
                    "url": "--routes.contact-and-faq",
                    "content": "--layout.navbar.contact_and_faq"
                }
            },
            {
                "type": "ediwheel-dropdown-navigation-link",
                "data": {
                    "badge_content": "-++current_language",
                    "dropdown_section": {
                        "type": "ediwheel-list-dropdown",
                        "data": {
                            "dropdown_item_sections": {
                                "type": "ediwheel-link-dropdown-item",
                                "array_data": "languages",
                                "data": {
                                    "url": "++languages.url",
                                    "content": "++languages.name"
                                }
                            }
                        }
                    }
                }
            }
        ]
    }
}
