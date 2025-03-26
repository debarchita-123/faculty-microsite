import React, { useState } from 'react';
import './styles.css';

const facultyData = {
  'arup acharya': {
      name: 'Dr.Arup Abhinay Acharya',
      email: 'aacharyafcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: 'Ground Floor-Dean Chamber',
      image: 'Arup-Acharya.jpg'
  },
  'ronali padhy': {
      name: 'Mrs.Ronali Padhy',
      email: 'ronali.padhyfcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: 'Ground Floor (F-07)',
      image: 'Ronali-Padhy.jpg'
  },
  'suneeta mohanty': {
      name: 'Dr.Suneeta Mohanty',
      email: 'smohantyfcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: 'Ground Floor (F-08)',
      image: 'Suneeta-Mohanty.jpg'
  },
  'dipti dash': {
      name: 'Dr.Dipti Dash',
      email: 'dipti.dashfcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: 'Ground Floor (F-09)',
      image: 'Dipti-Dash.jpg'
  },
  'shaswati patra': {
      name: 'Dr.Shaswati Patri',
      email: 'shaswati.patrafcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: 'Ground Floor (F-10)',
      image: 'Shaswati-Patra.jpg'
  },
  'suresh chandra satapathy': {
      name: 'Prof.(Dr.)Suresh Chandra Satapathy',
      email: 'suresh.satapathyfcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: 'Ground Floor (F-11)',
      image: 'Suresh-Chandra-Satapathy.jpg'
  },
  'madhabananda das': {
      name: 'Prof.(Dr.)Madhabananda Das',
      email: 'mndas_prof@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: 'Ground Floor (F-12)',
      image: 'Madhabananda-Das.jpg'
  },
  'sankalp nayak': {
      name: 'Mr.Sankalp Nayak',
      email: 'sankalp.nayakfcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: 'Ground Floor (F-13)',
      image: 'Sankalp-Nayak.jpg'
  },
  'ajay anand': {
      name: 'Mr.Ajay Anand',
      email: 'ajay.anandfcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: 'Ground Floor (F-13)',
      image: 'Ajay-Anan.jpg'
  },
  'mohit ranjan panda': {
      name: 'Dr.Mohit Ranjan Panda',
      email: 'mohit.pandafcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: 'Ground Floor (F-14)',
      image: 'Mohit-Ranjan-Panda.jpg'
  },
  'kunal anand': {
      name: 'Mr.Kunal Anand',
      email: 'kunal.anandfcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: 'Ground Floor (F-14)',
      image: 'Kunal-Anand-Kunal-Anand-1.jpg'
  },
  'lalit kumar vashishtha': {
      name: 'Mr.Lalit Kumar Vashishtha',
      email: 'vashishthafcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '1st Floor (F-101)',
      image: 'l-Lalit-Vashishtha.jpg'
  },
  'subhashree darshana': {
      name: 'Mrs.Subhashree Darshana',
      email: 'subhashree.darshanafcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '1st Floor (F-102)',
      image: 'Subhashree-Darshana.jpg'
  },
  'benazir neha': {
      name: 'Ms.Benazir Neha',
      email: 'benazir.nehafcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '1st Floor (F-103)',
      image: 'Benazir-Neha.jpeg'
  },
  'abhishek ray': {
      name: 'Dr.Abhishek Ray',
      email: 'arayfcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '1st Floor (F-104)',
      image: 'Abhishek-Ray.jpg'
  },
  'prachet bhuyan': {
      name: 'Dr.Prachet Bhuyan',
      email: 'pbhuyanfcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '1st Floor (F-105)',
      image: 'Prachet-Bhuyan.jpg'
  },
  'subhasis dash': {
      name: 'Dr.Subhasis Dash',
      email: 'sdasfcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '1st Floor (F-106)',
      image: 'Subhasis-Dash.jpg'
  },
  'rishi raj': {
      name: 'Mr.Rishi Raj',
      email: 'rishiraj@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '1st Floor (F-107)',
      image: 'blank.jpg'
  },
  'chittaranjan pradhan': {
      name: 'Dr.Chittaranjan Pradhan',
      email: 'chittaranjanfcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '1st Floor (F-108)',
      image: 'Chittaranjan-Pradhan.jpg'
  },
  'tanmoy maitra': {
      name: 'Dr.Tanmoy Maitra',
      email: 'tanmoy.maitrafcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '1st Floor (F-109)',
      image: 'Tanmoy-Maitra.jpg'
  },
  'jyotiprakash mishra': {
      name: 'Mr.Jyotiprakash Mishra',
      email: 'jyotiprakash.mishrafcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '1st Floor (F-110)',
      image: 'Jyotiprakash-Mishra.jpg'
  },
  'r.n.ramakant parida': {
      name: 'Mr.R.N.Ramakant Parida',
      email: 'rparidafcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '1st Floor (F-111)',
      image: 'Ramakant-Parida.jpg'
  },
  'kumar devdutta': {
      name: 'Dr.Kumar Devdutta',
      email: 'kdevduttafcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '1st Floor (F-112)',
      image: 'Kumar-Devdutta.jpg'
  },
  'ambika prasad mishra': {
      name: 'Dr.Ambika Prasad Mishra',
      email: 'ambikaprasad.mishrafcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '1st Floor (F-113)',
      image: 'Ambikaprasad-mishra.jpg'
  },
  'ganga bishnu mund': {
      name: 'Prof.(Dr.)Ganga Bishnu Mund',
      email: 'mund@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '1st Floor (F-114)',
      image: 'gbmund-GB-Mund.jpeg'
  },
  'samaresh mishra': {
      name: 'Dr.Samaresh Mishra',
      email: 'smishrafcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '1st Floor (F-115)',
      image: 'Samaresh-Mishra-10-2-2021.jpg'
  },
  'pradeep kumar mallick': {
      name: 'Dr.Pradeep Kumar Mallick',
      email: 'pradeep.mallickfcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '1st Floor (F-116)',
      image: 'Pradeep-Kumar-Mallick.jpg'
  },
  'banchhanidhi dash': {
      name: 'Dr.Banchhanidhi Dash',
      email: 'banchhanidhi.dashfcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '1st Floor (F-117)',
      image: 'Banchhanidhi-Dash.jpg'
  },
  'biraja isac': {
      name: 'Mr. N. Biraja Isac',
      email: 'nbiraja.isacfcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '1st Floor (F-117)',
      image: 'biraja-N-Biraja-Isac.jpg'
  },
  'vikas hassija': {
      name: 'Dr.Vikas Hassija',
      email: 'vikas.hassijafcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '1st Floor (F-117)',
      image: 'vikas-hassija.jpg'
  },
  'prasant kumar pattnaik': {
      name: 'Prof.(Dr.)Prasant Kumar Pattnaik',
      email: 'patnaikprasantfcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '1st Floor (F-118)',
      image: 'Prasant-kumar-pattnaik.jpeg'
  },
  'manas ranjan nayak': {
      name: 'Dr.Manas Ranjan Nayak',
      email: 'manas.nayakfcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '1st Floor (F-119)',
      image: 'Manas-Ranjan-Nayak-1.jpg'
  },
  'prabhu prasad dev': {
      name: 'Mr. Prabhu Prasad Dev',
      email: 'prabhu.devfcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '1st Floor (F-119)',
      image: 'Prabhu-Prasad-Dev-1.jpg'
  },
  'anjan bandyopadhyay & team': {
      name: 'Dr. Anjan Bandyopadhyay',
      email: 'anjan.bandyopadhyayfcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '1st Floor (ALH-103 SIDE)',
      image: 'Anjan-Bandyopadhyay.jpg'
  },
  'arghya kundu': {
      name: 'Dr. Arghya Kundu',
      email: '',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '2nd Floor (F-201)',
      image: 'Arghya-Kundu.jpeg'
  },
  'abhijit deuri': {
      name: 'Abhijit Deuri',
      email: 'abhijit.deurifcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '2nd Floor (F-202)',
      image: 'abhijit-deuri.jpg'
  },
  'leena das': {
      name: 'Dr.Leena Das',
      email: 'ldasfcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '2nd Floor (F-203)',
      image: 'Leena-Das-2.jpg'
  },
  'anupam das': {
      name: 'Mr.Anupam Das',
      email: 'nil',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '2nd Floor (F-204)',
      image: 'unknown.png'
  },
  'jayanti dansana': {
      name: 'Mrs.Jayanti Dansana',
      email: 'jayantifcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '2nd Floor (F-205)',
      image: 'Jayanti-Dansana.jpg'
  },
  'himanshu ranjan': {
      name: 'Mr.Himanshu Ranjan',
      email: 'NIL',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '2nd Floor (F-206)',
      image: 'unknown.png'
  },
  'sunil kumar sawant': {
      name: 'Mr.Sunil Kumar Sawant',
      email: 'nil',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '2nd Floor (F-207)',
      image: 'unknown.jpg'
  },
  'smrutirekha behuria': {
      name: 'Mrs.Smrutirekha Behuria',
      email: 'smrutirekha.mishra@kiitbiotech.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '2nd Floor (F-209)',
      image: 'smrutirekha.jpg'
  },
  'nibedan panda': {
      name: 'Dr.Nibedan Panda',
      email: 'nibedan.pandafcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '2nd Floor (F-208)',
      image: 'Nibedan-Panda.jpg'
  },
  'nayan kumar subhashis behera': {
      name: 'Mr.Nayan Kumar Subhashis Behera',
      email: 'nil',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '2nd Floor (F-210)',
      image: 'unknown.png'
  },
  'pinaki sankar chatterjee': {
      name: 'Dr.Pinaki Sankar Chatterjee',
      email: 'pinakifcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '2nd Floor (F-211)',
      image: 'pinaki-chatterjee.jpg'
  },
  'mukesh kumar': {
      name: 'Dr.Mukesh Kumar',
      email: 'mukesh.kumarfcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '2nd Floor (F-212)',
      image: 'mukesh_photo-Dr.-Mukesh-Kumar.jpg'
  },
  'siddharth swarup rautaray': {
      name: 'Dr.Siddharth Swarup Rautaray',
      email: 'siddharthfcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '2nd Floor (F-213)',
      image: 'sid-siddharth-routaray.jpg'
  },
  'sujata swain': {
      name: 'Dr.Sujata Swain',
      email: 'sujata.swainfcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '2nd Floor (F-214)',
      image: 'Sujata-Swain.jpg'
  },
  'namita panda': {
      name: 'Dr.Namita Panda',
      email: 'npandafcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '2nd Floor (F-215)',
      image: 'Namita-Panda.jpg'
  },
  'aleena swetapadma': {
      name: 'Dr.Aleena Swetapadma',
      email: 'aleena.swetapadmafcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '2nd Floor (F-216)',
      image: 'Aleena-Swetapadma.jpg'
  },
  'bhaswati sahoo': {
      name: 'Mrs.Bhaswati Sahoo',
      email: 'bhaswati.sahoofcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '2nd Floor (F-217)',
      image: 'Bhaswati-Sahoo.jpg'
  },
  'adyasha dash': {
      name: 'Mrs.Adyasha Dash',
      email: 'adyasha.dashfcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '2nd Floor (F-218)',
      image: 'Adyasha-Dash-fcs.jpg'
  },
  'satarupa mohanty': {
      name: 'Dr.Satarupa Mohanty',
      email: 'satarupafcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '2nd Floor (F-219)',
      image: 'Satarupa-Mohanty-1.jpg'
  },
  'abinash panda': {
      name: 'Mr.Abinash Panda',
      email: 'abinas.pandafcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '2nd Floor (F-220)',
      image: 'Abinas-Panda.jpg'
  },
  'priyanka panigrahi': {
      name: 'Priyanka Panigrahi',
      email: 'priyanka.panigrahifcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '2nd Floor (F-221)',
      image: 'Priyanka.webp'
  },
  'anjan bandyopadhyay': {
      name: 'Dr.Anjan Bandyopadhyay',
      email: 'anjan.bandyopadhyayfcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '2nd Floor (F-222)',
      image: 'Anjan-Bandyopadhyay.jpg'
  },
  'amit kumar': {
      name: 'Mr.Amit Kumar',
      email: 'amit.jhafet@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '2nd Floor (F-223)',
      image: 'Amit-Kumar-V.-Jha.jpg'
  },
  'santwana sagnika': {
      name: 'Dr.Santwana Sagnika',
      email: 'santwana.sagnikafcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '2nd Floor (F-225)',
      image: 'Santwana-Sagnika-santwana-sagnika.jpg'
  },
  'sricheta parui': {
      name: 'Mr.Sricheta Parui',
      email: 'sricheta.paruifcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '2nd Floor (F-225)',
      image: 'Sricheta-Parui.jpg'
  },
  'jay sarraf': {
      name: 'Dr.Jay Sarraf',
      email: 'jay.sarraffcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '2nd Floor (F-226)',
      image: 'Dr-Jay-Sarraf.jpg'
  },
  'ajaya kumar parida': {
      name: 'Dr.Ajaya Kumar Parida',
      email: 'ajaya.paridafcs@kiit.ac.in',
      campusNumber: '15(BLOCK A)',
      chamberNumber: '2nd Floor (F-227)',
      image: 'Ajaya-Kumar-Parida.jpg'
  },
  'biswajit sahoo': {
      name: 'Prof(Dr)Biswajit Sahoo',
      email: 'bsahoofcs@kiit.ac.in',
      campusNumber: '15(BLOCK B)',
      chamberNumber: 'Gr.floor(Director General)',
      image: 'Biswajit-Sahoo-CSE.jpg'
  },
  'samresh mishra': {
      name: 'Prof(Dr)Samresh Mishra',
      email: 'smishrafcs@kiit.ac.in',
      campusNumber: '15(BLOCK B)',
      chamberNumber: '1st Floor (Director(Student Affairs))',
      image: 'Samaresh-Mishra-10-2-2021.jpg'
  },
  'niranjan kumar ray': {
      name: 'Dr.Niranjan Kumar Ray',
      email: 'niranjan.rayfcs@kiit.ac.in',
      campusNumber: '15(BLOCK B)',
      chamberNumber: 'Gr. Floor (Faculty Chamber-1)',
      image: 'Niranjan-Ray.jpg'
  },
  'anil kumar swain': {
      name: 'Mr.Anil Kumar Swain',
      email: 'NIL',
      campusNumber: '15(BLOCK B)',
      chamberNumber: 'Gr. Floor (Faculty Chamber-1)',
      image: 'Anil-Kumar-Swain.jpg'
  },
  'naliniprava behera': {
      name: 'Mrs.Naliniprava Behera',
      email: 'npbeherafcs@kiit.ac.in',
      campusNumber: '15(BLOCK B)',
      chamberNumber: 'Gr. Floor (Faculty Chamber-2)',
      image: 'Nalini-Prara-behera.jpg'
  },
  'krishna chakravarty': {
      name: 'Mrs.Krishna Chakravarty',
      email: 'krishna.chakravartyfcs@kiit.ac.in',
      campusNumber: '15(BLOCK B)',
      chamberNumber: 'Gr. Floor (Faculty Chamber-2)',
      image: 'Krishna-Chakravarty.jpg'
  },
  'hrudaya kumar tripathy': {
      name: 'Dr.Hrudaya Kumar Tripathy',
      email: 'hktripathyfcs@kiit.ac.in',
      campusNumber: '15(BLOCK B)',
      chamberNumber: 'Gr. Floor (Faculty Chamber-3)',
      image: 'Hrudaya-Kumar-Tripathy.jpg'
  },
  'sushruta mishra': {
      name: 'Dr.Sushruta Mishra',
      email: 'sushruta.mishrafcs@kiit.ac.in',
      campusNumber: '15(BLOCK B)',
      chamberNumber: 'Gr. Floor (Faculty Chamber-3)',
      image: 'Sushruta-Mishra.jpg'
  },
  'amiya kumar dash': {
      name: 'Mr.Amiya Kumar Dash',
      email: 'amiya.dasfcs@kiit.ac.in',
      campusNumber: '15(BLOCK B)',
      chamberNumber: 'Gr. Floor (Faculty Chamber-4)',
      image: 'Amiya-Dash.jpg'
  },
  'arup sarkar': {
      name: 'Mr.Arup Sarkar',
      email: 'arup.sarkarfcs@kiit.ac.in',
      campusNumber: '15(BLOCK B)',
      chamberNumber: 'Gr. Floor (Faculty Chamber-4)',
      image: 'Arup-Sarkar.jpg'
  },
  'minakhi rout': {
      name: 'Dr.Minakhi Rout',
      email: 'minakhi.routfcs@kiit.ac.in',
      campusNumber: '15(BLOCK B)',
      chamberNumber: 'Gr. Floor (Faculty Chamber-5)',
      image: 'Minakshi-rout.jpg'
  },
  'suchismita das': {
      name: 'Dr.Suchismita Das',
      email: 'suchismita.dasfcs@kiit.ac.in',
      campusNumber: '15(BLOCK B)',
      chamberNumber: 'Gr. Floor (Faculty Chamber-5)',
      image: 'Suchismita-Das-1.jpg'
  },
  'sarita tripathy': {
      name: 'Dr.Sarita Tripathy',
      email: 'sarita.tripathyfcs@kiit.ac.in',
      campusNumber: '15(BLOCK B)',
      chamberNumber: 'Gr. Floor (Faculty Chamber-6)',
      image: 'Sarita-Tripathy-1.jpg'
  },
  'roshni pradhan': {
      name: 'Dr.Roshni Pradhan',
      email: 'roshni.pradhanfcs@kiit.ac.in',
      campusNumber: '15(BLOCK B)',
      chamberNumber: 'Gr. Floor (Faculty Chamber-6)',
      image: 'Roshni-Pradhan.jpg'
  },
  'manoj kumar mishra': {
      name: 'Dr.Manoj Kumar Mishra',
      email: 'manojfcs@kiit.ac.in',
      campusNumber: '15(BLOCK B)',
      chamberNumber: 'Gr. Floor (Faculty Chamber-7)',
      image: 'Manoj-Kumar-Mishra-1.jpg'
  },
  'amiya ranjan panda': {
      name: 'Dr.Amiya Ranjan Panda',
      email: 'amiya.pandafcs@kiit.ac.in',
      campusNumber: '15(BLOCK B)',
      chamberNumber: 'Gr. Floor (Faculty Chamber-7)',
      image: 'Dr.-Amiya-Ranjan-Panda-Amiya-Panda.jpg'
  },
  'junali jasmine jena': {
      name: 'Dr.Junali Jasmine Jena',
      email: 'junali.jenafcs@kiit.ac.in',
      campusNumber: '15(BLOCK B)',
      chamberNumber: 'Gr. Floor (Faculty Chamber-8)',
      image: 'junali.jpg'
  },
  'lipika mohanty': {
      name: 'Mrs.Lipika Mohanty',
      email: 'lipika.mohantyfcs@kiit.ac.in',
      campusNumber: '15(BLOCK B)',
      chamberNumber: 'Gr. Floor (Faculty Chamber-8)',
      image: 'Lipika-Mohanty-scaled.jpg'
  },
  'bindu agarwalla': {
      name: 'Dr.Bindu Agarwalla',
      email: 'bindu.agarwalfcs@kiit.ac.in',
      campusNumber: '15(BLOCK B)',
      chamberNumber: 'Gr. Floor (Faculty Chamber-9)',
      image: 'Bindu-Agarwal.jpg'
  },
  'meghana g raj': {
      name: 'Meghana G Raj',
      email: 'meghana.rajfcs@kiit.ac.in',
      campusNumber: '15(BLOCK B)',
      chamberNumber: 'Gr. Floor (Faculty Chamber-9)',
      image: 'Meghana-Madam-CSE.jpg'
  },
  'saurabh bilgaiyan': {
      name: 'Dr.Saurabh Bilgaiyan',
      email: 'saurabh.bilgaiyanfcs@kiit.ac.in',
      campusNumber: '15(BLOCK B)',
      chamberNumber: 'Gr. Floor (Faculty Chamber-10)',
      image: 'SAURABH-BILGAIYAN.jpg'
  },
  'mainak bandyopadhyay': {
      name: 'Dr.Mainak Bandyopadhyay',
      email: 'mainak.bandyopadhyayfcs@kiit.ac.in',
      campusNumber: '15(BLOCK B)',
      chamberNumber: 'Gr. Floor (Faculty Chamber-10)',
      image: 'Mainak-Bandyopathyay.jpg'
  },
  'jagannath singh': {
      name: 'Dr.Jagannath Singh',
      email: 'jagannath.singhfcs@kiit.ac.in',
      campusNumber: '15(BLOCK B)',
      chamberNumber: 'Gr. Floor (Faculty Chamber-11)',
      image: 'Jagannath-Singh.jpg'
  },
  'abhaya kumar sahoo': {
      name: 'Dr.Abhaya Kumar Sahoo',
      email: 'abhaya.sahoofcs@kiit.ac.in',
      campusNumber: '15(BLOCK B)',
      chamberNumber: 'Gr. Floor (Faculty Chamber-11)',
      image: 'AKS_KWEB-Abhaya-Kumar-Sahoo.jpg'
  },
  'ajay kumar jena': {
      name: 'Dr.Ajay Kumar Jena',
      email: 'ajay.jenafcs@kiit.ac.in',
      campusNumber: '15(BLOCK B)',
      chamberNumber: 'Gr. Floor (Faculty Chamber-12)',
      image: 'Ajay-Kumar-Jena.jpg'
  },
  'himansu das': {
      name: 'Dr.Himansu Das',
      email: 'himanshufcs@kiit.ac.in',
      campusNumber: '15(BLOCK B)',
      chamberNumber: 'Gr. Floor (Faculty Chamber-12)',
      image: 'Himansu.jpg'
  },
  'alok kumar jagadev': {
      name: 'Prof.(Dr.)Alok Kumar Jagadev',
      email: 'alok.jagadevfcs@kiit.ac.in',
      campusNumber: '15(BLOCK B)',
      chamberNumber: 'Gr. Floor (Faculty Chamber-13)',
      image: 'Alok-Kumar-Jagadev.jpg'
  },
  'santosh kumar swain': {
      name: 'Prof.(Dr.)Santosh Kumar Swain',
      email: 'sswainfcs@kiit.ac.in',
      campusNumber: '15(BLOCK B)',
      chamberNumber: 'Gr. Floor (Faculty Chamber-13)',
      image: 'santosh-swain.jpg'
  },
  'anuja kumar acharya': {
      name: 'Dr.Anuja Kumar Acharya',
      email: 'anujafcs@kiit.ac.in',
      campusNumber: '15(BLOCK B)',
      chamberNumber: 'Gr. Floor (Faculty Chamber-14)',
      image: 'Anuja-Acharya.jpg'
  },
  'gananath bhuyan': {
      name: 'Mr.Gananath Bhuyan',
      email: 'gananatha.bhuyanfcs@kiit.ac.in',
      campusNumber: '15(BLOCK B)',
      chamberNumber: 'Gr. Floor (Faculty Chamber-14)',
      image: 'Gananatha-Bhuyan.jpg'
  },









  'manas ranjan lenka': {
    name: 'Mr.Manas Ranjan Lenka',
    email: 'manaslenkafcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-101)',
    image: 'manas ranjan lenka.jpg'
},

'sujoy datta': {
    name: 'Dr.Sujoy Datta',
    email: 'sdattafcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-101)',
    image: 'sujoy_datta-Sujoy-Datta.jpg'
},

'rajdeep chatterjee': {
    name: 'Dr.Rajdeep Chatterjee',
    email: 'rajdeepfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-101)',
    image: 'Rajdeep-Chatterjee.jpg'
},

'mahendra kumar gourisaria': {
    name: 'Mr.Mahendra Kumar Gourisaria',
    email: 'mkgourisariafcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-101)',
    image: 'Mahendra-Kumar-Gourisaria.jpg'
},

'partha pratim sarangi': {
    name: 'Dr.Partha Pratim Sarangi',
    email: 'pp.sarangifcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-101)',
    image: 'Partha-pratim-Sarangi.jpg'
},

'monideepa roy': {
    name: 'Dr.Monideepa Roy',
    email: 'monideepafcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-101)',
    image: 'Monideepa-Roy-2.png'
},

'pradeep kandula': {
    name: 'Mr.Pradeep Kandula',
    email: 'pkandulafcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-101)',
    image: 'pradeep-kandula.jpg'
},

'murari mandal': {
    name: 'Dr.Murari Mandal',
    email: 'murari.mandalfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-101)',
    image: 'Murari-Mandal.jpg'
},

'manjusha pandey': {
    name: 'Dr.Manjusha Pandey',
    email: 'NIL',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-101)',
    image: 'manjusha-pandey.jpg'
},

