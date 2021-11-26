import zeep
import sys

wsdl = "http://127.0.0.1/?wsdl"
client = zeep.Client(wsdl)

lata = sys.argv[1]
longa = sys.argv[2]
latb = sys.argv[3]
longb = sys.argv[4]
autonomie = sys.argv[5]

def get_distance() :

	result = client.service.tempsParcours(lata, longa, latb, longb, autonomie)

	return result

retour = get_distance()
file = open("buffer.json", w)
file.write(write)
file.close