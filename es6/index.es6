import _ from 'lodash'
import $ from 'jquery'
import { TITLE } from 'i18n/I18nService'
import Vue from 'vue'
import './index.less'
import appHeader from 'components/AppHeader'

let arr = [1, 2, 3]
let result = _.fill(arr, 'a')
let template = `<div>
                    <H1 v-text="message"></H1>
                    <app-header></app-header>
                </div>`

let App = Vue.extend({
    template,
    data () {
        return {
            message : 'Hello, Yiifaa!'
        }
    },
    
    components : {
        appHeader
    }
})

export default App