'partha sarathi paul': {
    name: 'Dr.Partha Sarathi Paul',
    email: 'parthasarathi.paulfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-101)',
    image: 'Partha-Sarathi-Paul.jpg'
},

'lipika dewangan': {
    name: 'Mrs.Lipika Dewangan',
    email: 'lipika.dewanganfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-101)',
    image: 'Lipika-Dewangan.jpg'
},

'rajat kumar behera': {
    name: 'Dr.Rajat Kumar Behera',
    email: 'rajatkumar.beherafcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-101)',
    image: 'Rajat-Kumar-Behera.jpg'
},

'debashis hati': {
    name: 'Mr.Debashis Hati',
    email: 'dhatifcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-101)',
    image: 'Debashis-Hati.jpg'
},

'harish kumar patnaik': {
    name: 'DMr.Harish Kumar Patnaik',
    email: 'hpatnaikfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-101)',
    image: 'Harish-Kumar-Patnaik.jpg'
},

'suchismita rout': {
    name: 'Dr.Suchismita Rout',
    email: 'suchismita.routfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-101)',
    image: 'SRout-Dr-Suchismita-Rout.jpg'
},

'pratyusa mukherjee': {
    name: 'Ms.Pratyusa Mukherjee',
    email: 'pratyusa.mukherjeefcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-102)',
    image: 'Pratyusa-Mukherjee.jpg'
},

