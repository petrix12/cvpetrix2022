VERSION 5.00
Begin VB.Form frmMailLotusNotes 
   Caption         =   "Mensaje Texto - Producción DSTM"
   ClientHeight    =   4875
   ClientLeft      =   60
   ClientTop       =   450
   ClientWidth     =   5625
   Icon            =   "frmMailLotusNotes.frx":0000
   LinkTopic       =   "Form1"
   MaxButton       =   0   'False
   ScaleHeight     =   4875
   ScaleWidth      =   5625
   StartUpPosition =   3  'Windows Default
   Begin VB.TextBox Text1 
      BackColor       =   &H80000002&
      Height          =   1695
      Left            =   120
      MultiLine       =   -1  'True
      TabIndex        =   5
      Text            =   "frmMailLotusNotes.frx":1B9A
      Top             =   2280
      Width           =   5295
   End
   Begin VB.CommandButton Salir 
      Caption         =   "Salir"
      Height          =   375
      Left            =   2760
      TabIndex        =   3
      Top             =   4320
      Width           =   1215
   End
   Begin VB.CommandButton Enviar 
      Caption         =   "Enviar"
      Height          =   375
      Left            =   4200
      TabIndex        =   2
      Top             =   4320
      Width           =   1215
   End
   Begin VB.TextBox mensaje 
      Height          =   1095
      Left            =   120
      MultiLine       =   -1  'True
      TabIndex        =   1
      Top             =   600
      Width           =   5295
   End
   Begin VB.Label Label1 
      Caption         =   "Formula Excel:"
      Height          =   255
      Left            =   120
      TabIndex        =   4
      Top             =   1920
      Width           =   1455
   End
   Begin VB.Label Label3 
      Caption         =   "Producción COF:"
      Height          =   255
      Left            =   240
      TabIndex        =   0
      Top             =   240
      Width           =   1335
   End
End
Attribute VB_Name = "frmMailLotusNotes"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Dim session As New NotesSession
Dim db As NotesDatabase
Dim doc As NotesDocument

Private Sub Enviar_Click()
    Set doc = db.CreateDocument
    Call doc.AppendItemValue("Form", "memo")
    'Call doc.AppendItemValue("SendTo", email.Text)
    'Call doc.AppendItemValue("SendTo", "planppgdstm@pdvsa.com")
    Call doc.AppendItemValue("SendTo", "planificaciondstm@gmail.com")
    'Call doc.AppendItemValue("Subject", asunto.Text)
    Call doc.AppendItemValue("Subject", "TEXTO COF " & Day(Date) & "-" & Month(Date) & "-" & Year(Date))
    Call doc.AppendItemValue("Body", mensaje.Text)
    Call doc.Send(False)
    Unload Me
End Sub

Private Sub Form_Load()
    'On Error GoTo Handler
    
    Call session.Initialize
    'Set db = session.GetDatabase("nombre_servidor_Domino", "ruta_y_nombre_archivo_correo.nsf")
    'PEDRO BAZÓ
    'Set db = session.GetDatabase("PLCGUACOR02/SERVIDORES/PDVSA", "mailPDV6\BAZOP.nsf")
    'DORIMAR TORRES
    'Set db = session.GetDatabase("PLCGUACOR05/SERVIDORES/PDVSA", "mailPDV6\TORRESDT.nsf")
    'FELIX SANTAELLA
    'Set db = session.GetDatabase("PLCGUACOR03/SERVIDORES/PDVSA", "mailPDV3\SANTAELLAFS.nsf")
    'POOL PLAN PLANIFICACIÓN DISTRITO SAN TOMÉ
    Set db = session.GetDatabase("PLCGUACOR01/SERVIDORES/PDVSA", "mailPDV4\PLANPPGDSTM.nsf")
    
'Handler:
'    Unload Me
End Sub



Private Sub Salir_Click()
    'On Error GoTo Handler
    
    Unload Me
    
'Handler:
'    Unload Me
End Sub
