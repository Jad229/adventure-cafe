export default class SectionModel {
  constructor(sectionId, content) {
    this.sectionId = sectionId;
    this.content = content; // this could be anything - a string, an object with data for this section, etc.
  }
}
