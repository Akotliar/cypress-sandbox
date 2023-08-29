// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

export const VIEWPORT_SIZE  = {
	LARGE: "large",
	MEDIUM: "medium",
	SMALL: "small",
}


export function viewportSize(width){
    if(width >= 1920){
        return VIEWPORT_SIZE.LARGE
    }
    else if (width >= 750){
        return VIEWPORT_SIZE.MEDIUM
    }
    else{
        return VIEWPORT_SIZE.SMALL
    }
}