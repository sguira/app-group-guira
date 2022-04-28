import { Injectable, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
    providedIn: 'root'
})



@Injectable()
export class MenuService {



    constructor() {}

    ngOnInit(): void {
        $(document).ready(function() {
            $('#buttonup').hide()
            $('#buttonup').on("click", () => {
                $('html,body').animate({
                    scrollTop: 0
                }, 1000),
                $('#buttonup').hide(),
                $('#buttondown').show()
            });
            $('#buttondown').on("click", () => {
                $('html,body').animate({
                    scrollTop: $(document).height() - $(window).height()
                }, 1000),
                  $('#buttonup').show(),
                  $('#buttondown').hide()
            });
        })

    }
    scroll() {

    }
    test() {
        $(document).ready(() => {
            alert('ok');
        })
    }

    haut() {
        $(document).ready(function() {
            $('#buttonup').on("click", () => {
                $('html,body').animate({
                    scrollTop: 0
                }, 2000)
            });
            $('#buttondown').on("click", () => {
                $('html,body').animate({
                    scrollTop: $(document).height() - $(window).height()
                }, 2000)
            });
        })
    }

}
