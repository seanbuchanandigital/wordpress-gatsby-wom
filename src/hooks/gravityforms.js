import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import GravityFormForm from "gatsby-gravityforms-component"

const ExamplePage = () => {
    const { allGfForm } = useStaticQuery(
        graphql`
      query {
        allGfForm {
          edges {
            node {
              formId
              slug
              apiURL
              descriptionPlacement
              formFields {
                id
                label
                description
                descriptionPlacement
                type
                choices
                content
                errorMessage
                inputMaskValue
                isRequired
                visibility
                cssClass
                placeholder
                size
                defaultValue
                maxLength
              }
              button {
                text
              }
              confirmations {
                message
              }
            }
          }
        }
      }
    `
    )

    return (
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <GravityFormForm
                id={2}
                formData={allGfForm}
                presetValues={{ input_1: "special_value" }}
                lambda={"http://localhost:9000/sendGfFormData"}
            />
        </div>
    )
}

export default ExamplePage