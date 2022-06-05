/*
============================================
; Title: Assignment 5.3
; File Name: header.js
; Author: Professor Krasso 
; Date: 3 February 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build and end-to-end functional
; prototype of my personal portfolio project.
; Resources:
; Blackboard: Code provided by Professor Krasso in WEB330 Assignment 5.3 Outline
===========================================
*/

class Nav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
              
    <!--- Desktop Nav --->

    <nav class="navbar" id="desktop-nav">

        <div class="logo-txt"><a href="../../portfolio/index.html" id="logo-link">Laura Kendl</a></div>

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

    <!--- Mobile Nav --->

   
    <div id="mobile-nav">

    <div class="logo-txt-nav"><a href="../../portfolio/index.html" id="logo-link">Laura Kendl</a></div>
        
    <!-- Navigation links (hidden by default) -->
    <div id="myLinks">
        
        <ul>
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

        <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links -->
    
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        
        <i class="fa fa-bars"></i>
        
        </a>

        </div>

    </div>
   
                  
        `;
    }
}

customElements.define("nav-component", Nav);

