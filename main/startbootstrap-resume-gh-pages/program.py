import sys
import shlex
import subprocess
import json
import os.path
class client():
    def __init__(self, name, pid, password):
        self.pName=name
        self.uName=pid
        self.code=password
        self.friends = ["MP54"]
        self.music=[]
        self.alarm=None
def object_decoder(obj):
        cl=client(obj['pName'], obj['uName'],obj["code"])
        cl.friends=obj["friends"]
        cl.music=obj["music"]
        cl.alarm=obj["alarm"]
        return cl

def loadObjects():
    file = open("data.json","r")
    str=file.read()
    data=[]
    for line in str.split("\n"):
        data.append(json.loads(line,object_hook=object_decoder))
    file.close()
    return data
    

def addClient(name, pid, password):
    x=True
    if(os.stat("data.json").st_size == 0):
        x=False
    person= client(name, pid, password)
    file = open("data.json","a")
    if x:
        file.write("\n")
    person=json.dumps(person, default=jdefault)
    file.write(person)
    file.close()

def putBack(data):
    file = open("data.json","w")
    x=False
    for i in range(len(data)):
        person=json.dumps(data[i], default=jdefault)
        file.write(person)
        x=True
        if i+1==len(data):
            x=False
        if x:
            file.write("\n")
    file.close()
    
def deletePerson(id,data):
    for obj in data:
        if(obj.uName==id):
            data.remove(obj)
            putBack(data)
            break
def deleteFriend(mid,fid,data):
    x=0
    for obj in data:
        if(obj.uName==mid):
            for f in obj.friends:
                if(f==fid):
                    obj.friends.remove(fid)
                    putBack(data)
                    x=1
                    break
                
            if x==1:
                break

def deleteMusic(mid,musicN,data):
    x=0
    for obj in data:
        if(obj.uName==mid):
            for f in obj.music:
                
                if(f==musicN):
                    
                    obj.music.remove(f)
                    putBack(data)
                    x=1
                    break
                
            if x==1:
                break
def addFriend(mid,fid,data):
    for obj in data:
        if(obj.uName==mid):
            obj.friends.append(fid)
            putBack(data)
            break
            

def addMusic(mid,musicN,data):
    for obj in data:
        if(obj.uName==mid):
            obj.music.append(musicN)
            putBack(data)
            break

def setAlarm(mid,time,data):
     for obj in data:
            if(obj.uName==mid):
                obj.alarm=time
                putBack(data)
                break
    
def jdefault(o):
    return o.__dict__
    
def main(argv):
    #addClient("Jean-Kevin Coutu","Kevdu18","Life is good")
    data=loadObjects()
    setAlarm("Kevdu17","10:10",data)


if __name__ == "__main__": main(sys.argv)
