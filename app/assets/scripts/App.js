import $ from 'jquery';
import Modal from './modules/modal'
import MobileMenu from './modules/mobileMenu.js';
import RevealOnScroll from './modules/revealOnScroll';
import StickyHeader from './modules/stickyHeader';
var modal = new Modal();

var mobileMenu = new MobileMenu();
var revealOnScroll = new RevealOnScroll($(".feature-item"),"85%");
var revealOnScroll = new RevealOnScroll($(".testimonial"),"65%");
var revealOnScroll = new RevealOnScroll($(".generic-content-container"),"65%");

var stickyHeader = new StickyHeader();
