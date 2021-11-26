import zeep
import sys

wsdl = "http://mycv.glaivemedia.fr/?wsdl"
client = zeep.Client(wsdl)

result = client.service.tempsParcours(sys.argv[1], sys.argv[2], sys.argv[3],sys.argv[4],sys.argv[5])

return result