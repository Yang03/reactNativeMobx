import {observable, action} from 'mobx'
import Fetch from 'fetch.io'

export default class RedditStore {
    @observable reddites = []
    @observable loading = true

    @action getReddites() {
         fetch('http://www.reddit.com/r/mobx.json').then(response => response.json()
        ).then(data => {
            this.reddites = data.data.children
            this.loading = false
            console.warn('success')
        }).catch((err) => {
            console.warn(err)
            this.loading = false
        })
    }

}