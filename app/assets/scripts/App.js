import $ from 'jquery';
import MobileMenu from './modules/mobileMenu.js';
import RevealOnScroll from './modules/revealOnScroll';
var mobileMenu = new MobileMenu();
var revealOnScroll = new RevealOnScroll($(".feature-item"),"85%");
var revealOnScroll = new RevealOnScroll($(".testimonial"),"65%");
var revealOnScroll = new RevealOnScroll($(".generic-content-container"),"65%");