'jayeeta chakraborty': {
    name: 'Ms.Jayeeta Chakraborty',
    email: 'jayeeta.chakrabortyfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-102)',
    image: 'JayeetaChakraborty.jpg'
},

'sangita achary': {
    name: 'Ms.N.Sangita Achary',
    email: 'NIL',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-102)',
    image: 'unknown.jpg'
},

'priyanka roy': {
    name: 'Ms.Priyanka Roy',
    email: 'priyanka.royfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-102)',
    image: 'Priyanka-Roy.jpg'
},

'shilpa das': {
    name: 'Ms.Shilpa Das',
    email: 'shilpa.dasfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-102)',
    image: 'ShilpaDas.jpg'
},

'sarita mishra': {
    name: 'Dr.Sarita Mishra',
    email: 'sarita.mishrafcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-103)',
    image: 'Sarita-Mishra.jpg'
},

'sohail khan': {
    name: 'Mr.Sohail Khan',
    email: 'sohail.khanfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-103)',
    image: 'sohail-khan.webp'
},

'swati priyambada satpathy': {
    name: 'Ms.Swati Priyambada Satpathy',
    email: 'NIL',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-103)',
    image: 'priyambada.jpg'
},

'siddharth swarup routray': {
    name: 'Dr.Siddharth Swarup Routray',
    email: 'NIL',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-103)',
    image: 'SIDDHARTH-SWARUP.jpg'
},

