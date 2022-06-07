/*
============================================
; Title: Assignment 5.3
; File Name: nav.js
; Author: Professor Krasso 
; Date: 3 February 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build and end-to-end functional
; prototype of my personal portfolio project.
; Resources:
; Blackboard: Code provided by Professor Krasso in WEB330 Assignment 5.3 Outline
; Codepen: https://codepen.io/bradtraversy/pen/vMGBjQ (Pure CSS Hamburger Menu & Overlay)
===========================================
*/

class Nav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
              
    <!-- Desktop Nav -->

    <nav class="navbar" id="desktop-nav">

        <div class="logo-txt"><a href="../../portfolio/index.html" class="logo-link">Laura Kendl</a></div>

        <div class="navbar-nav-wrapper">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="../../portfolio/index.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../../portfolio/about.html">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../../portfolio/projects.html">Projects</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../../portfolio/web-335/kendl-diagrams.html">Database Diagrams</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../../portfolio/api-unit-tests.html">API Unit Tests</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../../portfolio/devops-presentations.html">DevOps Presentations</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../../portfolio/resume.html">Resume</a>
            </li>
        </ul>
        </div>

    </nav>

    <!-- Mobile Nav -->

    <div class="menu-wrap">
        <div class="logo-txt-nav"><a href="../../portfolio/index.html" class="logo-link">Laura Kendl</a></div>
        <input type="checkbox" class="toggler">
        <div class="hamburger"><div></div></div>
        <div class="menu">
          <div>
            <div>            
            <ul>
                <li>
                    <a class="nav-link" href="../../portfolio/index.html">Home</a>
                </li>
                <li>
                    <a class="nav-link" href="../../portfolio/about.html">About</a>
                </li>
                <li>
                    <a class="nav-link" href="../../portfolio/projects.html">Projects</a>
                </li>
                <li>
                    <a class="nav-link" href="../../portfolio/web-335/kendl-diagrams.html">Database Diagrams</a>
                </li>
                <li>
                    <a class="nav-link" href="../../portfolio/api-unit-tests.html">API Unit Tests</a>
                </li>
                <li>
                    <a class="nav-link" href="../../portfolio/devops-presentations.html">DevOps Presentations</a>
                </li>
                <li>
                    <a class="nav-link" href="../../portfolio/resume.html">Resume</a>
                </li>
            </ul>
            
        </div>
    </div>
  </div>
</div>
                  
        `;
    }

}


customElements.define("nav-component", Nav);