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
 * This class represents details for switch protection job.
 *
 * @extends models['JobDetails']
 */
class SwitchProtectionJobDetails extends models['JobDetails'] {
  /**
   * Create a SwitchProtectionJobDetails.
   * @member {string} [newReplicationProtectedItemId] ARM Id of the new
   * replication protected item.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SwitchProtectionJobDetails
   *
   * @returns {object} metadata of SwitchProtectionJobDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SwitchProtectionJobDetails',
      type: {
        name: 'Composite',
        className: 'SwitchProtectionJobDetails',
        modelProperties: {
          affectedObjectDetails: {
            required: false,
            serializedName: 'affectedObjectDetails',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          instanceType: {
            required: true,
            serializedName: 'instanceType',
            type: {
              name: 'String'
            }
          },
          newReplicationProtectedItemId: {
            required: false,
            serializedName: 'newReplicationProtectedItemId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SwitchProtectionJobDetails;