'mohit ranjan panda': {
    name: 'Dr.Mohit Ranjan Panda',
    email: 'mohit.pandafcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-103)',
    image: 'Mohit-Ranjan-Panda (1).jpg'
},

'abir sen': {
    name: 'Mr.Abir Sen',
    email: 'abir.senfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-104)',
    image: 'IMG_20240205_231542-Abir-Sen-scaled.jpg'
},

'debanjan pathak': {
    name: 'Dr.Debanjan Pathak',
    email: 'debanjan.pathakfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-104)',
    image: 'Debanjan-Pathak.jpg'
},

'hitesh mohapatra': {
    name: 'Dr.Hitesh Mohapatra',
    email: 'hiteshmahapatra.fcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-104)',
    image: 'HITESH-MOHAPATRA.webp'
},

'soumya ranjan mishra': {
    name: 'Dr.Soumya Ranjan Mishra',
    email: 'soumyaranjan.mishrafcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-104)',
    image: 'Dr-Soumya-Ranjan-Mishra.jpg'
},

'subhadip parmanik': {
    name: 'Mr.Subhadip Parmanik',
    email: 'subhadip.pramanikfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-104)',
    image: 'subha-Subhadip-Pramanik.jpg'
},

'prasenjit maiti': {
    name: 'Mr.Prasenjit Maiti',
    email: 'prasenjit.maitifcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Faculty Block-104)',
    image: 'Prasenjit-Maiti.jpg'
},

