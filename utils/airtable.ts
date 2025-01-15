import Airtable from 'airtable';

export class AirtableManager {
  public base: Airtable.Base;
  public tableName: string;

  constructor(tableName: string) {
    this.base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID!);
    this.tableName = tableName;
  }

  async getLatestRecord() {
    const records = await this.base(this.tableName).select({
      sort: [{ field: 'order', direction: 'desc' }],
      maxRecords: 1
    }).all();

    return records[0];
  }

  async getAllRecords() {
    const records = await this.base(this.tableName).select({
      sort: [{ field: 'order', direction: 'desc' }],
    }).all();

    return records;
  }
}

export class AirtableSpotightManager extends AirtableManager {
  constructor() {
    super('Spotlight Posts');
  }

  getLatestSpotlight() {
    return this.getLatestRecord();
  }
}