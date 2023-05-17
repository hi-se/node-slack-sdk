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
export type AdminConversationsSearchResponse = WebAPICallResult & {
  conversations?: Conversation[];
  error?:         string;
  needed?:        string;
  next_cursor?:   string;
  ok?:            boolean;
  provided?:      string;
};

export interface Conversation {
  canvas?:                        Canvas;
  channel_email_addresses?:       string[];
  channel_manager_count?:         number;
  connected_limited_team_ids?:    string[];
  connected_team_ids?:            string[];
  conversation_host_id?:          string;
  created?:                       number;
  creator_id?:                    string;
  external_user_count?:           number;
  id?:                            string;
  internal_team_ids?:             string[];
  internal_team_ids_count?:       number;
  internal_team_ids_sample_team?: string;
  is_archived?:                   boolean;
  is_disconnect_in_progress?:     boolean;
  is_ext_shared?:                 boolean;
  is_frozen?:                     boolean;
  is_general?:                    boolean;
  is_global_shared?:              boolean;
  is_org_default?:                boolean;
  is_org_mandatory?:              boolean;
  is_org_shared?:                 boolean;
  is_pending_ext_shared?:         boolean;
  is_private?:                    boolean;
  last_activity_ts?:              number;
  member_count?:                  number;
  name?:                          string;
  pending_connected_team_ids?:    string[];
  purpose?:                       string;
}

export interface Canvas {
  ownership_details?: OwnershipDetail[];
  total_count?:       number;
}

export interface OwnershipDetail {
  count?:   number;
  team_id?: string;
}