'jhalak hota': {
    name: 'Mr.Jhalak Hota',
    email: 'jhalak.hotafcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '2nd Floor (Faculty Block-201)',
    image: 'Jhalak-Hota.jpg'
},

'jaydeep das': {
    name: 'Mr.Jaydeep Das',
    email: 'NIL',
    campusNumber: '14',
    chamberNumber: '2nd Floor (Faculty Block-201)',
    image: 'JAYDEEP-DAS.jpg'
},

'ranjita kumari dash': {
    name: 'Dr.Ranjita Kumari Dash',
    email: 'NIL',
    campusNumber: '14',
    chamberNumber: '2nd Floor (Faculty Block-201)',
    image: 'unknown.jpg'
},

'anisha kumari': {
    name: 'Dr.Anisha Kumari',
    email: 'anisha.kumarifcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '2nd Floor (Faculty Block-201)',
    image: 'Dr.-Anisha-Kumari.jpg'
},

'debachudamani prusti': {
    name: 'Dr.Debachudamani Prusti',
    email: 'debachudamani.prustifcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '2nd Floor (Faculty Block-201)',
    image: 'kiit-Debachudamani-Prusti.jpg'
},

'jasaswi prasad  mohanty': {
    name: 'Dr.Jasaswi Prasad  Mohanty',
    email: 'jasaswi.mohantyfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '2nd Floor (Faculty Block-301)',
    image: 'Jasaswi-Prasad-Mohanty.jpg'
},

