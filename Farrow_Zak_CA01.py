#Your University id Farrow_Zak_CA01.py
#October 2019
#Calculation of Draft of iron barge, give length, breadth and height

#user input
length_ = float(input("Enter length of barge(m): "))
breadth_ = float(input("Enter breadth of barge(m): "))
height_ = float(input("Enter height of barge(m): "))

#process
surfaceArea_ = height_ * breadth_ * length_
mass_ = 1.06 * surfaceArea_
draft_ = mass_ / (length_ * breadth_)
height_AW = height_ - draft_

#output
print ("\nYou entered:")
print ("Length: ", length_)
print ("Breadth: ", breadth_)
print ("Height: ", height_)
print ("\nCalcuations:")
print ("\nSurface area(m) =", surfaceArea_)
print ("Mass(kg) =", mass_)
print ("Draft(kg) =", draft_)
print ("Height of barge above water level(m) =", height_AW)
