# Exercise 1: Handle Custom Attributes

The purpose of this exercise to update your component to allow for custom attributes.

Inside of your templates, you'll need to remove the values from the `src` and `alt` attributes of the `img` tag, as well as the text content of the `h3` and `p` tags.

You'll then need to update your custom element to handle the values passed down as attributes from the `<album-art>` tag. The API for your component should look like this:

- img-src: The source of the image to display
- alt: The alt text for the image
- artist-name: The name of the artist
- album-name: The name of the album

## Tips

### `connectedCallback()`

In the connectedCallback lifecycle method, you'll need to access the `img`, `h3`, and `p` element and set the values for all the required attributes.

Once this has been completed, the tests at the top of the page will pass and you can move on to exercise two.
