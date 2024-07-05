export interface IAddress {
  _id: string;
  contactName: string;
  phoneNumber: string;
  country: string;
  region?: string;
  city: string;
  subCity: string;
  woreda?: string;
  uniqueIdentifier?: string;
  streetAddress?: string;
  postalCode?: string;
  asDefault: boolean;
}

export class GetAddress {
  private _id: string;
  private contactName: string;
  private phoneNumber: string;
  private country: string;
  private region?: string;
  private city: string;
  private subCity: string;
  private woreda?: string;
  private uniqueIdentifier?: string;
  private streetAddress?: string;
  private postalCode?: string;
  private asDefault: boolean;

  constructor(address: IAddress) {
    this._id = address._id;
    this.contactName = address.contactName;
    this.phoneNumber = address.phoneNumber;
    this.country = address.country;
    this.region = address.region;
    this.city = address.city;
    this.subCity = address.subCity;
    this.woreda = address.woreda;
    this.uniqueIdentifier = address.uniqueIdentifier;
    this.streetAddress = address.streetAddress;
    this.postalCode = address.postalCode;
    this.asDefault = address.asDefault;
  }

  getAddress() {
    return {
      _id: this._id,
      contactName: this.contactName,
      phoneNumber: this.phoneNumber,
      country: this.country,
      region: this.region,
      city: this.city,
      subCity: this.subCity,
      woreda: this.woreda,
      uniqueIdentifier: this.uniqueIdentifier,
      streetAddress: this.streetAddress,
      postalCode: this.postalCode,
      asDefault: this.asDefault,
    };
  }
}