'santosh kumar baliarsingh': {
    name: 'Dr.Santosh Kumar Baliarsingh',
    email: 'santos.baliarsinghfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '2nd Floor (Faculty Block-301)',
    image: 'Santos-Kumar-Baliarsingh.jpg'
},

'ashish singh': {
    name: 'Dr.Ashish Singh',
    email: 'ashish.singhfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '2nd Floor (Faculty Block-301)',
    image: 'Ashish-Singh.jpg'
},

'manas ranjan biswal': {
    name: 'Mr.Manas Ranjan Biswal',
    email: 'manas.biswalfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '3rd Floor (Faculty Block-301)',
    image: 'Manas-Ranjan-Biswal.jpg'
},

'prabhu prasad dev': {
    name: 'Mr.Prabhu Prasad Dev',
    email: 'prabhu.devfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '2nd Floor (Faculty Block-301)',
    image: 'Prabhu-Prasad-Dev-1 (1).jpg'
},

'satyananda champati': {
    name: 'Dr.Satyananda Champati',
    email: 'satya.raifcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '4th Floor (Faculty Block-401)',
    image: 'satyananda.webp'
},

'ipsita paul': {
    name: 'Ms.Ipsita Paul',
    email: 'ipsita.paulfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '4th Floor (Faculty Block-401)',
    image: 'Ipsita-Paul.jpg'
},

'chandani kumari': {
    name: 'Mrs.Chandani Kumari',
    email: 'chandani.kumarifcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '4th Floor (Faculty Block-401)',
    image: 'Chandani-Kumari.jpg'
},
'subhransu sekhar tripathy': {
    name: 'Dr.Subhransu Sekhar Tripathy',
    email: 'subhranshu.tripathyfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '4th Floor (Faculty Block-401)',
    image: 'Dr-Subhranshu-Sekhar-Tripathy.jpg'
},

'jayanta mondal': {
    name: 'Dr.Jayanta Mondal',
    email: 'jayanta.mondalfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '4th Floor (Faculty Block-401)',
    image: 'Jayanta-Mondal.jpg'
},

'mohit ranjan jena': {
    name: 'Mr.Mohit Ranjan Jena',
    email: 'NIL',
    campusNumber: '14',
    chamberNumber: '1st Floor (Cabin-1)',
    image: 'unknown.png'
},

