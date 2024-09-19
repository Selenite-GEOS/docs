import { MarkdownPageEvent } from 'typedoc-plugin-markdown'

/** @param {import('typedoc-plugin-markdown').MarkdownApplication} app */
export function load(app) {
    const re = RegExp(/([^\/]+?)(?:.svelte)?$/)
    app.renderer.on(
        MarkdownPageEvent.BEGIN,
        /** @param {MarkdownPageEvent} page */
        (page) => {
            // Customize the frontmatter for a specific page.
            const match = re.exec(page.model.name)
            if (!match) 
                {
                    console.warn('unsupported name', page.model.name)
                    return;
                }
                page.model.name = match[1]
                // console.log(page.model.name, page.model.url)
            },
        
    )
}