const allVehiclesDetails = [
    {
      'fuelType': 'Diesel',
      'co2Emissions': '112',
      'cylinderCapacity': '1248',
      'yearOfManufacture': '2011',
      'name': 'Ford Ka',
      'motFails': '3'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': '122',
      'cylinderCapacity': '1242',
      'yearOfManufacture': '2015',
      'name': 'Ford Fiesta',
      'motFails': '0'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': '105',
      'cylinderCapacity': '998',
      'yearOfManufacture': '2016',
      'name': 'Kia Picanto',
      'motFails': '0'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': '117',
      'cylinderCapacity': '998',
      'yearOfManufacture': '2020',
      'name': 'Hyundai I20',
      'motFails': '0'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': '174',
      'cylinderCapacity': '1587',
      'yearOfManufacture': '2007',
      'name': 'Peugeot 307',
      'motFails': '5'
    },
    {
      'fuelType': 'Diesel',
      'co2Emissions': '0',
      'cylinderCapacity': '2198',
      'yearOfManufacture': '2012',
      'name': 'Ford Transit',
      'motFails': '0'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': '174',
      'cylinderCapacity': '1490',
      'yearOfManufacture': '2021',
      'name': 'Mg Hs',
      'motFails': '0'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': '179',
      'cylinderCapacity': '2261',
      'yearOfManufacture': '2020',
      'name': 'Ford Focus',
      'motFails': '0'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': '153',
      'cylinderCapacity': '1598',
      'yearOfManufacture': '2018',
      'name': 'Vauxhall Insignia',
      'motFails': '0'
    },
    {
      'fuelType': 'Diesel',
      'co2Emissions': '130',
      'cylinderCapacity': '2191',
      'yearOfManufacture': '2019',
      'name': 'Mazda Cx-5',
      'motFails': '0'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': '99',
      'cylinderCapacity': '998',
      'yearOfManufacture': '2013',
      'name': 'Peugeot 107',
      'motFails': '2'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': '118',
      'cylinderCapacity': '1398',
      'yearOfManufacture': '2016',
      'name': 'Vauxhall Corsa',
      'motFails': '1'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': '120',
      'cylinderCapacity': '1242',
      'yearOfManufacture': '2012',
      'name': 'Fiat Panda',
      'motFails': '0'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': '157',
      'cylinderCapacity': '1591',
      'yearOfManufacture': '2018',
      'name': 'Hyundai Tucson',
      'motFails': '0'
    },
    {
      'fuelType': 'Diesel',
      'co2Emissions': '127',
      'cylinderCapacity': '1969',
      'yearOfManufacture': '2018',
      'name': 'Volvo V90',
      'motFails': '0'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': '108',
      'cylinderCapacity': '998',
      'yearOfManufacture': '2017',
      'name': 'Hyundai I10',
      'motFails': '2'
    },
    {
      'fuelType': 'Diesel',
      'co2Emissions': '139',
      'cylinderCapacity': '1999',
      'yearOfManufacture': '2016',
      'name': 'Land Rover Discovery',
      'motFails': '0'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': '99',
      'cylinderCapacity': '998',
      'yearOfManufacture': '2014',
      'name': 'Citroen C1',
      'motFails': '0'
    },
    {
      'fuelType': 'Diesel',
      'co2Emissions': 'None',
      'cylinderCapacity': '12000',
      'yearOfManufacture': '2002',
      'name': 'Volvo B12M',
      'motFails': '0'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': '0',
      'cylinderCapacity': '649',
      'yearOfManufacture': '2010',
      'name': 'Kawasaki Ex',
      'motFails': '1'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': '0',
      'cylinderCapacity': '1198',
      'yearOfManufacture': '2014',
      'name': 'Ducati 1199',
      'motFails': '0'
    },
    {
      'fuelType': 'Diesel',
      'co2Emissions': '0',
      'cylinderCapacity': '11705',
      'yearOfManufacture': '2008',
      'name': 'Scania P380',
      'motFails': '0'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': '113',
      'cylinderCapacity': '1242',
      'yearOfManufacture': '2013',
      'name': 'Fiat 500',
      'motFails': '4'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': 'None',
      'cylinderCapacity': '998',
      'yearOfManufacture': '1977',
      'name': 'Leyland Cars Mini',
      'motFails': '4'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': '139',
      'cylinderCapacity': '1368',
      'yearOfManufacture': '2016',
      'name': 'Abarth 595',
      'motFails': '0'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': '0',
      'cylinderCapacity': '1000',
      'yearOfManufacture': '2021',
      'name': 'Moke Automibili',
      'motFails': '0'
    },
    {
      'fuelType': 'Diesel',
      'co2Emissions': '109',
      'cylinderCapacity': '2143',
      'yearOfManufacture': '2017',
      'name': 'Alfa Romeo Giulia',
      'motFails': '0'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': '265',
      'cylinderCapacity': '5204',
      'yearOfManufacture': '2017',
      'name': 'Aston Martin Db11',
      'motFails': '0'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': '330',
      'cylinderCapacity': '5204',
      'yearOfManufacture': '2011',
      'name': 'Lamborghini Gallardo',
      'motFails': '0'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': 'None',
      'cylinderCapacity': '4823',
      'yearOfManufacture': '1977',
      'name': 'Ferrari 400',
      'motFails': '1'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': '114',
      'cylinderCapacity': '1200',
      'yearOfManufacture': '2017',
      'name': 'Peugeot 2008',
      'motFails': '0'
    },
    {
      'fuelType': 'Diesel',
      'co2Emissions': '184',
      'cylinderCapacity': '1910',
      'yearOfManufacture': '2008',
      'name': 'Saab 9-3',
      'motFails': '1'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': 'None',
      'cylinderCapacity': '1985',
      'yearOfManufacture': '1997',
      'name': 'Saab 900',
      'motFails': '8'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': '139',
      'cylinderCapacity': '1499',
      'yearOfManufacture': '2020',
      'name': 'Bmw 218I',
      'motFails': '0'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': '216',
      'cylinderCapacity': '2494',
      'yearOfManufacture': '2004',
      'name': 'Bmw Z4',
      'motFails': '6'
    },
    {
      'fuelType': 'Diesel',
      'co2Emissions': '139',
      'cylinderCapacity': '1995',
      'yearOfManufacture': '2017',
      'name': 'Bmw X4',
      'motFails': '0'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': '249',
      'cylinderCapacity': '3799',
      'yearOfManufacture': '2017',
      'name': 'Mclaren 540',
      'motFails': '1'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': '145',
      'cylinderCapacity': '1396',
      'yearOfManufacture': '2009',
      'name': 'Kia Ceed',
      'motFails': '4'
    },
    {
      'fuelType': 'Diesel',
      'co2Emissions': '299',
      'cylinderCapacity': '2495',
      'yearOfManufacture': '2002',
      'name': 'Land Rover Defender',
      'motFails': '1'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': 'None',
      'cylinderCapacity': '6745',
      'yearOfManufacture': '1971',
      'name': 'Rolls Royce Silver',
      'motFails': '0'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': '105',
      'cylinderCapacity': '999',
      'yearOfManufacture': '2018',
      'name': 'Seat Ibiza',
      'motFails': '1'
    },
    {
      'fuelType': 'Diesel',
      'co2Emissions': '129',
      'cylinderCapacity': '1499',
      'yearOfManufacture': '2016',
      'name': 'Ford Tourneo',
      'motFails': '0'
    },
    {
      'fuelType': 'Electricity',
      'co2Emissions': '0',
      'cylinderCapacity': '0',
      'yearOfManufacture': '2020',
      'name': 'Polestar Polestar',
      'motFails': '0'
    },
    {
      'fuelType': 'Diesel',
      'co2Emissions': '158',
      'cylinderCapacity': '1991',
      'yearOfManufacture': '2009',
      'name': 'Mercedes B180',
      'motFails': '6'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': 'None',
      'cylinderCapacity': '3248',
      'yearOfManufacture': '2001',
      'name': 'Jaguar Xj',
      'motFails': '4'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': 'None',
      'cylinderCapacity': '6598',
      'yearOfManufacture': '1979',
      'name': 'Pontiac Firebird',
      'motFails': '0'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': '109',
      'cylinderCapacity': '1200',
      'yearOfManufacture': '2017',
      'name': 'Citroen C3',
      'motFails': '0'
    },
    {
      'fuelType': 'Diesel',
      'co2Emissions': '134',
      'cylinderCapacity': '1997',
      'yearOfManufacture': '2011',
      'name': 'Citroen Ds4',
      'motFails': '1'
    },
    {
      'fuelType': 'Diesel',
      'co2Emissions': '108',
      'cylinderCapacity': '1461',
      'yearOfManufacture': '2016',
      'name': 'Infiniti Q30',
      'motFails': '0'
    },
    {
      'fuelType': 'Diesel',
      'co2Emissions': '0',
      'cylinderCapacity': '1995',
      'yearOfManufacture': '2008',
      'name': 'Renault Trafic',
      'motFails': '8'
    },
    {
      'fuelType': 'Diesel',
      'co2Emissions': '102',
      'cylinderCapacity': '1598',
      'yearOfManufacture': '2014',
      'name': 'Volkswagen Golf',
      'motFails': '2'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': '171',
      'cylinderCapacity': '1794',
      'yearOfManufacture': '2005',
      'name': 'Toyota Avensis',
      'motFails': '6'
    },
    {
      'fuelType': 'Petrol',
      'co2Emissions': '139',
      'cylinderCapacity': '1240',
      'yearOfManufacture': '2007',
      'name': 'Nissan Micra',
      'motFails': '4'
    }
  ]
