import Block from './scripts/Block.vue'
import Button from './scripts/Button.vue'
import Hamburger from './scripts/Hamburger.vue'
import Hero from './scripts/Hero.vue'
import List from './scripts/List.vue'
import ListItem from './scripts/ListItem.vue'
import Level from './scripts/Level.vue'
import Logo from './scripts/Logo.vue'
import Modal from './scripts/Modal.vue'
import ModalFooter from './scripts/ModalFooter.vue'
import ModalSidebar from './scripts/ModalSidebar.vue'
import ModalSidebarLink from './scripts/ModalSidebarLink.vue'
import OffCanvas from './scripts/OffCanvas.vue'
import OffCanvasMenu from './scripts/OffCanvasMenu.vue'
import OffCanvasMenuItem from './scripts/OffCanvasMenuItem.vue'

/** 
 * Vue Plugin
 */
const OSMAviation = {
    install: function (Vue, options) {
        Vue.component('block', Block);
        Vue.component('brand-button', Button);
        Vue.component('hamburger', Hamburger);
        Vue.component('hero', Hero);
        Vue.component('level', Level);
        Vue.component('logo', Logo);
        Vue.component('modal', Modal);
        Vue.component('list', List);
        Vue.component('list-item', ListItem);
        Vue.component('modal-footer', ModalFooter);
        Vue.component('modal-sidebar', ModalSidebar);
        Vue.component('modal-sidebar-link', ModalSidebarLink);
        Vue.component('off-canvas', OffCanvas);
        Vue.component('off-canvas-menu', OffCanvasMenu);
        Vue.component('off-canvas-menu-item', OffCanvasMenuItem);
    }
}

export {
    OSMAviation,
}