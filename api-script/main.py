#!/usr/bin/env python3
import json

import requests

# VRMS = ['HK11LYG',
#         'NJ65BKF',
#         'ST65YFZ',
#         'YB70JZF',
#         'KW07DSO',
#         'LK12DXF',
#         'SP71ZPH',
#         'SF69OLB',
#         'VX68YPL',
#         'SY69UMG',
#         'DK13WYJ',
#         'KN66OJU',
#         'SB12UZE',
#         'CA68MZE',
#         'DK68HSY',
#         'SR17DWW',
#         'SD16CDH',
#         'PE14VGV',
#         'MV02ULK',
#         'WO10EKN',
#         'RX14XNF',
#         'PX08BCE',
#         'NL13VLT',
#         'OFU349S',
#         'NG16BYP',
#         'HF21CBX',
#         'MF67BZE',
#         'WU17AXZ',
#         'LJ11EDV',
#         'WSV215',
#         'VO67FZD',
#         'KS08HYH',
#         'P506MLW',
#         'NA20EJN',
#         'YS04KPE',
#         'AX17SYU',
#         'LJ17BKO',
#         'SL09NGV',
#         'BK52UAY',
#         'KWE904J',
#         'DE68KNW',
#         'YA16HND',
#         'OY70YXR',
#         'DX59TPO',
#         'LJ51FWK',
#         'ARF834T',
#         'DL17HKN',
#         'SL61TWY',
#         'NL16UNG',
#         'YK58WMP',
#         'YY14UKD',
#         'FE05ZDA',
#         'NJ57WCT',
#         'UUI5211',
#         ]

VRMS = ['GY70OOC',
         'KR70FHD',
         'NJ71HMY',
         'MV16YEF',
         'SB14CNO',
         'BG56WUL',
         'OY58MXM',
         'RX58CYG',
         'MH21OKW',
         'ME19YTP',
         'DN18KJK',
]

def get_vehicle_data(vrm):
    vehicle_enquiry_url = 'https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles'
    vehicle_enquiry_headers = {
        'x-api-key': '',
    }

    vehicle_response = requests.post(url=vehicle_enquiry_url, headers=vehicle_enquiry_headers,
                                     json={"registrationNumber": vrm})
    vehicle_data = vehicle_response.json()

    return {
        "fuelType": str(vehicle_data.get("fuelType")).title(),
        "co2Emissions": str(vehicle_data.get("co2Emissions")),
        "cylinderCapacity": str(vehicle_data.get("engineCapacity")),
        "yearOfManufacture": str(vehicle_data.get("yearOfManufacture"))
    }


def get_mot_data(vrm):
    mot_url = 'https://api.dvsadigital.net/mot?registration=' + vrm
    mot_headers = {
        'x-api-key': '',
    }

    vehicle_response = requests.get(url=mot_url, headers=mot_headers)
    vehicle_data = vehicle_response.json()

    mot_fails = 0
    if 'motTests' in vehicle_data[0]:
        for test in vehicle_data[0]['motTests']:
            if test["testResult"] == "FAILED":
                mot_fails += 1

    return {
        "name": (vehicle_data[0]["make"] + " " + vehicle_data[0]["model"].split(" ")[0]).title(),
        "motFails": str(mot_fails)
    }


def get_vrm_data(vrm):
    return_data = []
    for reg in vrm:
        return_data.append({**get_vehicle_data(reg), **get_mot_data(reg)})
    return {
        "allVehicleDetails": return_data
    }


print(get_vrm_data(VRMS))

# with open('data.json', 'w', encoding='utf-8') as f:
#     json.dump(get_vrm_data(VRMS), f, ensure_ascii=False, indent=4)

#print(json.dumps(get_vrm_data(['PE14VGV']), indent=4))
