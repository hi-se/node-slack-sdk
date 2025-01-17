/* eslint-disable */
/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// !!! DO NOT EDIT THIS FILE !!!                                                       //
//                                                                                     //
// This file is auto-generated by scripts/generate-web-api-types.sh in the repository. //
// Please refer to the script code to learn how to update the source data.             //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////

import { WebAPICallResult } from '../WebClient';
export type AdminInviteRequestsApprovedListResponse = WebAPICallResult & {
  approved_requests?: ApprovedRequest[];
  error?:             string;
  needed?:            string;
  ok?:                boolean;
  provided?:          string;
};

export interface ApprovedRequest {
  approved_by?:    ApprovedBy;
  invite?:         Invite;
  invite_request?: InviteRequest;
}

export interface ApprovedBy {
  actor_id?:   string;
  actor_type?: string;
}

export interface Invite {
  date_created?:       number;
  email?:              string;
  id?:                 string;
  invite_preferences?: InvitePreferences;
  inviter_id?:         string;
  is_bouncing?:        boolean;
}

export interface InvitePreferences {
  channel_ids?:         string[];
  is_domain_matched?:   boolean;
  is_restricted?:       boolean;
  is_ultra_restricted?: boolean;
}

export interface InviteRequest {
  channel_ids?:   string[];
  date_created?:  number;
  email?:         string;
  id?:            string;
  invite_type?:   string;
  requester_ids?: string[];
}