'bijoy das': {
    name: 'Mr.Bijoy Das',
    email: 'bijoy.dasfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Examination Hall)',
    image: 'bijoy.webp'
},

'sujoy madhab roy': {
    name: 'Dr.Sujoy Madhab Roy',
    email: 'sujoy.royfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Examination Hall)',
    image: 'SujoyJPG-Sujoy-Roy.jpg'
},

'uppada gautami': {
    name: 'Ms.Uppada Gautami',
    email: 'uppada.gautamifcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Examination Hall)',
    image: 'Gautami-GAUTAMI-UPPADA.jpg'
},

'krishnendu maity': {
    name: 'Mr.Krishnendu Maity',
    email: 'krishnendu.maityfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor (Examination Hall)',
    image: 'Krish_pic-Krishnendu-Maity.jpg'
},










'asif uddin khan': {
    name: '	Dr. Asif Uddin Khan',
    email: 'asif.khanfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '4th Floor(Faculty Block-402)',
    image: 'Asif-Uddin-Khan.jpg'
},
'dayal kumar behera': {
    name: 'Dr. Dayal Kumar Behera',
    email: 'dayal.beherafcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '4th Floor(Faculty Block-402)',
    image: 'Dayal-Kumar-Behera.jpg'
},
'mandakini priyadarshini': {
    name: 'Mrs. Mandakini Priyadarshini',
    email: 'mandakini.beherafcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '4th Floor(Faculty Block-402)',
    image: 'Mandakini.jpg'
},
'sunil kumar gouda': {
    name: 'Mr. Sunil Kumar Gouda',
    email: 'sunil.goudafcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '4th Floor(Faculty Block-402)',
    image: 'Sunil-Kumar-Gouda.jpg'
},
'vishal meena': {
    name: 'Mr. Vishal Meena',
    email: 'vishal.meenafcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '4th Floor(Faculty Block-402)',
    image: 'Vishal-Meena.jpg'
},
'soumya ranjan nayak': {
    name: 'Dr. Soumya Ranjan Nayak',
    email: 'soumyaranjan.nayakfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '4th Floor(Faculty Block-402)',
    image: 'Soumya-Ranjan-Nayak.jpg'
},
'sampriti soor': {
    name: 'Mr. Sampriti Soor',
    email: 'sampriti.soorfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '4th Floor(Faculty Block-402)',
    image: 'Sampriti-Soor.jpg'
},
'kumar surjeet choudhury': {
    name: 'Dr. Kumar Surjeet Choudhury',
    email: 'nil',
    campusNumber: '14',
    chamberNumber: '4th Floor(Faculty Block-402)',
    image: 'kumar-surjeet-choudhury.jpeg'
},
'aradhana behura': {
    name: 'Ms. Aradhana Behura',
    email: 'aradhana.behurafcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '4th Floor(Faculty Block-402)',
    image: 'Aradhana-Behura.jpg'
},
'a. ranjith': {
    name: 'Mr. A. Ranjith',
    email: 'a.ranjithfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '4th Floor(Faculty Block-402)',
    image: 'ranjith_pic-A-Ranjith.jpg'
},
'ajit kumar pasayat': {
    name: 'Mr. Ajit Kumar Pasayat',
    email: 'ajit.pasayatfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '4th Floor(Faculty Block-402)',
    image: 'Ajit-Kumar-Pasayat.jpg'
},
'rakesh kumar rai': {
    name: 'Mr. Rakesh Kumar Rai',
    email: 'rakesh.raifcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '4th Floor(Faculty Block-402)',
    image: 'kiit-rakesh-rai.jpg'
},
'mainak biswas': {
    name: 'Dr. Mainak Biswas',
    email: 'mainak.biswasfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '4th Floor(Faculty Block-402)',
    image: 'Manik-Biswas.webp'
},
'saurajit behera': {
    name: 'Dr. Saurajit Behera',
    email: 'nil',
    campusNumber: '14',
    chamberNumber: '4th Floor(Faculty Block-402)',
    image: 'sourajit.jpeg'
},
'nikhilanand arya': {
    name: 'Mr. Nikhilanand Arya',
    email: 'nikhilanand.aryafcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '4th Floor(Faculty Block-402)',
    image: 'Nikhilanand-Arya.jpg'
},
'sovan kumar sahoo': {
    name: '	Mr. Sovan Kumar Sahoo',
    email: 'sovan.sahoofcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '4th Floor(Faculty Block-402)',
    image: 'Sovan-Kumar-Sahoo.jpg'
},
'tanik saikh': {
    name: 'Mr. Tanik Saikh',
    email: 'tanik.saikhfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '4th Floor(Faculty Block-402)',
    image: 'Tanik-Saikh.jpg'
},
'rinku datta rakshit': {
    name: 'Dr. Rinku Datta Rakshit',
    email: 'rinku.rakshitfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '4th Floor(Faculty Block-402)',
    image: 'Rinku-Datta-Rakshit.jpg'
},
'sourabh jha': {
    name: 'Mr. Sourabh Jha',
    email: 'saurabh.jhafcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '4th Floor(Faculty Block-402)',
    image: 'Saurabh-Jha.jpg'
},
'krutika verma': {
    name: 'Ms. Krutika Verma',
    email: 'krutika.vermafcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '4th Floor(Faculty Block-402)',
    image: 'Krutika-Verma.jpg'
},
'vijay kumar meena': {
    name: '	Mr. Vijay Kumar Meena',
    email: 'vijay.meenafcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '4th Floor(Faculty Block-402)',
    image: 'Vijay.jpg'
},
'deependra singh': {
    name: 'Mr. Deependra Singh',
    email: 'deependra.singhfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '4th Floor(Faculty Block-402)',
    image: 'Deependra-Singh.jpg'
},
'raghunath dey': {
    name: 'Dr. Raghunath Dey',
    email: 'raghunath.deyfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '4th Floor(Faculty Block-402)',
    image: 'Raghunath-Dey.jpg'
},
'abhishek raj': {
    name: 'Mr. Abhishek Raj',
    email: 'abhishek.rajfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '4th Floor(Faculty Block-402)',
    image: 'abhisek-raj.jpeg'
},
'supriyo mandal': {
    name: '	Dr. Supriyo Mandal',
    email: 'supriyo.mandalfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '4th Floor(Faculty Block-402)',
    image: 'Supriyo-Mandal.jpg'
},
'swagatika sahoo': {
    name: 'Swagatika Sahoo',
    email: 'swagatika.sahoofcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '4th Floor(Faculty Block-402)',
    image: 'Swagatika-Sahoo.jpg'
},
'bijoy das': {
    name: 'Mr. Bijoy Das',
    email: 'bijoy.dasfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor(Examination hall)',
    image: 'Bijoy.webp'
},

