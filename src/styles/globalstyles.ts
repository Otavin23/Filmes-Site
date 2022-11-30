import { createGlobalStyle } from "styled-components"

export const CreateGlobalStyle = createGlobalStyle`
    
    *{
        padding: 0;
        margin: 0; 
        box-sizing: border-box;
        font-family: 'Mulish', sans-serif;
    }
    
    :root{
        --backgroundPrimary: #0F1016;
        --backgroundSecondary:#13151B;
        --backgroundInputs: #1c1c21;
        --colorPrimary: #292B31;
        --colorSecondary: #ffffff;
    }

    //flex

    .alignItemsCenter{
        display: flex;
        align-items: center;
    }

    .justifyContentCenter{
        display: flex;
        justify-content: center;
    }

    .justifyContentSpacebetween{
        display: flex;
        justify-content: space-between;
    }



`
