/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the ErrorEntity class.
 * @constructor
 * Body of the error response returned from the API.
 *
 * @member {string} [extendedCode] Type of error.
 *
 * @member {string} [messageTemplate] Message template.
 *
 * @member {array} [parameters] Parameters for the template.
 *
 * @member {array} [innerErrors] Inner errors.
 *
 * @member {string} [code] Basic error code.
 *
 * @member {string} [message] Any details of the error.
 *
 */
class ErrorEntity {
  constructor() {
  }

  /**
   * Defines the metadata of ErrorEntity
   *
   * @returns {object} metadata of ErrorEntity
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ErrorEntity',
      type: {
        name: 'Composite',
        className: 'ErrorEntity',
        modelProperties: {
          extendedCode: {
            required: false,
            serializedName: 'extendedCode',
            type: {
              name: 'String'
            }
          },
          messageTemplate: {
            required: false,
            serializedName: 'messageTemplate',
            type: {
              name: 'String'
            }
          },
          parameters: {
            required: false,
            serializedName: 'parameters',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          innerErrors: {
            required: false,
            serializedName: 'innerErrors',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ErrorEntityElementType',
                  type: {
                    name: 'Composite',
                    className: 'ErrorEntity'
                  }
              }
            }
          },
          code: {
            required: false,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorEntity;