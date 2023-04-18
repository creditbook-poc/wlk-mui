export interface KycDto {
  _id: string;
  user_id: string;
  firestore_id: string;
  full_name: string;
  mobile_no: string;
  credit_limit: number;
  is_locked: boolean;
  is_active: boolean;
  bank: { account_number: string; account_name: string; name: string };
  business: {
    location_address: string;
    image: string;
    type: string;
    location_coordinates: number[];
  };
  city: string;
  cnic: { number: string; back: string; front: string; expiry: string };
  date_of_birth: string;
  education: string;
  have_bank_account: boolean;
  home: { address: string; type: string };
  household_members: number;
  selfie: string;
  utility_bill_picture: string;
  wallet: { account_number: string; account_name: string; name: string };
  created_at: string;
  updated_at: string;
  __v: number;
}
