import { type } from "os";

export type Course = {
  course_name: string;
  university: string;
  difficulty_level: string;
  course_rating: string;
  course_url: string;
  course_description: string;
  skills: string;
};

export type Course2 = {
  url: string;
  price: string;
  course_by: string;
  title: string;
  skills: string;
  ratings: string;
  reviews: string;
  level_type_and_duration: string;
  level?: string;
  type?: string;
  duration?: string;
};

export type ConceptSchemes = {
  concept_type: string;
  concept_scheme_uri: string;
  title: string;
  preferred_label: string;
  status: string;
  description: string;
  has_top_concept: string;
};

export type SkillCollection = {
  concept_type: string;
  preferred_label: string;
  status: string;
  skill_type: string;
  reuse_level: string;
  alt_labels: string;
  description: string;
  broader_concept_uri: string;
  broader_concept_pt: string;
};

export type ResearchOccupation = {
  concept_type: string;
  concept_uri: string;
  preferred_label: string;
  status: String;
  alt_labels: string;
  description: string;
  broader_concept_uri: string;
  broader_concept_pt: string;
};

export type DigitalSkillCollection = {
  concept_type: string;
  concept_uri: string;
  preferred_label: string;
  status: string;
  skill_type: string;
  reuse_level: string;
  alt_labels: string;
  description: string;
  broader_concept_uri: string;
  broader_concept_pt: string;
};

export type IscoGroup = {
  concept_type: string;
  concept_uri: string;
  code: string;
  preferred_label: string;
  status: string;
  alt_labels: string;
  description: string;
  in_scheme: string;
};

export type SkillGroup = {
  concept_type: string;
  concept_uri: string;
  code: string;
  hidden_labels: string;
  preferred_label: string;
  status: string;
  alt_labels: string;
  in_scheme: string;
  modified_date: string;
  scope_note: string;
  description: string;
};

export type Occupation = {
  concept_type: string;
  concept_uri: string;
  isco_group: string;
  preferred_label: string;
  hidden_labels: string;
  modified_date: string;
  regulated_profession_note: string;
  scope_note: string;
  definition: string;
  in_scheme: string;
  alt_labels: string;
  description: string;
  status: string;
  code: string;
};

export type Skill = {
  concept_type: string;
  concept_uri: string;
  skill_type: string;
  preferred_label: string;
  hidden_labels: string;
  modified_date: string;
  scope_note: string;
  definition: string;
  in_scheme: string;
  alt_labels: string;
  description: string;
  status: string;
  reuse_level: string;
};

export type ResultType =
  | Course
  | Course2
  | ConceptSchemes
  | SkillCollection
  | DigitalSkillCollection
  | IscoGroup
  | Occupation
  | ResearchOccupation
  | SkillGroup
  | Skill;