'sujoy madhab roy': {
    name: 'Dr. Sujoy Madhab Roy',
    email: 'sujoy.royfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor(Examination hall)',
    image: 'SujoyJPG-Sujoy-Roy.jpg'
},
'uppada gautami': {
    name: 'Ms. Uppada Gautami',
    email: 'uppada.gautamifcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor(Examination hall)',
    image: 'Gautami-GAUTAMI-UPPADA.jpg'
},
'krishnendu maity': {
    name: '	Mr. Krishnendu Maity',
    email: 'krishnendu.maityfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor(Examination hall)',
    image: 'Krish_pic-Krishnendu-Maity.jpg'
},
'sambit praharaj': {
    name: 'Dr. Sambit Praharaj',
    email: 'sambit.praharajfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor(Examination hall)',
    image: 'Sambit-Praharaj.jpg'
},
'biswajeet sethi': {
    name: 'Dr. Biswajeet Sethi',
    email: 'biswajeet.sethifcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor(Examination hall)',
    image: 'Biswajeet-Sethi.jpg'
},
'soumya sanket patra': {
    name: 'Mr. Soumya Sanket Patra',
    email: 'soumya.patrafcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor(Examination hall)',
    image: 'Soumya-Sanket-Patra.jpg'
},
'shubhangi shreya': {
    name: 'Ms. Shubhangi Shreya',
    email: 'shubhangi.shreyafcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor(Examination hall)',
    image: 'Shubhangi-Shreya.jpg'
},
'ankit raj': {
    name: 'Mr. Ankit Raj',
    email: 'ankit.rajfcs@kiit.ac.in',
    campusNumber: '14',
    chamberNumber: '1st Floor(Examination hall)',
    image: 'Ankit-Raj.jpg'
},
'jyoti prakash meher': {
    name: 'Jyoti Prakash Meher',
    email: '',
    campusNumber: '14',
    chamberNumber: '1st Floor(Examination hall)',
    image: ''
},
'ankit raj': {
    name: 'Mr. Ankit Raj',
    email: 'nil',
    campusNumber: '14',
    chamberNumber: '1st Floor(Examination hall)',
    image: 'unknown.jpg'
}


};


function FacultyMicrosite() {
  const [facultyInput, setFacultyInput] = useState('');
  const [facultyDetails, setFacultyDetails] = useState(null);

  const handleSearch = () => {
    const faculty = facultyData[facultyInput.trim().toLowerCase()];
    if (faculty) {
      setFacultyDetails(faculty);
    } else {
      alert('Faculty member not found.');
    }
  };

  const handleBack = () => {
    setFacultyDetails(null);
    setFacultyInput('');
  };

  return (
    <div>
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <img src="images.png" alt="Universo Logo" />
            <span>Kalinga Institute of Industrial Technology</span>
          </div>
        </div>
      </header>

      {facultyDetails ? (
        <section id="faculty-details" className="faculty-details">
          <h2>Faculty Details</h2>
          <div id="faculty-info">
            <img src={facultyDetails.image} alt={facultyDetails.name} />
            <p><strong>Name:</strong> {facultyDetails.name}</p>
            <p><strong>Email:</strong> {facultyDetails.email}</p>
            <p><strong>Campus Number:</strong> {facultyDetails.campusNumber}</p>
            <p><strong>Chamber Number:</strong> {facultyDetails.chamberNumber}</p>
          </div>
          <br />
          <button id="back-btn" onClick={handleBack}>Back</button>
        </section>
      ) : (
        <main id="main-page" className="main-page">
          <section className="welcome">
            <div className="welcome-content">
              <h1>Faculty Availability</h1>
              <p>Find information and details of your faculty members.</p>
              <input
                type="text"
                id="faculty-input"
                className="faculty"
                placeholder="Enter Faculty Member's name..."
                value={facultyInput}
                onChange={(e) => setFacultyInput(e.target.value)}
              />
              <br />
              <br />
              <button id="search-btn" onClick={handleSearch}>View Details</button>
            </div>
          </section>

          <section className="news">
            <h2>About</h2>
            <ul>
              <li>Search the name of the faculties you want to get the details about their availability for easy communication with the faculties.</li>
              <li>You can easily browse through faculty profiles to find contact details and current availability for consultations. Stay informed and connected with the educators who shape your learning experience.</li>
            </ul>
          </section>
        </main>
      )}
    </div>
  );
}

export default FacultyMicrosite;

