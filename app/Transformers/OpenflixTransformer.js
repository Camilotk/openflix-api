'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')
const Env = use('Env')

class OpenflixTransformer extends BumblebeeTransformer {

    constructor() {
        super()
        this.methods = ['show', 'update', 'delete']
        this._links = []
    }

    addLink(link) {
        if(link) {
            this._links.push(link)
        }

        return this
    }

    mountLinksWith(resource, id, add_links = []) {
        if(this.methods.includes('show')) {
            this._links.push({
                "rel": "show",
                "href": `${Env.get('APP_URL')}/${resource}/${id}`,
                "metod": "GET"
            })
        }

        if(this.methods.includes('update')) {
            this._links.push({
                "rel": "update",
                "href": `${Env.get('APP_URL')}/${resource}/${id}`,
                "metod": "PUT"
            });
        }

        if(this.methods.includes('delete')) {
            this._links.push({
                "rel": "delete",
                "href": `${Env.get('APP_URL')}/${resource}/${id}`,
                "metod": "DELETE"
            });
        }

        return this
    }

    getHateoas() {
        return this._links
    }
}

module.exports = OpenflixTransformer